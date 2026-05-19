import type { ReactNode } from "react";

type Tone = "stone" | "sand" | "paper" | "petrol" | "ink";

const tones: Record<Tone, string> = {
  stone: "bg-[--color-stone] text-[--color-ink]",
  sand: "bg-[--color-sand] text-[--color-ink]",
  paper: "bg-[--color-paper] text-[--color-ink]",
  petrol: "bg-[--color-petrol] text-[--color-stone]",
  ink: "bg-[--color-ink] text-[--color-stone]",
};

export function Section({
  children,
  tone = "stone",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${tones[tone]} py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}
