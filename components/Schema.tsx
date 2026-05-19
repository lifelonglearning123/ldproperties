import { site } from "@/lib/site";

type SchemaProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function Schema({ data }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Reusable LocalBusiness JSON-LD — used on every page
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${site.url}#organization`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.nap.telephone,
    email: site.nap.email,
    image: `${site.url}/og.jpg`,
    logo: `${site.url}/logo.png`,
    priceRange: "£££",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.nap.streetAddress,
      addressLocality: site.nap.addressLocality,
      postalCode: site.nap.postalCode,
      addressRegion: site.nap.addressRegion,
      addressCountry: site.nap.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      { "@type": "City", name: "Cambridge" },
      { "@type": "AdministrativeArea", name: "Cambridgeshire" },
    ],
    sameAs: [site.social.instagram, site.social.linkedin].filter(Boolean),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  area?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": `${site.url}#organization` },
    areaServed: opts.area
      ? { "@type": "Place", name: opts.area }
      : { "@type": "City", name: "Cambridge" },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
