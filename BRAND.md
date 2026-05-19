# LD Properties — Brand Reference

The canonical brand book. Anything that contradicts this file is wrong.

## Name

**LD Properties** — Cambridge, UK.

The **LD** is the initials of the founder. Treat it as a personal mark, not an acronym to be expanded — never write "LD stands for…" in marketing copy. The name speaks for itself.

Short forms — in order of preference:

1. **LD Properties** (primary, full name in body copy and titles)
2. **LD** (informal, only after first mention in the same paragraph)
3. **LD** monogram (favicon / avatar / square crops only — never in body copy)

## Positioning

> **Considered design and build for Cambridge homes.**

Long form:

> *LD Properties is a Cambridge design-and-build studio. We design and build extensions, kitchens, bathrooms and garden rooms — one team, from first sketch to final handover, across Cambridge and the surrounding villages.*

## Audience

Cambridge homeowners commissioning works at £30k–£500k+. Typically:

- Professionals, academics, families in CB1–CB5 and surrounding villages (Newnham, Trumpington, Grantchester, Coton, Madingley, Histon, Great Shelford, Cherry Hinton, Girton, Comberton)
- Property values £700k–£3m+
- Many properties in conservation areas — planning literacy matters
- Choose on trust, taste, and references — not on lowest quote

## Voice and tone

- **First-person plural.** "We design and build." Never "I" or "our team of dedicated professionals".
- **Specific over generic.** "A 38m² rear extension in Newnham with Crittall steel glazing and a slate roof" — not "stunning dream kitchen extension".
- **Confident through restraint.** Say less, mean more. No exclamation marks. No superlatives. No "stunning / dream / passionate / dedicated / professional".
- **British English.** Realised, colour, organisation, etc.
- **Numbers in text.** "38m²", "12 weeks on site", "from £45,000". Specifics build credibility.

### Words we don't use

> stunning · dream · passionate · dedicated · professional · bespoke (overused) · luxury · premium · ultimate · transform · vision · journey · solution · turnkey · partner · synergy

### Words we do use

> considered · careful · detailed · planned · drawn · built · finished · joinery · stonework · brickwork · threshold · glazing · roofline

## Design DNA

**Premium, image-led, Cambridge Blue.** The visual system is rooted in the traditional Cambridge Blue palette, with photographic imagery treated as the primary sales asset — not decoration.

- **Image-led, not text-led.** Heroes are full-bleed photographs above the heading. Featured work is one wide cinematic project + two paired below, not a grid of equal thumbnails. The site sells on the photography first; the copy frames it.
- **Premium restraint.** Deep Cambridge-blue text, gold typographic accents, ink-fill CTAs. Tango orange is used **only** on lead-magnet downloads (the Extensions Guide) — never as a default button colour.
- **Signature flourish (premium).** An Italianno script accents one short italic phrase per major heading — reads as a fountain-pen signature, not handwriting. Never on body, navigation, eyebrows, or buttons.
- **Cambridge Blue character.** Cambridge-tinged navy `#1E3A4C` for text. Deep Cambridge blue `#2C4858` for contrast sections. Light Cambridge sage `#A3C1AD` for hairlines and accents on dark surfaces.
- **No flat-card boredom, no shadow soup.** Cards lift a few pixels on hover; never more. No drop shadows on idle. Images scale subtly (1.04) on card hover.
- **Twin trust bands.** A thin credentials strip near hero (scan), a tile-sized credentials band before the final CTA (commit).

## Colour palette

| Token | Hex | CSS variable | Use |
|---|---|---|---|
| Stone (ivory) | `#F5F0E8` | `--color-stone` | Primary background, expansive surfaces |
| Sand | `#EBE2D2` | `--color-sand` | Secondary surface, dividers, inset cards |
| Paper | `#FAFAF7` | `--color-paper` | Off-white for floating cards |
| **Ink (Cambridge navy)** | `#1E3A4C` | `--color-ink` | Primary text, headlines — Cambridge-tinted deep blue |
| Ink Soft | `#34536A` | `--color-ink-soft` | Body alt |
| Ink Muted | `#7A8895` | `--color-ink-muted` | Captions, meta |
| Gold | `#B8923D` | `--color-gold` | Typographic accent — eyebrows, links, signature (deepened for premium feel) |
| Gold Hover | `#9D7B30` | `--color-gold-hover` | Hover state for gold |
| Gold Soft | `#D6B364` | `--color-gold-soft` | Lighter tint |
| Cambridge | `#A3C1AD` | `--color-cambridge` | Light Cambridge sage — accent on dark sections, hairlines |
| Cambridge Soft | `#DDE9DE` | `--color-cambridge-soft` | Lightest Cambridge tint for surfaces |
| **Petrol (deep Cambridge blue)** | `#2C4858` | `--color-petrol` | Deep contrast surface — testimonials, deep sections |
| Tango (burnt orange) | `#C95F1F` | `--color-tango` | Lead-magnet CTA only (Extensions Guide). Never the default. |
| Tango Hover | `#A84D14` | `--color-tango-hover` | Hover state for tango |
| Divider | `#DADADA` | `--color-divider` | Hairlines |

Rules:

- **No pure white. No pure black.** Both are too harsh against the warm ivory.
- **Stone is the default canvas.** Sand divides sections. Petrol is used sparingly for depth.
- **Gold and Cambridge Blue are the type accents.** Gold for eyebrows, rules, signature. Cambridge Blue for accent words on petrol backgrounds.
- **Default CTAs are ink-fill.** Tango orange is reserved for the Extensions Guide download — its job is to look like the "ask for the brochure" tile on Potton. Anywhere else, it cheapens the brand.
- **Never introduce a third accent colour.**

## Typography

| Role | Family | Source | Notes |
|---|---|---|---|
| Display | **Fraunces** | Google Fonts | Editorial serif with optical sizing, weight 500 for headlines |
| Body | **Poppins** | Google Fonts | Geometric humanist sans, mirrors Potton's body |
| Accent | **Fraunces Italic** | Google Fonts | Pull-quotes, project subtitles |
| **Signature** | **Italianno** | Google Fonts | Premium copperplate script — 1 short phrase per heading, *never* body |

Loaded via `next/font/google` with `display: "swap"`. Fraunces variable axes: optical size, weight, soft. Poppins weights: 300 / 400 / 500 / 600. Italianno: 400 (single weight by design).

### Signature usage rule

The signature font (`display-signature` utility) is the brand's quietest distinguishing feature. Apply it to **one short italic phrase per heading at most** — never to the full headline, never to body copy, never to two phrases in the same H2. Italianno reads ~50% smaller per em than the surrounding Fraunces, so the utility applies `font-size: 1.7em` and a baseline nudge automatically. The default colour is **gold**; on dark sections it can be set to Cambridge light via `style={{color: 'var(--color-cambridge)'}}`.

Examples that work:
- *"first sketch"* inside "One team, from **first sketch** to final handover"
- *"across Cambridge"* inside "Projects from **across Cambridge**"
- *"still standing"* on a Cambridge-blue tint, against deep sage

Examples that don't:
- A whole H1 in script — illegible at hero size
- A signature word in body copy — feels random
- Two signature words in the same heading — competes with itself

### Type scale (responsive, defined in `globals.css`)

| Role | Size | Weight | Tracking |
|---|---|---|---|
| H1 | clamp(2.5rem, 5.5vw, 5rem) | 500 | -0.035em |
| H2 | clamp(2rem, 3.8vw, 3.25rem) | 500 | -0.025em |
| H3 | clamp(1.5rem, 2.4vw, 2rem) | 500 | -0.02em |
| Body | 1rem / 1.65 | 400 | 0 |
| Eyebrow | 0.75rem | 500 | 0.18em uppercase (in **Gold**) |
| Signature | 1.25em (relative) | 500 | normal, slight `-1.5deg` tilt |

Eyebrows are set in **gold** — they're the primary place gold appears as text.

## Logo

Wordmark only — **no symbol, no monogram cluttering the primary mark**. The mark is the type.

### Canonical asset

The master logo file is **`/public/brand/ld-logo.png`** (2816 × 1536, aspect 11:6). Master archive at `/brand/LD logo.png`. Always use this asset — never re-create the lockup from CSS. The `<Logo />` component in `components/Logo.tsx` renders it via `next/image`, sized by height so it lands consistently across the header (`h-14 md:h-16`).

### Primary lockup (header, hero)

```
LD
─────────────  (gold hairline rule)
PROPERTIES · CAMBRIDGE
```

- **LD** in deep Cambridge navy (`#1E3A4C`), heavy serif
- **Gold hairline rule** beneath, in `--color-gold`
- **PROPERTIES · CAMBRIDGE** in tracked sans caps

Rendered from `/brand/ld-logo.png`. The component matches by setting `tone="ink"` (default) on light backgrounds; on dark sections pass `tone="stone"` (CSS invert fallback — for production a dedicated light PNG should be added at `/brand/ld-logo-light.png`).

### Inline lockup (small contexts, dense rows)

```
LD PROPERTIES
```

- Fraunces 500 for LD, Poppins tracked caps for PROPERTIES
- Used in mobile headers, dense nav, footer column heads

### Stacked lockup (social, square crops)

```
LD
──── (gold rule)
PROPERTIES
Cambridge
```

### Monogram (favicon, avatar only)

```
LD
```

- Set in Fraunces, optical size 144
- Used only at square, ≤64px contexts — never in body or marketing

## Buttons

Three variants. The system is deliberately narrow.

| Variant | Use | Style |
|---|---|---|
| **Primary** | Default CTA in editorial sections | Ink (navy) fill, stone text, hovers to petrol |
| **Tango** | High-conversion CTA only (guide download, hero enquire) | Tango orange fill, white text, hovers darker |
| **Ghost** | Secondary, paired with primary in heroes | Ink-outlined, fills ink on hover |
| **Link** | Inline, "View all →" pattern | Gold underline animation |

**Tango is used sparingly** — once per page maximum, twice if the page has both a hero CTA and a guide download. Otherwise primary.

## Photography direction

**Photography is the primary sales asset. Budget for it, brief it well, and let it dominate the layout.**

- **Big, not contained.** Hero images are full-bleed at 60–72vh, not boxed inside the grid. Featured work is one cinematic 16:10 image, not three equal thumbnails. Anything smaller than 4:5 portrait is wrong for a hero or featured project.
- **Natural light only.** No flash, no HDR, no aggressive editing.
- **Lived-in spaces.** A kettle on the counter, a book on the chair. Never show-home empty.
- **Wide context shots** paired with **tight detail shots** in series — a brass tap, a stone threshold, the junction of timber and steel.
- **Captions name village, year, one material detail.**
  *Example: "Newnham · 2024 · Crittall steel, oak threshold"*
- **No people in hero shots** unless they're the client and they've consented. Detail shots can include hands.
- **Minimum resolution: 2400px wide for hero, 1600px for featured.** No compromise on this — large screens punish underspec'd images.

## Layout principles

- **Image-led heroes.** Full-bleed photograph at the top of every primary page (home, about, services, projects). Heading + intro sit *below* the image, not beside it.
- **Generous whitespace.** Sections breathe at `--spacing-section` (~7rem vertical).
- **Editorial grid.** 12-col with wide gutters. Heading in 7 cols, intro+CTA in 5 cols below the image.
- **Asymmetry over symmetry.** Where text and image are paired, image is wider than text.
- **Featured work pattern: 1 wide + 2 paired.** Hero project at 16:10 spans full container; second tier paired at 3:4.
- **Hairline rules** at section transitions, not heavy borders.
- **Card lift on hover** (`card-lift` utility) + subtle image zoom (`scale-[1.04]`). **No idle shadows.**
- **No rounded corners > 2px. No gradients** except as photographic overlays for hero captions.

## Page architecture (homepage canonical order)

The flow mirrors Potton's conversion machinery in editorial dress:

1. **Hero** — asymmetric split, named project caption, dual CTA
2. **Trust strip** — thin scan band, 4 short credentials
3. **Services** — 4-up grid (extensions / kitchens / bathrooms / garden rooms)
4. **Featured work** — 3 named projects, "Newnham · 2024 · material" captions
5. **Process teaser** — 4-step numbered list, link to full process
6. **Testimonials** — petrol section, 3-up named editorial quotes
7. **Areas** — Cambridge village links
8. **Cambridge Extensions Guide** — slow-lead capture, tango CTA
9. **Reviews widget** — live GHL embed
10. **Certifications band** — full-tile credentials grid
11. **Final CTA** — ink section, phone + enquire

## Voice samples

### Homepage hero

> **Considered design and build for Cambridge homes.**
>
> Extensions, kitchens, bathrooms and garden rooms — designed and built by one team, from first sketch to final handover. Across Cambridge and the surrounding villages.
>
> *View our work →*

### Service page intro (Extensions)

> We design and build rear, side, wraparound and two-storey extensions across Cambridge — including in conservation areas and on listed properties. Most of our work comes from referrals, and most of our projects sit between 25m² and 60m².

### Project caption

> *Newnham · 2024 — A 42m² rear extension to a Victorian semi. Crittall steel glazing, polished concrete floor, and a London stock brick spine wall that ties the new build to the existing elevation. Twelve weeks on site.*

### Testimonial format

> *"They drew it, they built it, and they showed up every day. The result is the calmest room in the house."*
> — **R. & A., Newnham, 2024 · Rear extension**

Initials only for clients (privacy + restraint). Always paired with village, year, and one-line project type.

## Don't

- Don't use stock photography of generic kitchens or hard hats
- Don't say "passionate", "dedicated", "professional", "bespoke", "turnkey"
- Don't use icons of houses, trowels, hammers, or hard hats
- Don't introduce a third accent colour or a second display font
- Don't expand the **LD** monogram into a circle, shield, badge, or hexagon
- Don't use tango orange as a default button colour — it's reserved for the Extensions Guide lead-magnet only
- Don't put gold on a button fill
- Don't run the signature font for more than 1–2 words in a heading, ever
- Don't use the signature font in body copy, navigation, buttons, or eyebrows
- Don't put images smaller than 4:5 in heroes or featured projects — the brand sells on photography
- Don't show 3 equal-size project thumbnails on the homepage — use the 1-wide + 2-paired pattern
- Don't write copy that could describe any other builder

## Implementation notes

- Colours live as CSS variables in `app/globals.css` under `@theme`, exposed to Tailwind as `bg-stone`, `text-ink`, `text-gold`, `bg-petrol`, `bg-tango` etc.
- Fonts loaded via `next/font/google` in `app/layout.tsx` and exposed via the `--font-fraunces` and `--font-poppins` CSS vars.
- All hardcoded values in this file should match the implementation. If they drift, update both.
