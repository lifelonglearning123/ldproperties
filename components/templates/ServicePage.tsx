import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { Schema, breadcrumbSchema, serviceSchema, faqSchema } from "@/components/Schema";
import { serviceBySlug, services } from "@/lib/services";
import { projectsByService } from "@/lib/projects";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";
import { notFound } from "next/navigation";

export function ServicePage({ slug }: { slug: string }) {
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const projects = projectsByService(slug as "extensions" | "kitchens" | "bathrooms" | "garden-rooms");
  const relatedServices = services.filter((s) => s.slug !== slug);
  const url = `${site.url}/${slug}`;

  return (
    <>
      <Schema
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: service.pluralName, url },
          ]),
          serviceSchema({
            name: `${service.pluralName} in Cambridge`,
            description: service.intro,
            url,
          }),
          faqSchema(service.faq),
        ]}
      />

      {/* HERO */}
      <section>
        <Container width="full" className="pt-10 md:pt-16 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Service · Cambridge &amp; surrounding villages</Eyebrow>
              <h1 className="mt-6">
                {service.pluralName} in Cambridge
              </h1>
              <p className="mt-8 text-lg md:text-xl text-[--color-ink-soft] max-w-xl leading-relaxed">
                {service.intro}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">Start a project</Button>
                <Button href="/work" variant="ghost">View our work</Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-[--color-sand]">
                <Image
                  src={service.cover}
                  alt={service.coverAlt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE DO */}
      <Section tone="sand">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-5">
                The {service.pluralName.toLowerCase()} <span className="display-italic">we build.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="space-y-5 text-lg">
                {service.scope.map((item) => (
                  <li key={item} className="flex gap-5 pb-5 border-b border-[--color-ink]/10 last:border-0">
                    <span className="font-display italic text-[--color-ink-muted] text-base mt-1">—</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* PROCESS */}
      <Section tone="stone">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-5">
              <Eyebrow>Process</Eyebrow>
              <h2 className="mt-5">
                How a {service.name.toLowerCase()} <span className="display-italic">comes together.</span>
              </h2>
            </div>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <li key={step.title} className="border-t border-[--color-ink]/15 pt-6">
                <p className="eyebrow">0{i + 1}</p>
                <h3 className="mt-5 font-display text-2xl tracking-tight">{step.title}</h3>
                <p className="mt-3 text-[--color-ink-soft] leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* MATERIALS */}
      <Section tone="petrol">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow className="!text-[--color-stone]/60">Materials</Eyebrow>
              <h2 className="mt-5 text-[--color-stone]">
                What we <span className="display-italic">build with.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="space-y-4 text-lg text-[--color-stone]/90">
                {service.materials.map((m) => (
                  <li key={m} className="pb-4 border-b border-[--color-stone]/15">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* PROJECTS */}
      {projects.length > 0 && (
        <Section tone="stone">
          <Container width="full">
            <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
              <div>
                <Eyebrow>Recent {service.pluralName.toLowerCase()}</Eyebrow>
                <h2 className="mt-5">
                  Projects we&apos;ve <span className="display-italic">finished.</span>
                </h2>
              </div>
              <Button href="/work" variant="link">View all work</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* AREAS */}
      <Section tone="paper">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10">
            <div className="lg:col-span-7">
              <Eyebrow>Areas we cover</Eyebrow>
              <h2 className="mt-5">
                {service.pluralName} <span className="display-italic">across Cambridge.</span>
              </h2>
              <p className="mt-6 text-lg text-[--color-ink-soft] leading-relaxed max-w-2xl">
                Click through for {service.pluralName.toLowerCase()} in a specific area — with local planning notes, conservation context, and recent work in that village.
              </p>
            </div>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-2">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/${service.slug}/${a.slug}`}
                  className="block py-3 border-b border-[--color-ink]/10 link-underline pb-3"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="stone">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Common questions</Eyebrow>
              <h2 className="mt-5">
                About {service.pluralName.toLowerCase()} <span className="display-italic">in Cambridge.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <dl className="space-y-8">
                {service.faq.map((item) => (
                  <div key={item.q} className="pb-8 border-b border-[--color-ink]/10 last:border-0">
                    <dt className="font-display text-xl md:text-2xl tracking-tight">{item.q}</dt>
                    <dd className="mt-4 text-[--color-ink-soft] leading-relaxed text-lg">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* RELATED SERVICES */}
      <Section tone="sand">
        <Container width="full">
          <Eyebrow>Related</Eyebrow>
          <h2 className="mt-5 mb-12">Other things we do.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group bg-[--color-paper] hover:bg-[--color-stone] transition-colors duration-500 p-8 md:p-10"
              >
                <h3 className="font-display text-2xl tracking-tight">{s.pluralName}</h3>
                <p className="mt-4 text-[--color-ink-soft] leading-relaxed text-sm">{s.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide">
                  Explore <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="ink">
        <Container width="default" className="text-center">
          <Eyebrow className="!text-[--color-stone]/60">Start a project</Eyebrow>
          <h2 className="mt-6 text-[--color-stone]">
            Talk to us about your <span className="display-italic">{service.name.toLowerCase()}.</span>
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

export function generateServiceMetadata(slug: string) {
  const service = serviceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.pluralName} in Cambridge`,
    description: service.intro,
    alternates: { canonical: `${site.url}/${slug}` },
    openGraph: {
      title: `${service.pluralName} in Cambridge | ${site.name}`,
      description: service.intro,
      images: [service.cover],
    },
  };
}
