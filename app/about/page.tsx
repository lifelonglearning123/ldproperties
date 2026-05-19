import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Schema, breadcrumbSchema } from "@/components/Schema";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LD Properties — Cambridge design and build studio",
  description:
    "LD Properties is a design-and-build studio in Cambridge. We design and build extensions, kitchens, bathrooms and garden rooms — one team, from sketch to handover.",
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Schema
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "About", url: `${site.url}/about` },
        ])}
      />

      <section>
        {/* Full-bleed hero image */}
        <div className="relative w-full h-[60vh] min-h-[420px] max-h-[700px] bg-[--color-sand] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=85&auto=format&fit=crop"
            alt="A Cambridge extension by LD Properties"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <Container width="full" className="pt-14 md:pt-20 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Eyebrow>About</Eyebrow>
              <h1 className="mt-6">
                A design-and-build studio for Cambridge homes.
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg md:text-xl text-[--color-ink-soft] leading-relaxed">
                LD Properties is a small Cambridge studio, named for the initials of its founder. We draw, plan, and build extensions, kitchens, bathrooms and garden rooms — one team, one project manager, from <em className="display-signature">first sketch to final handover.</em>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="sand">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-5">
                One team, <span className="display-italic">from sketch to handover.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-lg text-[--color-ink-soft] leading-relaxed">
              <p>
                LD Properties designs and builds extensions, kitchens, bathrooms and garden rooms for Cambridge homes. We work across the city and the surrounding villages — Newnham, Trumpington, Grantchester, Coton, Cherry Hinton, Histon, Great Shelford, Madingley, Girton and Comberton.
              </p>
              <p>
                Most of our work is design-and-build under one roof. We draw the project, get the permissions, and run the site with one project manager from start to finish. No subcontracted chaos, no handover gaps, no surprises on cost.
              </p>
              <p>
                We work on listed buildings and in conservation areas often. We work with directly employed trades, two Cambridge joinery workshops we've used for years, and a short list of architects when a project warrants it.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="stone">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>What we believe</Eyebrow>
              <h2 className="mt-5">
                Considered, <span className="display-italic">not maximal.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="space-y-10">
                {[
                  {
                    t: "One team from sketch to handover",
                    b: "Design, planning, and build under one roof. One project manager, one phone number. The person who priced the job is on site at handover.",
                  },
                  {
                    t: "Specific over generic",
                    b: "Every project is drawn around the house it's in. London stock brick or Cambridge gault, Crittall or Velfac, polished concrete or engineered oak — chosen for the house, not the showroom.",
                  },
                  {
                    t: "Honest about cost",
                    b: "We quote against drawings, not feelings. If a brief and a budget don't match, we say so before we start — not halfway through.",
                  },
                  {
                    t: "Built to last",
                    b: "Lime where lime should be. Insulation that meets Part L without compromise. Joinery that opens twenty years from now the way it does today.",
                  },
                ].map((v, i) => (
                  <li key={v.t} className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 pb-10 border-b border-[--color-ink]/10 last:border-0 last:pb-0">
                    <span className="font-display italic text-2xl text-[--color-ink-muted]">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-2xl tracking-tight">{v.t}</h3>
                      <p className="mt-3 text-[--color-ink-soft] leading-relaxed">{v.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container width="default" className="text-center">
          <Eyebrow className="!text-[--color-stone]/60">Start a project</Eyebrow>
          <h2 className="mt-6 text-[--color-stone]">
            Let&apos;s talk about <span className="display-italic">your Cambridge home.</span>
          </h2>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[--color-stone] text-[--color-ink] px-8 py-4 hover:bg-[--color-gold] hover:text-[--color-stone] transition-colors duration-300 tracking-wide"
            >
              <span>Enquire</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
