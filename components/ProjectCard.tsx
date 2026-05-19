import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { areaBySlug } from "@/lib/areas";

type Size = "default" | "wide" | "tall";

const aspectClass: Record<Size, string> = {
  default: "aspect-[4/5]",      // grid-friendly portrait
  wide: "aspect-[16/10]",        // homepage hero feature, cinematic
  tall: "aspect-[3/4]",          // slightly wider than default for paired layouts
};

export function ProjectCard({
  project,
  priority = false,
  size = "default",
}: {
  project: Project;
  priority?: boolean;
  size?: Size;
}) {
  const area = areaBySlug(project.area);
  const isWide = size === "wide";
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className={`relative ${aspectClass[size]} overflow-hidden bg-[--color-sand]`}>
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          sizes={
            isWide
              ? "100vw"
              : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          }
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          priority={priority}
        />
      </div>
      <div className={`${isWide ? "mt-6" : "mt-5"} flex items-baseline justify-between gap-4`}>
        <div>
          <p className="eyebrow mb-1.5">
            {area?.name ?? project.area} · {project.year}
          </p>
          <h3
            className={`font-display leading-tight ${
              isWide ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
            }`}
          >
            {project.title}
          </h3>
        </div>
        <span aria-hidden="true" className="font-display italic text-[--color-ink-muted] text-sm">→</span>
      </div>
      <p className={`mt-2 text-[--color-ink-muted] leading-relaxed max-w-md ${isWide ? "text-base" : "text-sm"}`}>
        {project.summary}
      </p>
    </Link>
  );
}
