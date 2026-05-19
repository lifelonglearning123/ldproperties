import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/work", "/areas", "/process", "/about", "/contact"];

  const urls: MetadataRoute.Sitemap = [];

  // Static pages
  for (const path of staticPages) {
    urls.push({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1.0 : 0.8,
    });
  }

  // Service hubs
  for (const s of services) {
    urls.push({
      url: `${site.url}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  // Service × area matrix
  for (const s of services) {
    for (const a of areas) {
      urls.push({
        url: `${site.url}/${s.slug}/${a.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // Area hubs
  for (const a of areas) {
    urls.push({
      url: `${site.url}/areas/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Projects
  for (const p of projects) {
    urls.push({
      url: `${site.url}/work/${p.slug}`,
      lastModified: new Date(`${p.year}-12-31`),
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  return urls;
}
