import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "link" | "tango";

const variants: Record<Variant, string> = {
  // Default primary — ink on stone, restrained
  primary:
    "inline-flex items-center gap-3 bg-[--color-ink] text-[--color-stone] px-7 py-4 hover:bg-[--color-petrol] transition-colors duration-300 text-sm tracking-wide",
  // Tango — Potton-style high-conversion CTA, used sparingly for brochure/guide/contact
  tango:
    "inline-flex items-center gap-3 bg-[--color-tango] text-white px-7 py-4 hover:bg-[--color-tango-hover] transition-colors duration-300 text-sm tracking-wide font-medium",
  ghost:
    "inline-flex items-center gap-3 border border-[--color-ink]/25 text-[--color-ink] px-7 py-4 hover:border-[--color-ink] hover:bg-[--color-ink] hover:text-[--color-stone] transition-colors duration-300 text-sm tracking-wide",
  link:
    "inline-flex items-center gap-2 text-[--color-ink] text-sm tracking-wide link-underline pb-0.5",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const target = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link href={href} className={`${variants[variant]} ${className}`} {...target}>
      <span>{children}</span>
      <span aria-hidden="true" className="text-base">→</span>
    </Link>
  );
}
