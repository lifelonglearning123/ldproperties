import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";

export default function NotFound() {
  return (
    <Container width="default" className="py-32 md:py-48 text-center">
      <Eyebrow>404 — not found</Eyebrow>
      <h1 className="mt-6">
        This <span className="display-italic">isn&apos;t a page.</span>
      </h1>
      <p className="mt-8 text-lg text-[--color-ink-soft] max-w-md mx-auto">
        Try the homepage, the work index, or the contact page.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/" className="inline-flex items-center gap-3 bg-[--color-ink] text-[--color-stone] px-8 py-4 hover:bg-[--color-petrol] transition-colors duration-300 tracking-wide">
          <span>Home</span>
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/work" className="inline-flex items-center gap-3 border border-[--color-ink]/20 px-8 py-4 hover:border-[--color-ink] transition-colors duration-300 tracking-wide">
          <span>Our work</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Container>
  );
}
