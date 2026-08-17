import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Block indexing on Vercel preview/development deployments so a staging URL is
// never crawled and indexed alongside the real domain. Production (and any
// non-Vercel host) is fully indexable.
const isPreview =
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_ENV === "development";

export default function robots(): MetadataRoute.Robots {
  if (isPreview) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
