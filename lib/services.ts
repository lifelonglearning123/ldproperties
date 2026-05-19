/**
 * Service catalogue. Order here drives nav order, service card order, and sitemap order.
 * Adding a new service: add to this array — pages, sitemap, schema and area-cross pages update automatically.
 */

export type Service = {
  slug: string;
  name: string; // singular display name
  pluralName: string;
  navLabel: string;
  hero: string; // H1 fragment
  intro: string; // 1–2 sentences for service hub hero
  summary: string; // one-line summary used in cards
  scope: string[]; // bullets of what's included
  process: { title: string; body: string }[];
  materials: string[];
  faq: { q: string; a: string }[];
  // Cover image — Unsplash URL placeholder, replace with real project photography pre-launch
  cover: string;
  coverAlt: string;
};

export const services: Service[] = [
  {
    slug: "extensions",
    name: "Extension",
    pluralName: "Extensions",
    navLabel: "Extensions",
    hero: "Extensions",
    intro:
      "We design and build rear, side, wraparound and two-storey extensions across Cambridge — including in conservation areas and on listed properties.",
    summary:
      "Rear, side, wraparound and two-storey extensions, drawn and built by one team.",
    scope: [
      "Rear extensions, single and double storey",
      "Side returns and wraparound extensions",
      "Two-storey rear and side extensions",
      "Loft conversions with dormer or mansard",
      "Listed building consent and conservation-area planning",
      "Party wall agreements and structural calculations",
    ],
    process: [
      { title: "Sketch", body: "A measured survey, a first drawing, and an honest conversation about cost and scope." },
      { title: "Planning", body: "Drawings, planning submission, conservation or listed building consent where needed." },
      { title: "Build", body: "One project manager, our directly employed trades, no subcontracted chaos." },
      { title: "Handover", body: "Snagging, finishing, certification, and a year of aftercare." },
    ],
    materials: [
      "London stock and Cambridge gault brick",
      "Crittall and Velfac steel-framed glazing",
      "Slate, clay tile, standing-seam zinc roofing",
      "Polished concrete, engineered oak, limestone flooring",
    ],
    faq: [
      {
        q: "How long does a typical extension take to build?",
        a: "Single-storey rear extensions of 25–40m² usually run 10–14 weeks on site, with 6–12 weeks of design and planning beforehand. Two-storey extensions add roughly four weeks to the build.",
      },
      {
        q: "Can you work on listed buildings or in conservation areas?",
        a: "Yes. A significant share of Cambridge sits within a conservation area, and we handle listed building consent, Article 4 directions, and conservation officer liaison routinely.",
      },
      {
        q: "How much does an extension in Cambridge cost?",
        a: "As of 2026, a well-built single-storey rear extension typically runs £2,800–£3,800 per m² including finishes. Glazing, structural complexity and listed status all push that range.",
      },
      {
        q: "Do you handle planning permission?",
        a: "Yes — drawings, planning portal submission, conservation and listed building consent, and any pre-application enquiries with Cambridge City or South Cambs.",
      },
    ],
    cover:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop",
    coverAlt: "Modern rear extension with steel-framed glazing onto a Cambridge garden",
  },
  {
    slug: "kitchens",
    name: "Kitchen",
    pluralName: "Kitchens",
    navLabel: "Kitchens",
    hero: "Kitchens",
    intro:
      "We design and build kitchens for Cambridge homes — from a refit within an existing footprint to an extended rear kitchen wrapped around a courtyard.",
    summary:
      "Designed kitchens with joinery and stone, refits and as part of an extension.",
    scope: [
      "Designed kitchens with bespoke joinery",
      "Kitchen extensions (rear, side return, wraparound)",
      "Stone and engineered worktops, brass and matte ironmongery",
      "Appliance specification (Miele, Gaggenau, Wolf, Sub-Zero)",
      "Plumbing, electrics, ventilation and lighting design",
      "Existing-footprint refits without structural work",
    ],
    process: [
      { title: "Brief", body: "We listen first — how you cook, how you entertain, how the room sits in the rest of the house." },
      { title: "Design", body: "Plans, elevations, and a samples board: timbers, stone, paint and ironmongery in one place." },
      { title: "Build", body: "Joinery made in our workshop or by a specified maker, fitted by our team." },
      { title: "Finish", body: "Worktop templating, appliance install, snagging, and one-year aftercare." },
    ],
    materials: [
      "Bespoke and Plain English-style hand-painted joinery",
      "Honed limestone, marble, granite and quartzite worktops",
      "Matte brass, antique bronze, brushed nickel ironmongery",
      "Reclaimed and engineered oak, walnut, and Douglas fir",
    ],
    faq: [
      {
        q: "Do you make the cabinetry yourselves?",
        a: "We work with two Cambridge-based joinery workshops we've used for years. We also fit kitchens from Plain English, deVOL, Pluck and other specified makers when a client has a preference.",
      },
      {
        q: "How much does a Cambridge kitchen typically cost?",
        a: "Designed kitchens in the homes we work on usually run £40k–£120k including joinery, stone, appliances and install. A simple refit can sit below that range; a kitchen-in-extension above it.",
      },
      {
        q: "Can you specify appliances?",
        a: "Yes. We work most often with Miele, Gaggenau, Wolf and Sub-Zero, and we'll specify against your cooking habits — not the showroom upsell.",
      },
      {
        q: "How long does a kitchen take?",
        a: "Eight to twelve weeks of design, then four to eight weeks on site for an existing-footprint refit. Kitchens within an extension run with the wider programme.",
      },
    ],
    cover: "/brand/kitchen.png",
    coverAlt: "A designed kitchen by LD Properties — Cambridge",
  },
  {
    slug: "bathrooms",
    name: "Bathroom",
    pluralName: "Bathrooms",
    navLabel: "Bathrooms",
    hero: "Bathrooms",
    intro:
      "We design and build family bathrooms, en-suites, principal suites and wet rooms — drawn around how a room is actually used, not how it photographs.",
    summary:
      "Family, en-suite, principal and wet rooms — stone, brass and considered detail.",
    scope: [
      "Family bathrooms and en-suites",
      "Principal bathroom suites with bath, walk-in shower and twin basins",
      "Wet rooms with full tanking and underfloor heating",
      "Stone, marble, microcement, and large-format tile installations",
      "First and second fix plumbing, electrics, ventilation",
      "Specialist tiling and stone fabrication",
    ],
    process: [
      { title: "Sketch", body: "A plan that fits the existing room — or one that takes a wall down where it makes sense." },
      { title: "Specification", body: "A samples board of stone, tile, brassware and joinery, priced honestly." },
      { title: "Strip-out", body: "Careful demolition, dust-sheeted access, and a tidy site at the end of each day." },
      { title: "Finish", body: "Tiling, stone, brassware, glass — and a final clean before handover." },
    ],
    materials: [
      "Honed Carrara, Calacatta and limestone",
      "Microcement walls and floors",
      "Brass, antique bronze, brushed nickel brassware",
      "Underfloor heating with smart zoning",
    ],
    faq: [
      {
        q: "How long does a bathroom take?",
        a: "A family bathroom or en-suite typically runs three to five weeks on site. Principal suites or full wet rooms with structural work run longer.",
      },
      {
        q: "Can you reconfigure the layout?",
        a: "Yes — we routinely move walls, soil stacks and openings to make a bathroom work properly. We'll only do it where it's worth the disruption.",
      },
      {
        q: "Do you fit my own choice of fittings?",
        a: "Yes. If you'd like to specify your own brassware or stone, we'll fit it. We'll also tell you where we think a different choice would work better.",
      },
      {
        q: "How much does a Cambridge bathroom cost?",
        a: "Mid-range family bathrooms typically run £12k–£25k including stone or tile. Principal suites and full wet rooms sit higher.",
      },
    ],
    cover: "/brand/bathroom.png",
    coverAlt: "A designed bathroom by LD Properties — Cambridge",
  },
  {
    slug: "garden-rooms",
    name: "Garden Room",
    pluralName: "Garden Rooms",
    navLabel: "Garden Rooms",
    hero: "Garden Rooms",
    intro:
      "Insulated, year-round garden rooms — for working, working out, or hosting. Built to the same standard as the main house, not bolted together from a kit.",
    summary:
      "Garden offices, studios, gyms and annexes — built like a house, not a shed.",
    scope: [
      "Garden offices and studios",
      "Home gyms with full insulation and sprung floors",
      "Guest annexes (within permitted development where possible)",
      "Concrete or timber-pile foundations",
      "Full electrics, plumbing where required, heating and cooling",
      "Permitted development advice and planning where needed",
    ],
    process: [
      { title: "Survey", body: "A site visit to assess access, levels, drainage and any planning implications." },
      { title: "Design", body: "Drawings sized to your garden, your sightlines, and how you'll actually use it." },
      { title: "Foundations", body: "Concrete pads, screw piles or strip foundations depending on ground and access." },
      { title: "Build", body: "Insulated, weather-tight and finished — usually six to ten weeks on site." },
    ],
    materials: [
      "Larch, oak and Accoya cladding",
      "Standing-seam zinc and EPDM roofing",
      "Triple-glazed timber or aluminium frames",
      "Engineered oak, polished concrete, sisal flooring",
    ],
    faq: [
      {
        q: "Do I need planning permission for a garden room?",
        a: "Most garden rooms fall within permitted development if they're under 30m², no taller than 2.5m at the boundary, and within 50% of the curtilage. Listed properties and conservation areas have extra rules — we'll check the specifics.",
      },
      {
        q: "How long does a garden room take to build?",
        a: "Six to ten weeks on site for a typical 15–25m² office or studio. Larger rooms with services and complex access run longer.",
      },
      {
        q: "How much does a Cambridge garden room cost?",
        a: "Insulated, fully-finished garden rooms built to house standards typically run £2,400–£3,500 per m². A 20m² office sits around £50k–£70k including foundations, services and joinery.",
      },
      {
        q: "Can it have a bathroom or kitchenette?",
        a: "Yes — drainage and water supply usually require a trench from the main house. We handle the foul, water, and electrics together.",
      },
    ],
    cover: "/brand/garden-room.png",
    coverAlt: "A garden room by LD Properties — Cambridge",
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
