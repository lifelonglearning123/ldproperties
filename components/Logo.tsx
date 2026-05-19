import Link from "next/link";
import Image from "next/image";

type Variant = "default" | "stacked" | "small";

const LOGO_SRC = "/brand/ld-logo.png";
const LOGO_W = 2816;
const LOGO_H = 1536;

export function Logo({ variant = "default", tone = "ink" }: { variant?: Variant; tone?: "ink" | "stone" }) {
  const color = tone === "stone" ? "text-[--color-stone]" : "text-[--color-ink]";

  // Small inline variant — used in dense rows where the full lockup would be too tall.
  // Keep as CSS-rendered text so it scales cleanly on a single line.
  if (variant === "small") {
    return (
      <Link href="/" className={`${color} font-display tracking-[0.18em] inline-flex items-baseline gap-2`}>
        <span className="text-xl font-medium">LD</span>
        <span className="text-[0.7rem] tracking-[0.28em] uppercase opacity-80 font-sans">Properties</span>
      </Link>
    );
  }

  // Stacked variant — used on social/square crops. Sized larger.
  if (variant === "stacked") {
    return (
      <Link href="/" aria-label="LD Properties — Cambridge — home" className="inline-block">
        <Image
          src={LOGO_SRC}
          alt="LD Properties — Cambridge"
          width={LOGO_W}
          height={LOGO_H}
          priority
          className={`w-auto h-24 md:h-28 ${tone === "stone" ? "invert brightness-200" : ""}`}
        />
      </Link>
    );
  }

  // Default — horizontal lockup, sized by height to fit the header neatly.
  return (
    <Link href="/" aria-label="LD Properties — Cambridge — home" className="inline-block">
      <Image
        src={LOGO_SRC}
        alt="LD Properties — Cambridge"
        width={LOGO_W}
        height={LOGO_H}
        priority
        sizes="(min-width: 768px) 240px, 210px"
        className={`w-auto h-28 md:h-32 ${tone === "stone" ? "invert brightness-200" : ""}`}
      />
    </Link>
  );
}
