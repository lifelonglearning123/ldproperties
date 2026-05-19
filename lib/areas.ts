/**
 * Cambridge catchment villages and central postcode areas.
 * Each entry seeds an area page and a service × area page for every service.
 * Add unique copy per area — Google penalises thin templated landing pages.
 */

export type Area = {
  slug: string;
  name: string;
  postcode: string;
  intro: string;
  notes: string; // local context — conservation, property types, planning quirks
  priority: 1 | 2; // 1 = primary catchment, 2 = secondary
};

export const areas: Area[] = [
  {
    slug: "newnham",
    name: "Newnham",
    postcode: "CB3",
    intro:
      "Newnham sits west of the river — Edwardian and Victorian villas, college fellows' houses, and a tight conservation area that runs from Grange Road to the Backs.",
    notes:
      "Most of Newnham is within the West Cambridge Conservation Area. Article 4 directions apply to some streets, which means works that would normally be permitted development require a planning application. We've worked across CB3 and handle the planning side directly.",
    priority: 1,
  },
  {
    slug: "trumpington",
    name: "Trumpington",
    postcode: "CB2",
    intro:
      "Trumpington runs from the old village core through Trumpington Meadows and Glebe Farm — a mix of 1930s semis, Victorian cottages and new builds with strong gardens.",
    notes:
      "Older Trumpington streets sit within the Trumpington Conservation Area; the newer developments don't, but often have estate covenants. We've worked in both.",
    priority: 1,
  },
  {
    slug: "grantchester",
    name: "Grantchester",
    postcode: "CB3",
    intro:
      "Grantchester — a village south-west of Cambridge with thatched cottages, Georgian houses and a strong listed-building presence near the church and Mill.",
    notes:
      "A high proportion of Grantchester properties are listed. We handle listed building consent, conservation officer liaison and lime-based specifications routinely.",
    priority: 1,
  },
  {
    slug: "coton",
    name: "Coton",
    postcode: "CB23",
    intro:
      "Coton — a small village immediately west of Cambridge, with characterful older cottages, post-war family homes and a quiet conservation area at its centre.",
    notes:
      "Most extension work in Coton involves either matching existing brickwork on older properties or working with the more flexible footprints of post-war homes. The conservation area covers the village core.",
    priority: 1,
  },
  {
    slug: "cherry-hinton",
    name: "Cherry Hinton",
    postcode: "CB1",
    intro:
      "Cherry Hinton — east of central Cambridge, a mix of Victorian terraces, 1930s semis and substantial post-war family homes, with strong gardens for extensions.",
    notes:
      "Cherry Hinton has a defined village conservation area around the church and brook, but most of the streets we work on sit outside it, with permitted development rights available for many rear extensions.",
    priority: 1,
  },
  {
    slug: "histon",
    name: "Histon",
    postcode: "CB24",
    intro:
      "Histon and Impington — north of Cambridge, a village pair with substantial inter-war and post-war family houses, generous gardens, and growing demand for kitchen extensions and garden rooms.",
    notes:
      "Histon is largely outside the conservation area, with good scope for permitted development. We've worked on a series of side returns and rear extensions here.",
    priority: 1,
  },
  {
    slug: "great-shelford",
    name: "Great Shelford",
    postcode: "CB22",
    intro:
      "Great Shelford — south of Cambridge, a high-value village with substantial Victorian and Edwardian houses, large gardens and a working conservation area.",
    notes:
      "Much of Great Shelford's historic core is within the conservation area. Side and rear extensions require careful elevation work, and we routinely use Cambridge gault and London stock brick to match.",
    priority: 1,
  },
  {
    slug: "madingley",
    name: "Madingley",
    postcode: "CB23",
    intro:
      "Madingley — a small village west of Cambridge, home to Madingley Hall and a tight cluster of listed and historic properties.",
    notes:
      "Many Madingley properties are listed or within the conservation area. We've worked on lime-rendered cottages, listed extensions and outbuilding conversions here.",
    priority: 1,
  },
  {
    slug: "girton",
    name: "Girton",
    postcode: "CB3",
    intro:
      "Girton — north-west of Cambridge, a village dominated by post-war family housing with strong plots, well suited to extensions and garden rooms.",
    notes:
      "Outside the conservation area, most Girton properties have full permitted development rights available. Rear, side and wraparound extensions are the common ask.",
    priority: 1,
  },
  {
    slug: "comberton",
    name: "Comberton",
    postcode: "CB23",
    intro:
      "Comberton — a village south-west of Cambridge with a mix of cottage-scale older homes and substantial detached family houses, popular with families served by Comberton Village College.",
    notes:
      "Comberton has a small conservation area around the village green and church; most newer streets sit outside it. We've worked on full kitchen-extension refits and garden offices here.",
    priority: 1,
  },
];

export const areaBySlug = (slug: string) => areas.find((a) => a.slug === slug);
