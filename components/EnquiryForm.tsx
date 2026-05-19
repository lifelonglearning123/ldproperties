"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;
  ownership: string;
  status: string;
  planning: string;
  budget: string;
  timeframe: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  postcode: "",
  service: "",
  ownership: "",
  status: "",
  planning: "",
  budget: "",
  timeframe: "",
  message: "",
};

export function EnquiryForm({ source }: { source?: string }) {
  const [data, setData] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !body.ok) {
        setStatus("error");
        setErrorMsg(body.error || "Something went wrong sending your enquiry. Please try again or email us directly.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[--color-ink]/20 bg-[--color-paper] p-10 md:p-14">
        <p className="eyebrow">Thank you</p>
        <h3 className="mt-5 font-display text-3xl md:text-4xl tracking-tight">
          Your enquiry is with us.
        </h3>
        <p className="mt-5 text-lg text-[--color-ink-soft] leading-relaxed max-w-xl">
          We&apos;ll be in touch within one working day. If you don&apos;t hear back, email us directly at{" "}
          <a href="mailto:studio@ldproperties.uk" className="link-underline pb-0.5">studio@ldproperties.uk</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-10" onSubmit={onSubmit} aria-label="LD Properties enquiry form">
      {/* About you */}
      <fieldset className="space-y-6">
        <legend className="eyebrow mb-2">About you</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field id="name" label="Your name" type="text" value={data.name} onChange={(v) => update("name", v)} required />
          <Field id="email" label="Email" type="email" value={data.email} onChange={(v) => update("email", v)} required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field id="phone" label="Phone (optional)" type="tel" value={data.phone} onChange={(v) => update("phone", v)} />
          <Field id="postcode" label="Postcode" type="text" value={data.postcode} onChange={(v) => update("postcode", v)} required />
        </div>
      </fieldset>

      {/* About the project */}
      <fieldset className="space-y-6 pt-2">
        <legend className="eyebrow mb-2">About the project</legend>
        <div>
          <label htmlFor="service" className="block mb-3 text-sm">Project type</label>
          <select
            id="service"
            name="service"
            value={data.service}
            onChange={(e) => update("service", e.target.value)}
            className="w-full bg-transparent border-0 border-b border-[--color-ink]/30 py-3 text-lg focus:border-[--color-ink] focus:outline-none transition-colors"
            required
          >
            <option value="">Choose one…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.pluralName}</option>
            ))}
            <option value="other">Something else</option>
          </select>
        </div>

        <RadioGroup
          name="ownership"
          label="The property"
          value={data.ownership}
          onChange={(v) => update("ownership", v)}
          options={[
            { value: "own", label: "We own it" },
            { value: "buying", label: "We&rsquo;re buying it" },
            { value: "renting", label: "Other arrangement" },
          ]}
        />

        <RadioGroup
          name="status"
          label="Conservation or listed status"
          value={data.status}
          onChange={(v) => update("status", v)}
          options={[
            { value: "neither", label: "Neither" },
            { value: "conservation", label: "Conservation area" },
            { value: "listed", label: "Listed" },
            { value: "unknown", label: "Not sure" },
          ]}
        />

        <RadioGroup
          name="planning"
          label="Planning permission"
          value={data.planning}
          onChange={(v) => update("planning", v)}
          options={[
            { value: "granted", label: "Already granted" },
            { value: "submitted", label: "Submitted" },
            { value: "not-yet", label: "Not yet" },
            { value: "not-needed", label: "Not needed" },
            { value: "unknown", label: "Not sure" },
          ]}
        />

        <RadioGroup
          name="budget"
          label="Rough budget"
          value={data.budget}
          onChange={(v) => update("budget", v)}
          options={[
            { value: "u50", label: "Under £50k" },
            { value: "50-100", label: "£50k – £100k" },
            { value: "100-250", label: "£100k – £250k" },
            { value: "250-500", label: "£250k – £500k" },
            { value: "500+", label: "£500k +" },
            { value: "unsure", label: "Not sure yet" },
          ]}
        />

        <RadioGroup
          name="timeframe"
          label="When you&rsquo;d like to start"
          value={data.timeframe}
          onChange={(v) => update("timeframe", v)}
          options={[
            { value: "3m", label: "Within 3 months" },
            { value: "3-6", label: "3 – 6 months" },
            { value: "6-12", label: "6 – 12 months" },
            { value: "explore", label: "Exploring" },
          ]}
        />
      </fieldset>

      {/* Message */}
      <fieldset className="pt-2">
        <legend className="eyebrow mb-2">A note from you</legend>
        <label htmlFor="message" className="block mb-3 text-sm">A few words about your project, the house, or what&rsquo;s prompted the enquiry</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full bg-transparent border-0 border-b border-[--color-ink]/30 py-3 text-lg focus:border-[--color-ink] focus:outline-none transition-colors resize-none"
        />
      </fieldset>

      {status === "error" && (
        <div role="alert" className="border-l-2 border-[--color-tango] bg-[--color-paper] px-5 py-4 text-sm text-[--color-ink-soft]">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-3 bg-[--color-ink] text-[--color-stone] px-8 py-4 hover:bg-[--color-petrol] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300 tracking-wide"
      >
        <span>{status === "submitting" ? "Sending…" : "Send enquiry"}</span>
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  required,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block mb-3 text-sm">
        {label}
        {required && " *"}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-0 border-b border-[--color-ink]/30 py-3 text-lg focus:border-[--color-ink] focus:outline-none transition-colors"
      />
    </div>
  );
}

function RadioGroup({
  name,
  label,
  value,
  onChange,
  options,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <p className="block mb-4 text-sm" dangerouslySetInnerHTML={{ __html: label }} />
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o.value} className="group cursor-pointer">
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="peer sr-only"
            />
            <span className="inline-block border border-[--color-ink]/25 px-4 py-2 text-sm tracking-wide hover:border-[--color-ink] peer-checked:bg-[--color-ink] peer-checked:text-[--color-stone] peer-checked:border-[--color-ink] transition-colors duration-200">
              <span dangerouslySetInnerHTML={{ __html: o.label }} />
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
