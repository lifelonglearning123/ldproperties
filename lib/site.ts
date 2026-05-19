/**
 * Single source of truth for site-wide constants used in metadata, schema, footer, contact.
 * Update placeholders before launch — every TODO here is a launch blocker.
 */

export const site = {
  name: "LD Properties",
  legalName: "LD Property Investment UK Ltd",
  tagline: "Considered design and build for Cambridge homes.",
  description:
    "LD Properties is a Cambridge design-and-build studio. We design and build extensions, kitchens, bathrooms and garden rooms across Cambridge and the surrounding villages — one team, from first sketch to final handover.",

  // Domain — confirmed: ldproperties.uk
  url: "https://ldproperties.uk",

  // NAP — these values appear in footer, contact, and schema. Must match Google Business Profile exactly.
  nap: {
    streetAddress: "15 Peverel Road",
    addressLocality: "Cambridge",
    postalCode: "CB5 8RN",
    addressCountry: "GB",
    addressRegion: "Cambridgeshire",
    telephone: "+44 1223 000000", // TODO: confirm phone
    telephoneDisplay: "01223 000 000", // TODO: confirm phone (display format)
    email: "studio@ldproperties.uk", // TODO: confirm email
  },

  // Coordinates approximated from CB5 8RN — verify against Google Business Profile before launch.
  geo: {
    latitude: "52.1923",
    longitude: "0.1466",
  },

  // Hours
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:30" },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],
  hoursDisplay: [
    { label: "Monday – Friday", value: "8.00 – 17.30" },
    { label: "Saturday", value: "9.00 – 13.00" },
    { label: "Sunday", value: "By appointment" },
  ],

  // Social — populate before launch
  social: {
    instagram: "https://www.instagram.com/ldproperties", // TODO
    linkedin: "https://www.linkedin.com/company/ld-properties", // TODO
    houzz: "", // optional
  },

  // GHL — review widget ID from the embed code (the trailing segment of the iframe src)
  ghl: {
    reviewWidgetId: "dh5pTbcNQ6yyHq5xwGiF",
    reviewWidgetHost: "https://reputationhub.site", // white-label rebrand of widgets.leadconnectorhq.com
    enquiryFormEmbedUrl: "", // TODO: paste GHL form embed URL if using iframe instead of API
  },

  // Google Business Profile
  gbp: {
    placeId: "", // TODO: paste Google Place ID
    cid: "", // TODO: paste GBP CID
    mapsUrl: "", // TODO: paste short Google Maps URL
  },

  // Accreditations — surface in trust bar
  trust: [
    { label: "Federation of Master Builders", short: "FMB" },
    { label: "TrustMark Government Endorsed", short: "TrustMark" },
    { label: "Public Liability £5m", short: "Insured £5m" },
    { label: "Cambridge Conservation Area experience", short: "Conservation areas" },
  ],
} as const;

export const SITE_NAME = site.name;
export const SITE_URL = site.url;
