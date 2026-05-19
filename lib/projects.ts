/**
 * Project case studies. Add a new project by appending to the array — it will appear in
 * /work, the relevant service hub, and the relevant area hub automatically.
 *
 * Photos are Unsplash placeholders. Replace `images` with real project photography pre-launch.
 */

export type Project = {
  slug: string;
  title: string; // editorial title, e.g. "A Newnham rear extension"
  year: number;
  service: "extensions" | "kitchens" | "bathrooms" | "garden-rooms";
  area: string; // matches Area.slug
  summary: string; // one-line summary used in cards
  description: string; // 2–3 paragraphs for case study page
  scope: string[]; // bullets
  materials: string[];
  duration: string; // e.g. "12 weeks on site"
  size: string; // e.g. "42 m²"
  cover: string;
  coverAlt: string;
  images: { src: string; alt: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    slug: "newnham-rear-extension-2024",
    title: "A Newnham rear extension",
    year: 2024,
    service: "extensions",
    area: "newnham",
    summary:
      "A 42m² rear extension to a Victorian semi — Crittall steel, polished concrete and a London stock spine wall.",
    description:
      "The brief was to open the back of a tight Victorian semi onto a long garden without losing the room hierarchy of the original house. We took down the rear half of the kitchen, added a 42m² single-storey extension with a London stock brick spine wall that ties new to old, and dropped the floor 200mm to gain ceiling height.\n\nThe glazing runs the full width of the rear elevation in two Crittall steel frames, with a polished concrete floor that absorbs sun in the morning and stays warm into the evening. The original chimney was retained and exposed, brick on three sides.\n\nTwelve weeks on site with one project manager, our directly employed trades, and a tight programme that took the kitchen out of action for six weeks rather than twelve.",
    scope: [
      "42m² single-storey rear extension",
      "London stock brick spine wall, polished concrete floor",
      "Crittall steel-framed glazing, two bays",
      "Kitchen design and install (Plain English)",
      "Underfloor heating, MVHR ventilation",
      "Garden landscaping and York stone terrace",
    ],
    materials: [
      "London stock brick",
      "Crittall W20 steel glazing",
      "Polished concrete (lithium-sealed)",
      "Reclaimed oak threshold",
      "Plain English joinery",
    ],
    duration: "12 weeks on site",
    size: "42 m²",
    cover:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop",
    coverAlt: "Newnham rear extension with Crittall steel glazing and polished concrete floor",
    images: [
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80&auto=format&fit=crop",
        alt: "Detail of London stock brick spine wall against Crittall glazing",
        caption: "London stock brick · Crittall steel · oak threshold",
      },
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80&auto=format&fit=crop",
        alt: "Plain English kitchen joinery in the extension",
        caption: "Plain English joinery · honed limestone worktop",
      },
    ],
  },
  {
    slug: "trumpington-kitchen-2024",
    title: "A Trumpington kitchen",
    year: 2024,
    service: "kitchens",
    area: "trumpington",
    summary:
      "A hand-painted, in-frame kitchen with honed limestone worktops and an Aga in the original chimney breast.",
    description:
      "A 1930s semi in Trumpington had a kitchen that worked, just not well. We kept the footprint, replaced everything inside it, and brought back a chimney breast that had been covered over in the 1990s.\n\nThe kitchen was made by a Cambridge joinery workshop in hand-painted hardwood, in-frame, with brushed brass ironmongery and honed Carrara worktops. We reconfigured the services to drop a six-zone induction into the island and a Total Control Aga into the chimney recess.\n\nSix weeks on site. The room is now the centre of the house in a way it had stopped being.",
    scope: [
      "Existing-footprint kitchen refit",
      "Bespoke in-frame hardwood joinery, hand-painted",
      "Honed Carrara worktop and splashback",
      "Aga Total Control + Miele appliances",
      "Reconfigured plumbing, electrics, ventilation",
      "Engineered oak floor throughout",
    ],
    materials: [
      "Honed Carrara marble",
      "Hand-painted hardwood, in-frame",
      "Antique brass ironmongery",
      "Engineered oak flooring",
    ],
    duration: "6 weeks on site",
    size: "24 m²",
    cover: "/brand/kitchen.png",
    coverAlt: "Trumpington kitchen in painted joinery with honed limestone worktop",
    images: [],
  },
  {
    slug: "great-shelford-bathroom-2025",
    title: "A Great Shelford principal suite",
    year: 2025,
    service: "bathrooms",
    area: "great-shelford",
    summary:
      "A principal bathroom suite carved out of a former box room — Calacatta marble, brass brassware, walk-in shower.",
    description:
      "Reconfiguring a principal bedroom in an Edwardian Great Shelford house to absorb the adjacent box room and create a full principal suite — bedroom, dressing room, bathroom.\n\nThe bathroom itself runs the full width of the rear elevation, with a freestanding bath under the window, a walk-in shower with a single fixed glass screen, and a twin basin vanity in honed Calacatta.",
    scope: [
      "Structural reconfiguration — wall removal and new doorways",
      "Walk-in shower with low-iron glass screen",
      "Freestanding bath, twin basin vanity",
      "Honed Calacatta marble floor and walls",
      "Underfloor heating, towel rail circuit",
      "Brushed brass brassware throughout",
    ],
    materials: [
      "Honed Calacatta marble",
      "Brushed brass brassware",
      "Walnut vanity joinery",
    ],
    duration: "8 weeks on site",
    size: "12 m²",
    cover: "/brand/bathroom.png",
    coverAlt: "Principal bathroom suite in honed Calacatta with brass brassware",
    images: [],
  },
  {
    slug: "histon-garden-room-2024",
    title: "A Histon garden studio",
    year: 2024,
    service: "garden-rooms",
    area: "histon",
    summary:
      "A 22m² insulated garden studio in larch and zinc — full electrics, double glazing, year-round office space.",
    description:
      "A garden studio for a client who needed a working space separate from the main house. 22m² insulated to current Part L standards, with triple-glazed timber frames, full electrics and a small kitchenette.\n\nClad in vertical larch with a standing-seam zinc roof and a covered porch. Sits within permitted development.",
    scope: [
      "22m² insulated garden studio",
      "Concrete pad foundations",
      "Larch cladding, standing-seam zinc roof",
      "Triple-glazed timber frames",
      "Full electrics, lighting, heating",
      "Engineered oak floor, plastered interior",
    ],
    materials: [
      "Vertical larch cladding",
      "Standing-seam zinc roofing",
      "Triple-glazed timber frames",
      "Engineered oak flooring",
    ],
    duration: "8 weeks on site",
    size: "22 m²",
    cover: "/brand/garden-room.png",
    coverAlt: "Histon garden studio with vertical larch cladding and zinc roof",
    images: [],
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const projectsByService = (service: Project["service"]) =>
  projects.filter((p) => p.service === service);
export const projectsByArea = (area: string) => projects.filter((p) => p.area === area);
