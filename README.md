# LD Properties

Design-and-build studio website for Cambridge.
Next.js 15 (App Router) + React 19 + Tailwind 4. Static-generated for performance and SEO.

## Run

```powershell
npm install
$env:NODE_OPTIONS = "--use-system-ca"   # only if your network intercepts TLS
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the production build
```

## Architecture

```
app/
  layout.tsx                 root layout, fonts, metadata, schema
  page.tsx                   homepage
  globals.css                Tailwind v4 + brand tokens
  not-found.tsx              404
  sitemap.ts                 dynamic sitemap.xml (~64 URLs)
  robots.ts                  robots.txt

  work/                      project index + dynamic case studies
    page.tsx
    [slug]/page.tsx

  extensions/                service hub + service × area pages
    page.tsx
    [area]/page.tsx
  kitchens/                  ditto
    page.tsx
    [area]/page.tsx
  bathrooms/
    page.tsx
    [area]/page.tsx
  garden-rooms/
    page.tsx
    [area]/page.tsx

  areas/                     area index + dynamic area hubs
    page.tsx
    [area]/page.tsx

  process/page.tsx
  about/page.tsx
  contact/page.tsx

components/
  Header.tsx, Footer.tsx, Logo.tsx
  Container.tsx, Section.tsx, Eyebrow.tsx, Button.tsx
  ProjectCard.tsx
  Schema.tsx                 JSON-LD helpers
  templates/
    ServicePage.tsx          shared service-hub template
    ServiceAreaPage.tsx      shared service × area template

lib/
  site.ts                    NAP, hours, GHL IDs, accreditations — single source of truth
  services.ts                4 services (extensions, kitchens, bathrooms, garden-rooms)
  areas.ts                   10 villages (Newnham, Trumpington, …)
  projects.ts                project case studies

BRAND.md                     brand reference (name, palette, type, voice)
```

## Pages generated

| Type | Count | URL pattern |
|---|---|---|
| Homepage | 1 | `/` |
| Service hubs | 4 | `/extensions`, `/kitchens`, `/bathrooms`, `/garden-rooms` |
| Service × area | 40 | `/{service}/{area}` — 4 × 10 |
| Area hubs | 10 | `/areas/{area}` |
| Project case studies | 4+ | `/work/{slug}` |
| Other | 5 | `/work`, `/areas`, `/about`, `/process`, `/contact` |
| **Total** | **~64** | tracked in `sitemap.xml` |

Adding a new village to `lib/areas.ts` adds 5 new pages automatically (4 service × area + 1 area hub).
Adding a new project to `lib/projects.ts` adds 1 case-study page and appears in the relevant service hub and area hub automatically.

## Local SEO foundations (already wired)

- **LocalBusiness schema** (`@type: GeneralContractor`) on every page with NAP, geo, hours, areaServed
- **Service schema** on every service and service × area page
- **FAQPage schema** on homepage + service pages + service × area pages
- **BreadcrumbList schema** on every interior page
- **Article schema** on case studies
- **Canonical URLs** on every page
- **OpenGraph + Twitter cards** on every page
- **Dynamic sitemap.xml** covering all 64 URLs with priority and changefreq
- **robots.txt** allowing all crawlers, pointing to sitemap
- **Internal linking** — every service hub links to its 10 area variants, every area hub links to all 4 services, footer links every service and every area from every page

## Brand tokens

CSS variables in `app/globals.css` (`@theme` block). Tailwind 4 reads them automatically — use as `bg-stone`, `text-ink`, `text-gold`, `bg-petrol`, `bg-tango`, etc.

| Token | Hex | Role |
|---|---|---|
| Stone (ivory) | `#F5F0E8` | Primary background |
| Sand | `#EBE2D2` | Secondary surface |
| Paper | `#FAFAF7` | Floating cards |
| **Ink (Cambridge navy)** | `#1E3A4C` | Primary text, headlines — Cambridge-tinted deep blue |
| Ink Soft | `#34536A` | Body alt |
| Ink Muted | `#7A8895` | Captions, meta |
| Gold | `#B8923D` | Typographic accent — eyebrows, links, signature (deepened, premium) |
| Gold Hover | `#9D7B30` | Hover for gold |
| Gold Soft | `#D6B364` | Lighter tint |
| Cambridge | `#A3C1AD` | Light Cambridge sage — accents on dark sections |
| Cambridge Soft | `#DDE9DE` | Lightest Cambridge tint |
| **Petrol (deep Cambridge blue)** | `#2C4858` | Deep contrast surface — testimonials |
| Tango (burnt orange) | `#C95F1F` | Extensions Guide CTA **only** — never the default |
| Tango Hover | `#A84D14` | Hover for tango |
| Divider | `#DADADA` | Hairlines |

Type: **Fraunces** (display, weight 500) + **Poppins** (body, 300/400/500/600) + **Italianno** (premium signature accents, weight 400), all via `next/font/google`. The palette is rooted in traditional Cambridge Blue and styled image-led — heroes are full-bleed photographs above the headline, not boxed beside it.

See `BRAND.md` for the full brand reference.

---

## LAUNCH CHECKLIST — fill these in before going live

Every TODO is in `lib/site.ts`. Search the codebase for `TODO` to find them all.

### Required (the site cannot launch without these)

- [ ] **Studio address** — `lib/site.ts` → `nap.streetAddress` + `postalCode`
- [ ] **Phone number** — `lib/site.ts` → `nap.telephone` (E.164 format) + `telephoneDisplay`
- [ ] **Email** — `lib/site.ts` → `nap.email`
- [ ] **Final domain** — `lib/site.ts` → `url`. Update `metadataBase` resolves automatically.
- [ ] **Geo coordinates** — `lib/site.ts` → `geo.latitude` + `longitude` for the studio
- [ ] **Real project photography** — replace Unsplash URLs in `lib/projects.ts` and `lib/services.ts`. Recommended dimensions: 1600×2000 (4:5 portrait) and 1600×1000 (16:10 landscape). Use WebP via `next/image`.
- [ ] **Logo PNG** — drop a 512×512 logo at `/public/logo.png` for schema and OG fallback
- [ ] **OG image** — drop a 1200×630 social share image at `/public/og.jpg`

### GHL (GoHighLevel) integration

- [ ] **Review widget Location ID** — `lib/site.ts` → `ghl.reviewWidgetLocationId`. Activates the embed on the homepage.
- [ ] **Enquiry form embed URL** — `lib/site.ts` → `ghl.enquiryFormEmbedUrl`. Replaces the placeholder form on `/contact`.

### Google Business Profile

- [ ] **Place ID + CID** — `lib/site.ts` → `gbp.placeId` and `gbp.cid` (find via Google's Place ID finder)
- [ ] **Maps embed URL** — `lib/site.ts` → `gbp.mapsUrl` (Google Maps → Share → Embed a map → copy `src`)

### Optional

- [ ] **Social URLs** — `lib/site.ts` → `social.instagram`, `linkedin`, `houzz`
- [ ] **Legal entity name** — `lib/site.ts` → `legalName`
- [ ] **Hours** — `lib/site.ts` → `hours[]` and `hoursDisplay[]` if different
- [ ] **Trust signals** — `lib/site.ts` → `trust[]` (accreditation list shown in homepage strip + About page)
- [ ] **Privacy / Terms pages** — create `app/privacy/page.tsx` and `app/terms/page.tsx` (footer links exist but pages are stubs)

---

## Local SEO authority checklist (do this off-site after launch)

### Citations — submit identical NAP to:

- [ ] Google Business Profile — verify NAP matches site exactly
- [ ] Bing Places
- [ ] Apple Maps Connect
- [ ] Yell.com
- [ ] Thomson Local
- [ ] Checkatrade
- [ ] TrustATrader
- [ ] FMB directory
- [ ] FreeIndex
- [ ] 192.com
- [ ] Houzz Pro
- [ ] Architects Journal directory (if applicable)

### Local trust links

- [ ] Cambridge Network membership page
- [ ] Federation of Master Builders profile linking back
- [ ] TrustMark profile linking back
- [ ] One or two Cambridge architects' supplier lists
- [ ] One or two Cambridge estate agents' recommended builder lists

### Local PR

- [ ] Cambridge Independent — pitch a project profile
- [ ] Cambridge News — local interest piece on conservation-area work
- [ ] A village sponsorship with a backlink (cricket club, school PTA)
- [ ] One local charity partnership

### Review platforms

- [ ] Google Business Profile reviews — primary, target 20+ in first 6 months
- [ ] Houzz reviews
- [ ] Checkatrade reviews
- [ ] Facebook reviews

### NAP consistency check

- [ ] Business name identical across all citations
- [ ] Address identical (Street vs St, comma placement, line breaks)
- [ ] Phone identical (format: 01223 000 000 — match exactly across web, GBP, all directories)
- [ ] Website URL identical

---

## Deployment notes

- Designed for Vercel. `npm run build` produces a fully static site (all dynamic routes use `dynamicParams = false` + `generateStaticParams`).
- Set `NEXT_PUBLIC_*` env vars via Vercel dashboard once a final domain is known.
- `images.remotePatterns` in `next.config.ts` currently allows Unsplash — remove these once placeholders are replaced.
- Lighthouse target: Performance 95+, Accessibility 100, Best Practices 100, SEO 100.

## Adding content

| To add… | Edit |
|---|---|
| A new village | `lib/areas.ts` — generates 5 new pages |
| A new service | `lib/services.ts` + create `app/{slug}/page.tsx` and `app/{slug}/[area]/page.tsx` thin wrappers |
| A new project | `lib/projects.ts` — appears in `/work`, the service hub, and the area hub automatically |
| A journal post | Not yet scaffolded — create `app/journal/` with MDX or a CMS adapter when needed |
