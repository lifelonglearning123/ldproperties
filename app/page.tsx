import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { Schema, breadcrumbSchema, faqSchema } from "@/components/Schema";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${site.name} — Considered design and build for Cambridge homes`,
  description:
    "LD Properties — design-and-build studio in Cambridge. Extensions, kitchens, bathrooms and garden rooms across Cambridge and the surrounding villages. One team, from sketch to handover.",
  alternates: { canonical: site.url },
};

const homeFaq = [
  {
    q: "What does LD Properties do?",
    a: "We design and build extensions, kitchens, bathrooms and garden rooms for Cambridge homes — from the first sketch through planning to the final handover, with one team and one project manager throughout.",
  },
  {
    q: "Where do you work?",
    a: "Cambridge city and the surrounding villages, including Newnham, Trumpington, Grantchester, Coton, Cherry Hinton, Histon, Great Shelford, Madingley, Girton and Comberton.",
  },
  {
    q: "Do you handle planning and listed building consent?",
    a: "Yes — we manage planning permission, conservation area applications, and listed building consent directly. A significant share of our work is in conservation areas and on listed properties.",
  },
];

export default function HomePage() {
  const featured = projects.slice(0, 3);
  return (
    <>
      <Schema
        data={[
          breadcrumbSchema([{ name: "Home", url: site.url }]),
          faqSchema(homeFaq),
        ]}
      />

      {/* HERO — image-led, the centerpiece. Subtle inset framing + ground shadow
          lift it off the page so it feels curated, not banner-stretched. */}
      <section className="relative">
        <div className="px-3 md:px-6 lg:px-8">
          <div
            className="hero-image relative w-full h-[80vh] min-h-[520px] max-h-[880px] bg-[--color-sand] overflow-hidden ring-1 ring-[--color-ink]/5"
            style={{ boxShadow: "0 40px 80px -32px rgb(30 58 76 / 0.35), 0 12px 24px -16px rgb(30 58 76 / 0.18)" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=85&auto=format&fit=crop"
              alt="Rear extension to a Cambridge Victorian semi, Crittall glazing onto a long garden"
              fill
              sizes="100vw"
              className="object-cover hero-image-zoom"
              priority
            />
            {/* Bottom-edge gradient so the caption sits in shadow */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[--color-ink]/60 to-transparent"
            />
            {/* Project caption, lower-left of image */}
            <div className="absolute left-0 right-0 bottom-0">
              <div className="px-6 md:px-10 pb-7 md:pb-9">
                <p className="text-xs tracking-[0.22em] uppercase text-[--color-stone]/90">
                  Newnham <span className="opacity-60">·</span> 2024 <span className="opacity-60">·</span> Crittall steel <span className="opacity-60">·</span> oak threshold
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Heading + intro + CTAs, sit below the image */}
        <Container width="full" className="pt-14 md:pt-20 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Eyebrow>LD Properties · Cambridge · est. 2020</Eyebrow>
              <h1 className="mt-6">
                Considered design and build for Cambridge homes.
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg md:text-xl text-[--color-ink-soft] leading-relaxed">
                Extensions, kitchens, bathrooms and garden rooms — designed and built by one team, from <em className="display-italic">first sketch to final handover</em>. Across Cambridge and the surrounding villages.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/work">View our work</Button>
                <Button href="/contact" variant="ghost">Start a project</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <Section tone="stone">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-5">Four things, done properly.</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-[--color-ink-soft]">
                We&apos;ve narrowed our work to the four projects we know best — and the four that matter most for Cambridge homes. Each one is designed and built by the same team, with one project manager from start to finish.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[--color-sand]">
                  <Image
                    src={s.cover}
                    alt={s.coverAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <p className="eyebrow mt-6">0{i + 1}</p>
                <h3 className="mt-3 font-display text-2xl md:text-3xl tracking-tight">
                  {s.pluralName}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[--color-ink-soft] min-h-[3.2em]">
                  {s.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm tracking-wide link-underline pb-0.5">
                  Explore <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* FEATURED WORK — image-led: one wide hero project + two paired below */}
      <Section tone="sand">
        <Container width="full">
          <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
            <div>
              <Eyebrow>Recent work</Eyebrow>
              <h2 className="mt-5 max-w-2xl">
                Projects from <span className="display-signature">across Cambridge.</span>
              </h2>
            </div>
            <Button href="/work" variant="link">View all projects</Button>
          </div>

          {/* Hero project — wide 16:10 */}
          {featured[0] && (
            <div className="mb-16 md:mb-20">
              <ProjectCard project={featured[0]} size="wide" priority />
            </div>
          )}

          {/* Paired secondary projects */}
          {featured.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {featured.slice(1, 3).map((p) => (
                <ProjectCard key={p.slug} project={p} size="tall" />
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* PROCESS TEASER */}
      <Section tone="stone">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-5">
                One team, from <span className="display-signature">first sketch</span> to final handover.
              </h2>
              <p className="mt-8 text-lg text-[--color-ink-soft] leading-relaxed">
                LD Properties handles the design, the planning, and the build under one roof. No subcontracted chaos, no handover gaps, no surprises on cost. One project manager, one team, one phone number.
              </p>
              <div className="mt-10">
                <Button href="/process" variant="ghost">Our process</Button>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="space-y-8">
                {[
                  { n: "01", t: "Sketch", b: "A measured survey, a first drawing, and an honest conversation about cost." },
                  { n: "02", t: "Planning", b: "Drawings, permissions, conservation and listed building consent." },
                  { n: "03", t: "Build", b: "One project manager, our trades, our workshop, our standard." },
                  { n: "04", t: "Handover", b: "Snagging, finishing, certification, and a year of aftercare." },
                ].map((step) => (
                  <li key={step.n} className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 pb-8 border-b border-[--color-ink]/10 last:border-0 last:pb-0">
                    <span className="font-display italic text-2xl text-[--color-ink-muted]">{step.n}</span>
                    <div>
                      <h3 className="font-display text-2xl tracking-tight">{step.t}</h3>
                      <p className="mt-2 text-[--color-ink-soft] leading-relaxed">{step.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* AREAS */}
      <Section tone="paper">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5">
              <Eyebrow>Where we work</Eyebrow>
              <h2 className="mt-5">
                Cambridge and the <span className="display-italic">surrounding villages.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg text-[--color-ink-soft] leading-relaxed">
                Most of our work is within ten miles of central Cambridge — the city, the colleges, and the villages that ring it. Click through to see projects and notes for each area.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-3 text-base">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link href={`/areas/${a.slug}`} className="link-underline pb-0.5 inline-block py-1.5">
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* TESTIMONIALS */}
      <Section tone="petrol">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <Eyebrow className="!text-[--color-stone]/60">From recent clients</Eyebrow>
              <h2 className="mt-5 text-[--color-stone]">
                The houses are <span className="display-signature" style={{color: 'var(--color-cambridge)'}}>still standing.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg text-[--color-stone]/80 leading-relaxed">
                Most of our work comes from referrals — a neighbour, a friend who saw a finished room, an architect who&apos;s used us before. A few notes from people we&apos;ve built for.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                quote: "They drew it, they built it, and they showed up every day. The result is the calmest room in the house.",
                attrib: "R. & A. — Newnham, 2024",
                project: "Rear extension",
              },
              {
                quote: "The price we agreed in February was the price we paid in October. The kitchen is the room we use most.",
                attrib: "D. & K. — Trumpington, 2024",
                project: "Kitchen refit",
              },
              {
                quote: "We've worked with three builders in this house. This was the only one that didn't end in an argument.",
                attrib: "The H. family — Great Shelford, 2025",
                project: "Principal suite",
              },
            ].map((t, i) => (
              <figure key={i} className="border-t border-[--color-stone]/15 pt-8">
                <blockquote className="font-display italic text-xl md:text-2xl leading-snug text-[--color-stone]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 space-y-1">
                  <p className="text-sm tracking-[0.18em] uppercase text-[--color-stone]/70">{t.attrib}</p>
                  <p className="text-xs tracking-[0.18em] uppercase text-[--color-stone]/50">{t.project}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      {/* GUIDE DOWNLOAD — slow-lead capture */}
      <Section tone="paper">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-[--color-sand]">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop"
                  alt="The Cambridge Extensions Guide — a printed booklet on a workbench"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Eyebrow>A free guide</Eyebrow>
              <h2 className="mt-5">
                The Cambridge <span className="display-signature">Extensions Guide.</span>
              </h2>
              <p className="mt-8 text-lg text-[--color-ink-soft] leading-relaxed">
                A 24-page PDF on planning, costs, conservation areas, materials and what to expect on site — written for Cambridge homeowners thinking about an extension. No email-capture funnels, no upsell.
              </p>
              <ul className="mt-8 space-y-3 text-[--color-ink-soft]">
                <li className="flex gap-3"><span className="text-[--color-ink-muted]">·</span> Typical costs per m² in Cambridge, 2026 prices</li>
                <li className="flex gap-3"><span className="text-[--color-ink-muted]">·</span> Planning, conservation and listed-building basics</li>
                <li className="flex gap-3"><span className="text-[--color-ink-muted]">·</span> Materials that work for Cambridge homes</li>
                <li className="flex gap-3"><span className="text-[--color-ink-muted]">·</span> A realistic week-by-week build programme</li>
              </ul>
              <div className="mt-10">
                <Button href="/contact?guide=extensions" variant="tango">Request the guide</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* REVIEWS WIDGET */}
      <Section tone="stone">
        <Container width="full">
          <div className="text-center mb-12">
            <Eyebrow>Reviews</Eyebrow>
            <h2 className="mt-5">What our clients say.</h2>
          </div>
          {site.ghl.reviewWidgetId ? (
            <div className="reviews-section">
              <Script
                src={`${site.ghl.reviewWidgetHost}/reputation/assets/review-widget.js`}
                strategy="lazyOnload"
              />
              <iframe
                className="lc_reviews_widget w-full"
                src={`${site.ghl.reviewWidgetHost}/reputation/widgets/review_widget/${site.ghl.reviewWidgetId}`}
                frameBorder="0"
                scrolling="no"
                title="Customer reviews of LD Properties"
                style={{ minWidth: "100%", width: "100%" }}
              />
            </div>
          ) : (
            <div className="border-2 border-dashed border-[--color-ink]/20 p-10 md:p-16 text-center bg-[--color-paper]">
              <p className="eyebrow">GHL review widget placeholder</p>
              <p className="mt-4 text-[--color-ink-soft]">
                Paste your GHL widget ID into <code className="font-mono text-sm bg-[--color-sand] px-2 py-1">lib/site.ts</code> to activate the Google review widget here.
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="ink">
        <Container width="default" className="text-center">
          <Eyebrow className="!text-[--color-stone]/60">Start a project</Eyebrow>
          <h2 className="mt-6 text-[--color-stone]">
            Tell us about your <span className="display-italic">Cambridge home.</span>
          </h2>
          <p className="mt-6 text-lg text-[--color-stone]/80 max-w-xl mx-auto leading-relaxed">
            A first conversation is free and unhurried. Sketches, photographs and rough thoughts are welcome — nothing has to be resolved.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[--color-stone] text-[--color-ink] px-8 py-4 hover:bg-[--color-gold] hover:text-[--color-stone] transition-colors duration-300 tracking-wide"
            >
              <span>Enquire</span>
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={`tel:${site.nap.telephone}`}
              className="inline-flex items-center gap-3 border border-[--color-stone]/30 text-[--color-stone] px-8 py-4 hover:border-[--color-stone] transition-colors duration-300 tracking-wide"
            >
              <span>{site.nap.telephoneDisplay}</span>
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
