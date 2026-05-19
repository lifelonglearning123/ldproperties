import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Schema, breadcrumbSchema } from "@/components/Schema";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas we cover — Cambridge and surrounding villages",
  description:
    "LD Properties designs and builds extensions, kitchens, bathrooms and garden rooms across Cambridge and the surrounding villages — Newnham, Trumpington, Grantchester, Coton, Cherry Hinton, Histon, Great Shelford, Madingley, Girton and Comberton.",
  alternates: { canonical: `${site.url}/areas` },
};

export default function AreasPage() {
  return (
    <>
      <Schema
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Areas", url: `${site.url}/areas` },
        ])}
      />
      <section>
        <Container width="full" className="pt-10 md:pt-16 pb-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <Eyebrow>Where we work</Eyebrow>
              <h1 className="mt-6">
                Cambridge and the surrounding villages.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-[--color-ink-soft] max-w-2xl leading-relaxed">
                Most of our work sits within ten miles of central Cambridge — the city itself and the villages that ring it. Each area below has its own page, with local planning context, conservation notes, and recent projects.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="sand">
        <Container width="full">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/areas/${a.slug}`}
                  className="group block bg-[--color-paper] hover:bg-[--color-stone] transition-colors duration-500 p-8 md:p-10 h-full"
                >
                  <p className="eyebrow">{a.postcode}</p>
                  <h2 className="mt-4 font-display text-3xl tracking-tight">{a.name}</h2>
                  <p className="mt-4 text-[--color-ink-soft] leading-relaxed text-sm">
                    {a.intro}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide">
                    Explore <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="stone">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Eyebrow>Or browse by service</Eyebrow>
              <h2 className="mt-5">
                Looking for something specific?
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      className="flex items-baseline justify-between gap-6 py-4 border-b border-[--color-ink]/10 link-underline pb-4"
                    >
                      <span className="font-display text-2xl tracking-tight">{s.pluralName}</span>
                      <span className="text-sm text-[--color-ink-muted]">{s.summary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
