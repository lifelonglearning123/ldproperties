import { NextResponse } from "next/server";

/**
 * POST /api/enquiry
 *
 * Submits an enquiry to the GoHighLevel subaccount:
 *   1. Upserts a Contact with name / email / phone / postcode.
 *   2. Attaches a Note containing the qualifying answers (ownership,
 *      conservation, planning, budget, timeframe) + the free-text message.
 *
 * The note is the source of truth — the brief structured fields are duplicated
 * into the note body so the LD team can scan a single field in GHL without
 * clicking around.
 *
 * Env vars:
 *   GHL_API_KEY       — Location key (v1) or Private Integration Token (v2)
 *   GHL_LOCATION_ID   — Subaccount Location ID
 *   GHL_API_VERSION   — optional, defaults to "2021-07-28"
 */

export const runtime = "nodejs";

type EnquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  postcode?: string;
  service?: string;
  ownership?: string;
  status?: string;
  planning?: string;
  budget?: string;
  timeframe?: string;
  message?: string;
  // Optional context — set by the homepage guide CTA via ?guide=extensions
  source?: string;
};

const GHL_BASE = "https://services.leadconnectorhq.com";
const DEFAULT_API_VERSION = "2021-07-28";

// Human-readable labels for the radio answer values
const labels = {
  service: {
    extensions: "Extensions",
    kitchens: "Kitchens",
    bathrooms: "Bathrooms",
    "garden-rooms": "Garden Rooms",
    other: "Something else",
  } as Record<string, string>,
  ownership: {
    own: "We own it",
    buying: "We're buying it",
    renting: "Other arrangement",
  } as Record<string, string>,
  status: {
    neither: "Neither",
    conservation: "Conservation area",
    listed: "Listed",
    unknown: "Not sure",
  } as Record<string, string>,
  planning: {
    granted: "Already granted",
    submitted: "Submitted",
    "not-yet": "Not yet",
    "not-needed": "Not needed",
    unknown: "Not sure",
  } as Record<string, string>,
  budget: {
    u50: "Under £50k",
    "50-100": "£50k – £100k",
    "100-250": "£100k – £250k",
    "250-500": "£250k – £500k",
    "500+": "£500k +",
    unsure: "Not sure yet",
  } as Record<string, string>,
  timeframe: {
    "3m": "Within 3 months",
    "3-6": "3 – 6 months",
    "6-12": "6 – 12 months",
    explore: "Exploring",
  } as Record<string, string>,
};

function pretty(group: keyof typeof labels, v?: string) {
  if (!v) return "—";
  return labels[group][v] ?? v;
}

function buildNote(p: EnquiryPayload): string {
  const ts = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/London",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const trim = (s?: string) => (s && s.trim() ? s.trim() : "—");

  return [
    "=== Enquiry from ldproperties.uk ===",
    "",
    `Postcode:           ${trim(p.postcode)}`,
    `Project type:       ${pretty("service", p.service)}`,
    "",
    `Property:           ${pretty("ownership", p.ownership)}`,
    `Conservation/list:  ${pretty("status", p.status)}`,
    `Planning:           ${pretty("planning", p.planning)}`,
    `Rough budget:       ${pretty("budget", p.budget)}`,
    `Timeframe:          ${pretty("timeframe", p.timeframe)}`,
    "",
    "Note from client:",
    trim(p.message),
    "",
    p.source ? `Source:   ${p.source}` : "",
    `Submitted: ${ts} (Europe/London)`,
  ]
    .filter(Boolean)
    .join("\n");
}

function splitName(full: string): { firstName: string; lastName: string } {
  const trimmed = full.trim();
  if (!trimmed) return { firstName: "", lastName: "" };
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

async function ghlFetch(path: string, init: RequestInit & { apiKey: string; version: string }) {
  const { apiKey, version, ...rest } = init;
  const res = await fetch(`${GHL_BASE}${path}`, {
    ...rest,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: version,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(rest.headers || {}),
    },
  });
  const text = await res.text();
  let body: unknown = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }
  return { ok: res.ok, status: res.status, body };
}

export async function POST(req: Request) {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  const version = process.env.GHL_API_VERSION || DEFAULT_API_VERSION;

  if (!apiKey || !locationId) {
    return NextResponse.json(
      { ok: false, error: "GHL not configured. Set GHL_API_KEY and GHL_LOCATION_ID in .env.local." },
      { status: 503 },
    );
  }

  let payload: EnquiryPayload;
  try {
    payload = (await req.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  // Minimum-viable validation — name + email are required, the rest are optional.
  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim().toLowerCase();
  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Name and email are required." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }

  const { firstName, lastName } = splitName(name);

  // Upsert contact — GHL's upsert endpoint dedupes by email
  const upsert = await ghlFetch("/contacts/upsert", {
    method: "POST",
    apiKey,
    version,
    body: JSON.stringify({
      locationId,
      firstName,
      lastName,
      email,
      phone: payload.phone?.trim() || undefined,
      postalCode: payload.postcode?.trim() || undefined,
      source: "ldproperties.uk enquiry form",
      tags: ["website-enquiry", payload.service || "unspecified-service"],
    }),
  });

  if (!upsert.ok) {
    console.error("[enquiry] GHL contact upsert failed:", upsert.status, upsert.body);
    return NextResponse.json(
      { ok: false, error: "Could not create contact in CRM.", details: upsert.body },
      { status: 502 },
    );
  }

  // Extract the contact id from the upsert response — GHL nests it under `contact.id`
  const upsertBody = upsert.body as { contact?: { id?: string } } | null;
  const contactId = upsertBody?.contact?.id;
  if (!contactId) {
    console.error("[enquiry] No contactId in GHL upsert response:", upsert.body);
    return NextResponse.json(
      { ok: false, error: "Contact created but no ID returned." },
      { status: 502 },
    );
  }

  // Attach the qualifying-info note — this is the bulk of the enquiry
  const note = await ghlFetch(`/contacts/${contactId}/notes`, {
    method: "POST",
    apiKey,
    version,
    body: JSON.stringify({
      body: buildNote(payload),
    }),
  });

  if (!note.ok) {
    console.error("[enquiry] GHL note attach failed:", note.status, note.body);
    // Don't fail the whole submission — the contact is in the CRM, the note is the only loss.
    return NextResponse.json(
      { ok: true, warning: "Contact saved but note could not be attached." },
      { status: 200 },
    );
  }

  return NextResponse.json({ ok: true, contactId }, { status: 200 });
}
