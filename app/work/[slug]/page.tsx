import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { ProjectCard } from "@/components/ProjectCard";
import { Schema, breadcrumbSchema } from "@/components/Schema";
import { projectBySlug, projects } from "@/lib/projects";
import { serviceBySlug } from "@/lib/services";
import { areaBySlug } from "@/lib/areas";
import { site } from "@/lib/site";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  const area = areaBySlug(project.area);
  return {
    title: `${project.title} — ${area?.name ?? ""}, ${project.year}`,
    description: project.summary,
    alternates: { canonical: `${site.url}/work/${slug}` },
    openGraph: {
      title: `${project.title} | ${site.name}`,
      description: project.summary,
      images: [project.cover],
    },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const service = serviceBySlug(project.service);
  const area = areaBySlug(project.area);
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Schema
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Work", url: `${site.url}/work` },
            { name: project.title, url: `${site.url}/work/${slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: project.title,
            description: project.summary,
            image: project.cover,
            author: { "@id": `${site.url}#organization` },
            publisher: { "@id": `${site.url}#organization` },
            datePublished: `${project.year}-01-01`,
            mainEntityOfPage: `${site.url}/work/${slug}`,
          },
        ]}
      />

      {/* HERO */}
      <section>
        <Container width="full" className="pt-10 md:pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-8">
              <Eyebrow>
                {area?.name ?? project.area} · {project.year} · {service?.pluralName}
              </Eyebrow>
              <h1 className="mt-6">{project.title}</h1>
            </div>
            <div className="lg:col-span-4 flex items-end">
              <p className="text-lg text-[--color-ink-soft] leading-relaxed">
                {project.summary}
              </p>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden bg-[--color-sand]">
            <Image
              src={project.cover}
              alt={project.coverAlt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      {/* META */}
      <Section tone="stone" className="!py-16">
        <Container width="full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-y border-[--color-ink]/15 py-10">
            <div>
              <p className="eyebrow">Location</p>
              <p className="mt-2 font-display text-xl">{area?.name ?? project.area}</p>
            </div>
            <div>
              <p className="eyebrow">Year</p>
              <p className="mt-2 font-display text-xl">{project.year}</p>
            </div>
            <div>
              <p className="eyebrow">Size</p>
              <p className="mt-2 font-display text-xl">{project.size}</p>
            </div>
            <div>
              <p className="eyebrow">Duration</p>
              <p className="mt-2 font-display text-xl">{project.duration}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* NARRATIVE */}
      <Section tone="stone">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>The project</Eyebrow>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-lg leading-relaxed text-[--color-ink-soft]">
              {project.description.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SCOPE + MATERIALS */}
      <Section tone="sand">
        <Container width="full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <Eyebrow>Scope of works</Eyebrow>
              <ul className="mt-8 space-y-4 text-lg">
                {project.scope.map((s) => (
                  <li key={s} className="pb-4 border-b border-[--color-ink]/10">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>Materials</Eyebrow>
              <ul className="mt-8 space-y-4 text-lg">
                {project.materials.map((m) => (
                  <li key={m} className="pb-4 border-b border-[--color-ink]/10">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* GALLERY */}
      {project.images.length > 0 && (
        <Section tone="stone">
          <Container width="full">
            <Eyebrow>Details</Eyebrow>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {project.images.map((img, i) => (
                <figure key={i}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[--color-sand]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="eyebrow mt-3">{img.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* RELATED */}
      <Section tone="paper">
        <Container width="full">
          <Eyebrow>More work</Eyebrow>
          <h2 className="mt-5 mb-12">
            Other projects <span className="display-italic">in Cambridge.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container width="default" className="text-center">
          <Eyebrow className="!text-[--color-stone]/60">Start a project</Eyebrow>
          <h2 className="mt-6 text-[--color-stone]">
            Like this work? <span className="display-italic">Tell us about yours.</span>
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
