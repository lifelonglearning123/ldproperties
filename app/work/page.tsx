import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { ProjectCard } from "@/components/ProjectCard";
import { Schema, breadcrumbSchema } from "@/components/Schema";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our work — Cambridge extensions, kitchens, bathrooms and garden rooms",
  description:
    "A selection of recent LD Properties projects across Cambridge — extensions, kitchens, bathrooms and garden rooms in Newnham, Trumpington, Histon, Great Shelford and more.",
  alternates: { canonical: `${site.url}/work` },
};

export default function WorkPage() {
  return (
    <>
      <Schema
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Work", url: `${site.url}/work` },
        ])}
      />
      <section>
        <Container width="full" className="pt-10 md:pt-16 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <Eyebrow>Selected work</Eyebrow>
              <h1 className="mt-6">Projects across Cambridge.</h1>
              <p className="mt-8 text-lg md:text-xl text-[--color-ink-soft] max-w-2xl leading-relaxed">
                A selection of recent projects — extensions, kitchens, bathrooms and garden rooms — across Cambridge and the surrounding villages. Each one designed and built by the same team.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="sand">
        <Container width="full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} priority={i < 3} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
