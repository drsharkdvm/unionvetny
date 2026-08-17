import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { POSTS } from "@/lib/posts";
import { SERVICES } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pageDate = new Date("2026-08-14");

  const pages = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/our-services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about-us", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/faqs", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact-us", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ].map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: pageDate,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const servicePages = SERVICES.map((s) => ({
    url: `${SITE.url}/our-services/${s.slug}`,
    lastModified: pageDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articles = POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...servicePages, ...articles];
}
