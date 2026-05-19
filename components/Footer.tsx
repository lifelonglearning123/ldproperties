import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-[--color-petrol] text-[--color-stone]">
      <Container width="full" className="py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-4">
            <p className="font-display text-5xl md:text-6xl tracking-[-0.02em] leading-none">
              LD
            </p>
            <p className="mt-3 text-[0.65rem] tracking-[0.28em] uppercase opacity-80">
              Properties <span className="opacity-50">·</span> Cambridge
            </p>
            <p className="mt-6 text-sm text-[--color-stone]/80 max-w-xs leading-relaxed">
              Considered design and build for Cambridge homes. Extensions, kitchens, bathrooms and garden rooms.
            </p>
            <p className="mt-8 text-xs tracking-[0.2em] uppercase text-[--color-stone]/60">
              Cambridge · {new Date().getFullYear()}
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.2em] uppercase text-[--color-stone]/60 mb-5">Services</p>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="link-underline pb-0.5">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.2em] uppercase text-[--color-stone]/60 mb-5">Areas</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {areas.slice(0, 10).map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="link-underline pb-0.5">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.2em] uppercase text-[--color-stone]/60 mb-5">Studio</p>
            <address className="not-italic text-sm leading-relaxed space-y-1">
              <p>{site.nap.streetAddress}</p>
              <p>{site.nap.addressLocality}</p>
              <p>{site.nap.postalCode}</p>
              <p className="mt-3">
                <a href={`tel:${site.nap.telephone}`} className="link-underline pb-0.5">
                  {site.nap.telephoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.nap.email}`} className="link-underline pb-0.5">
                  {site.nap.email}
                </a>
              </p>
            </address>
            <div className="mt-6 flex gap-4 text-xs tracking-[0.2em] uppercase text-[--color-stone]/80">
              {site.social.instagram && (
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="link-underline pb-0.5">
                  Instagram
                </a>
              )}
              {site.social.linkedin && (
                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline pb-0.5">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-8 border-t border-[--color-stone]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs tracking-wider text-[--color-stone]/60">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="link-underline pb-0.5">Privacy</Link>
            <Link href="/terms" className="link-underline pb-0.5">Terms</Link>
            <Link href="/sitemap.xml" className="link-underline pb-0.5">Sitemap</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
