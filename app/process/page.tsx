import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Schema, breadcrumbSchema } from "@/components/Schema";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process — How LD Properties works, sketch to handover",
  description:
    "From first sketch to final handover: how LD Properties designs, plans, builds and finishes extensions, kitchens, bathrooms and garden rooms across Cambridge.",
  alternates: { canonical: `${site.url}/process` },
};

const steps = [
  {
    n: "01",
    t: "First conversation",
    body: "A 30-minute call or a coffee at the studio. We listen to the brief — what's working, what isn't, what you're hoping the house will do for you. Free, no commitment.",
    duration: "30 minutes",
  },
  {
    n: "02",
    t: "Site visit and measured survey",
    body: "We measure the house, photograph the spaces, check levels, drainage, structural conditions, and listed or conservation status. We come back with first sketches and an honest cost range.",
    duration: "1–2 weeks",
  },
  {
    n: "03",
    t: "Design and specification",
    body: "Drawings, elevations, a sample board of materials, and a written specification of works. We agree the brief in detail before any commitment to build.",
    duration: "3–6 weeks",
  },
  {
    n: "04",
    t: "Planning and consents",
    body: "Planning portal submission, conservation area consent, listed building consent, pre-application enquiries — we handle the paperwork. Most planning decisions take 8 weeks.",
    duration: "8–12 weeks",
  },
  {
    n: "05",
    t: "Tender and contract",
    body: "Detailed pricing against the agreed drawings and specification. A fixed-price JCT contract, a clear programme, and a payment schedule tied to milestones.",
    duration: "2–3 weeks",
  },
  {
    n: "06",
    t: "Build",
    body: "One project manager, our directly employed trades, our joinery workshops, and a clean site each evening. Weekly updates, dust-sheeted access, and a tidy handover at the end of each phase.",
    duration: "6–16 weeks",
  },
  {
    n: "07",
    t: "Snagging and handover",
    body: "A walk-around, a snagging list, and a deadline to clear it. Building control sign-off, gas and electrical certification, a folder of operating manuals.",
    duration: "1–2 weeks",
  },
  {
    n: "08",
    t: "Aftercare",
    body: "A year of aftercare covering settlement cracks, sticking doors, anything that needs adjustment. After that, we're still on the end of the phone.",
    duration: "12 months",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Schema
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Process", url: `${site.url}/process` },
        ])}
      />
      <section>
        <Container width="full" className="pt-10 md:pt-16 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <Eyebrow>Process</Eyebrow>
              <h1 className="mt-6">
                Sketch to handover, <span className="display-italic">under one roof.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-[--color-ink-soft] max-w-2xl leading-relaxed">
                LD Properties is a design-and-build studio — drawings, permissions and construction handled by one team. The eight stages below describe a typical project, from first conversation to one-year aftercare.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="sand">
        <Container width="full">
          <ol className="space-y-12 md:space-y-16">
            {steps.map((s) => (
              <li key={s.n} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 pb-12 md:pb-16 border-b border-[--color-ink]/10 last:border-0 last:pb-0">
                <div className="md:col-span-2">
                  <p className="font-display italic text-3xl text-[--color-ink-muted]">{s.n}</p>
                </div>
                <div className="md:col-span-7">
                  <h2 className="font-display text-3xl md:text-4xl tracking-tight">{s.t}</h2>
                  <p className="mt-5 text-lg text-[--color-ink-soft] leading-relaxed max-w-2xl">{s.body}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <p className="eyebrow">Typical duration</p>
                  <p className="mt-2 font-display text-xl">{s.duration}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="ink">
        <Container width="default" className="text-center">
          <Eyebrow className="!text-[--color-stone]/60">Start a project</Eyebrow>
          <h2 className="mt-6 text-[--color-stone]">
            Ready for the <span className="display-italic">first conversation?</span>
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
