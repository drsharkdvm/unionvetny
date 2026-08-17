import type { NextConfig } from "next";
import path from "node:path";

// Content-Security-Policy allowlisting exactly the third parties this site uses:
// Google Analytics/gtag, the localmarketingmanager.com GBP widgets, Google Fonts,
// and the Google Maps embed. 'unsafe-inline' is kept for scripts/styles because the
// pages are statically prerendered (nonce-based CSP would force dynamic rendering);
// the policy still adds frame-ancestors, object-src and source allowlisting.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: https:",
  "frame-src 'self' https://www.localmarketingmanager.com https://www.google.com https://maps.google.com",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://analytics.google.com https://stats.g.doubleclick.net",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
].join("; ");

/** Security headers applied to every route. */
const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    // Ignored over plain HTTP (local dev); enforced once served over HTTPS.
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

// Articles migrated from root-level WordPress URLs into /blog/[slug].
const MIGRATED_ARTICLES = [
  "sores-on-dogs-belly",
  "dog-temperature-chart",
  "red-rash-on-dog",
  "best-diet-for-dogs-with-liver-disease",
  "what-should-kitten-poop-look-like",
];

const nextConfig: NextConfig = {
  // Don't advertise the framework in response headers.
  poweredByHeader: false,
  // Hide the on-screen dev indicator so it doesn't obscure fixed UI in QA shots.
  devIndicators: false,
  // Pin the workspace root to this project (a stray lockfile lives in $HOME).
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Permanent (301) redirects so old inbound links keep their SEO equity and
  // visitors never hit a dead page after the WordPress cutover.
  async redirects() {
    return [
      // Renamed pages
      { source: "/frequently-asked-questions", destination: "/faqs", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/appointments", destination: "/contact-us", permanent: true },
      // Blog articles migrated from root-level URLs into /blog/[slug]
      ...MIGRATED_ARTICLES.map((slug) => ({
        source: `/${slug}`,
        destination: `/blog/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
