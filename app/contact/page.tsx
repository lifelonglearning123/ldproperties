import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Schema, breadcrumbSchema } from "@/components/Schema";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact LD Properties — Cambridge design and build studio",
  description:
    "Talk to LD Properties about an extension, kitchen, bathroom or garden room for your Cambridge home. Call, email, or send an enquiry — the first conversation is free.",
  alternates: { canonical: `${site.url}/contact` },
};

type Search = Promise<{ guide?: string }>;

export default async function ContactPage({ searchParams }: { searchParams?: Search }) {
  const sp = (await searchParams) || {};
  // Tag the lead's CRM record with the homepage Extensions Guide source if they came from that CTA
  const source = sp.guide === "extensions" ? "homepage-extensions-guide" : "contact-page";

  return (
    <>
      <Schema
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Contact", url: `${site.url}/contact` },
        ])}
      />
      <section>
        <Container width="full" className="pt-10 md:pt-16 pb-20 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-6">
                Start a conversation.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-[--color-ink-soft] max-w-2xl leading-relaxed">
                Sketches, photographs and rough thoughts are welcome. Nothing has to be resolved — we&apos;ll bring the pencil. The first conversation is free.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="sand">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form column */}
            <div className="lg:col-span-7">
              <Eyebrow>Enquiry</Eyebrow>
              <h2 className="mt-5 mb-10">Send us a note.</h2>
              <EnquiryForm source={source} />
            </div>

            {/* Contact details column */}
            <div className="lg:col-span-5 lg:pl-8 space-y-12">
              <div>
                <Eyebrow>Call</Eyebrow>
                <a
                  href={`tel:${site.nap.telephone}`}
                  className="mt-4 block font-display text-3xl md:text-4xl tracking-tight link-underline pb-1"
                >
                  {site.nap.telephoneDisplay}
                </a>
              </div>

              <div>
                <Eyebrow>Email</Eyebrow>
                <a
                  href={`mailto:${site.nap.email}`}
                  className="mt-4 block font-display text-2xl md:text-3xl tracking-tight link-underline pb-1"
                >
                  {site.nap.email}
                </a>
              </div>

              <div>
                <Eyebrow>Studio</Eyebrow>
                <address className="mt-4 not-italic font-display text-xl leading-relaxed">
                  {site.nap.streetAddress}<br />
                  {site.nap.addressLocality}<br />
                  {site.nap.postalCode}
                </address>
              </div>

              <div>
                <Eyebrow>Hours</Eyebrow>
                <dl className="mt-4 space-y-2">
                  {site.hoursDisplay.map((h) => (
                    <div key={h.label} className="flex justify-between text-base border-b border-[--color-ink]/10 py-2">
                      <dt className="text-[--color-ink-muted]">{h.label}</dt>
                      <dd>{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map */}
      <Section tone="stone" className="!pb-0">
        <Container width="full">
          <Eyebrow>Find us</Eyebrow>
          <h2 className="mt-5 mb-10">In Cambridge.</h2>
        </Container>
        {site.gbp.mapsUrl ? (
          <div className="aspect-[21/9] w-full bg-[--color-sand]">
            <iframe
              src={site.gbp.mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LD Properties studio location"
            />
          </div>
        ) : (
          <div className="aspect-[21/9] w-full bg-[--color-sand] flex items-center justify-center text-center px-6">
            <div>
              <p className="eyebrow">Google Maps embed placeholder</p>
              <p className="mt-3 text-[--color-ink-soft] max-w-md mx-auto text-sm">
                Paste your Google Maps embed URL into <code className="font-mono bg-[--color-stone] px-1.5">lib/site.ts</code> (<code className="font-mono bg-[--color-stone] px-1.5">gbp.mapsUrl</code>) to display the map here.
              </p>
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
