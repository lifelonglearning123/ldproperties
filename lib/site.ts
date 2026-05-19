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

  // Coordinates from the Google Maps embed for 15 Peverel Road, Cambridge CB5 8RN.
  geo: {
    latitude: "52.20998",
    longitude: "0.16322",
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
    placeId: "", // TODO: paste Google Place ID once GBP listing is live
    cid: "", // TODO: paste GBP CID once GBP listing is live
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.8384327522067!2d0.16322172686040903!3d52.20998352198164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8706b020a0647%3A0x7e8c7f8adcf93bbb!2sPeverel%20Rd%2C%20Cambridge%20CB5%208RN!5e0!3m2!1sen!2suk!4v1779227473173!5m2!1sen!2suk",
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
