"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { services } from "@/lib/services";

const nav = [
  { href: "/work", label: "Work" },
  ...services.map((s) => ({ href: `/${s.slug}`, label: s.navLabel })),
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-500 ${
        scrolled || open ? "bg-[--color-stone]/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[88rem] px-6 md:px-10">
        <div className="flex items-center justify-between py-5 md:py-6">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline pb-0.5 tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center gap-2 bg-[--color-ink] text-[--color-stone] px-5 py-3 hover:bg-[--color-petrol] transition-colors duration-300 tracking-wide"
            >
              Enquire <span aria-hidden="true">→</span>
            </Link>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center gap-2 text-sm tracking-wider uppercase"
          >
            <span className="relative w-6 h-3 inline-block" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 w-6 h-px bg-current transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 w-6 h-px bg-current transition-transform ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[152px] bottom-0 bg-[--color-stone] transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-10 flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-4 font-display text-3xl border-b border-[--color-ink]/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-between bg-[--color-ink] text-[--color-stone] px-6 py-4"
          >
            <span>Enquire</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
