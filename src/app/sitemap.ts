import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles, products } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/learn",
    "/tools",
    "/marketplace",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/legal",
    ...articles.map((a) => `/learn/${a.slug}`),
    ...products.map(
      (p) => `/${p.type === "tool" ? "tools" : "marketplace"}/${p.slug}`,
    ),
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-11-20T00:00:00Z"),
    changeFrequency: path === "" ? "monthly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
