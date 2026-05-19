import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { Schema, breadcrumbSchema, serviceSchema } from "@/components/Schema";
import { areaBySlug, areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { projectsByArea } from "@/lib/projects";
import { site } from "@/lib/site";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = Promise<{ area: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { area: slug } = await params;
  const area = areaBySlug(slug);
  if (!area) return {};
  return {
    title: `Design and build in ${area.name}, Cambridge`,
    description: `LD Properties designs and builds extensions, kitchens, bathrooms and garden rooms in ${area.name}, Cambridge (${area.postcode}). ${area.intro}`,
    alternates: { canonical: `${site.url}/areas/${slug}` },
  };
}

export default async function AreaPage({ params }: { params: Params }) {
  const { area: slug } = await params;
  const area = areaBySlug(slug);
  if (!area) notFound();

  const projects = projectsByArea(slug);
  const url = `${site.url}/areas/${slug}`;

  return (
    <>
      <Schema
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Areas", url: `${site.url}/areas` },
            { name: area.name, url },
          ]),
          serviceSchema({
            name: `Design and build in ${area.name}, Cambridge`,
            description: area.intro,
            url,
            area: `${area.name}, Cambridge`,
          }),
        ]}
      />

      <section>
        <Container width="full" className="pt-10 md:pt-16 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <Eyebrow>{area.postcode} · Cambridge</Eyebrow>
              <h1 className="mt-6">
                Design and build in {area.name}.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-[--color-ink-soft] max-w-2xl leading-relaxed">
                {area.intro}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="sand">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Local context</Eyebrow>
              <h2 className="mt-5">
                Working in <span className="display-italic">{area.name}.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 text-lg text-[--color-ink-soft] leading-relaxed">
              <p>{area.notes}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services in this area */}
      <Section tone="stone">
        <Container width="full">
          <div className="mb-12">
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-5">
              What we do <span className="display-italic">in {area.name}.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/${area.slug}`}
                className="group block bg-[--color-paper] hover:bg-[--color-sand]/70 transition-colors duration-500 p-8 md:p-10"
              >
                <h3 className="font-display text-2xl tracking-tight">{s.pluralName}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[--color-ink-soft]">
                  {s.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide">
                  {s.pluralName} in {area.name} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Projects in this area */}
      {projects.length > 0 && (
        <Section tone="paper">
          <Container width="full">
            <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
              <div>
                <Eyebrow>Recent work</Eyebrow>
                <h2 className="mt-5">
                  Projects we&apos;ve finished <span className="display-italic">in {area.name}.</span>
                </h2>
              </div>
              <Button href="/work" variant="link">All projects</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section tone="ink">
        <Container width="default" className="text-center">
          <Eyebrow className="!text-[--color-stone]/60">Start a project</Eyebrow>
          <h2 className="mt-6 text-[--color-stone]">
            Thinking about a project in <span className="display-italic">{area.name}?</span>
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
