import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { Schema, breadcrumbSchema, serviceSchema, faqSchema } from "@/components/Schema";
import { serviceBySlug, services } from "@/lib/services";
import { areaBySlug, areas } from "@/lib/areas";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { notFound } from "next/navigation";

export function ServiceAreaPage({ service: serviceSlug, area: areaSlug }: { service: string; area: string }) {
  const service = serviceBySlug(serviceSlug);
  const area = areaBySlug(areaSlug);
  if (!service || !area) notFound();

  const projectsHere = projects.filter((p) => p.service === serviceSlug && p.area === areaSlug);
  const allInArea = projects.filter((p) => p.area === areaSlug);
  const sampleProjects = projectsHere.length ? projectsHere : allInArea.slice(0, 2);

  const url = `${site.url}/${serviceSlug}/${areaSlug}`;
  const otherServices = services.filter((s) => s.slug !== serviceSlug);
  const nearbyAreas = areas.filter((a) => a.slug !== areaSlug).slice(0, 5);

  const title = `${service.pluralName} in ${area.name}`;
  const intro = `${service.intro.replace("across Cambridge", `in ${area.name}`)}`;

  // Local FAQ — service FAQ rewritten with area name
  const localFaq = service.faq.map((f) => ({
    q: f.q.replace("Cambridge", area.name).replace("a typical", `a ${area.name}`),
    a: f.a.replace(/Cambridge(?! Conservation)/g, area.name),
  }));

  return (
    <>
      <Schema
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: service.pluralName, url: `${site.url}/${serviceSlug}` },
            { name: area.name, url },
          ]),
          serviceSchema({
            name: title,
            description: intro,
            url,
            area: `${area.name}, Cambridge`,
          }),
          faqSchema(localFaq),
        ]}
      />

      {/* HERO */}
      <section>
        <Container width="full" className="pt-10 md:pt-16 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Eyebrow>{area.postcode} · {area.name} · Cambridge</Eyebrow>
              <h1 className="mt-6">
                {title}
              </h1>
              <p className="mt-8 text-lg md:text-xl text-[--color-ink-soft] max-w-xl leading-relaxed">
                {intro}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">Start a project</Button>
                <Button href={`/${service.slug}`} variant="ghost">All {service.pluralName.toLowerCase()}</Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-[--color-sand]">
                <Image
                  src={service.cover}
                  alt={`${service.pluralName} in ${area.name}, Cambridge`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="eyebrow mt-4">{area.name} · {area.postcode}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* LOCAL CONTEXT */}
      <Section tone="sand">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>{area.name}</Eyebrow>
              <h2 className="mt-5">
                Working in <span className="display-italic">{area.name}.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-lg text-[--color-ink-soft] leading-relaxed">
              <p>{area.intro}</p>
              <p>{area.notes}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SCOPE */}
      <Section tone="stone">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-5">
                {service.pluralName} we <span className="display-italic">build in {area.name}.</span>
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

      {/* SAMPLE PROJECTS */}
      {sampleProjects.length > 0 && (
        <Section tone="paper">
          <Container width="full">
            <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
              <div>
                <Eyebrow>Recent work {projectsHere.length ? `in ${area.name}` : "nearby"}</Eyebrow>
                <h2 className="mt-5 max-w-2xl">
                  {projectsHere.length
                    ? <>Projects we&apos;ve finished <span className="display-italic">in {area.name}.</span></>
                    : <>Projects from <span className="display-italic">nearby villages.</span></>}
                </h2>
              </div>
              <Button href="/work" variant="link">All projects</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
              {sampleProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* OTHER SERVICES IN THIS AREA */}
      <Section tone="stone">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-7">
              <Eyebrow>Also in {area.name}</Eyebrow>
              <h2 className="mt-5">
                Other things we do <span className="display-italic">in {area.name}.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/${area.slug}`}
                className="group bg-[--color-paper] hover:bg-[--color-sand]/70 transition-colors duration-500 p-8 md:p-10"
              >
                <h3 className="font-display text-2xl tracking-tight">{s.pluralName} in {area.name}</h3>
                <p className="mt-4 text-[--color-ink-soft] leading-relaxed text-sm">{s.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide">
                  Explore <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="sand">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Common questions</Eyebrow>
              <h2 className="mt-5">
                About {service.pluralName.toLowerCase()} <span className="display-italic">in {area.name}.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <dl className="space-y-8">
                {localFaq.map((item) => (
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

      {/* NEARBY AREAS */}
      <Section tone="paper">
        <Container width="full">
          <Eyebrow>Nearby villages</Eyebrow>
          <h2 className="mt-5 mb-10">
            {service.pluralName} in <span className="display-italic">other villages.</span>
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-2">
            {nearbyAreas.map((a) => (
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

      {/* CTA */}
      <Section tone="ink">
        <Container width="default" className="text-center">
          <Eyebrow className="!text-[--color-stone]/60">Start a project</Eyebrow>
          <h2 className="mt-6 text-[--color-stone]">
            Tell us about your <span className="display-italic">{area.name} home.</span>
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

export function generateServiceAreaMetadata(serviceSlug: string, areaSlug: string) {
  const service = serviceBySlug(serviceSlug);
  const area = areaBySlug(areaSlug);
  if (!service || !area) return {};
  const title = `${service.pluralName} in ${area.name}, Cambridge`;
  return {
    title,
    description: `${service.pluralName} designed and built in ${area.name}, Cambridge. ${service.summary}`,
    alternates: { canonical: `${site.url}/${serviceSlug}/${areaSlug}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description: service.intro,
      images: [service.cover],
    },
  };
}

export function generateServiceAreaParams() {
  return areas.map((a) => ({ area: a.slug }));
}
