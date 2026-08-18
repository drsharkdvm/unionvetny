import type { NextConfig } from "next";
import path from "node:path";

// Content-Security-Policy allowlisting exactly the third parties this site uses:
// Google Analytics/gtag, the localmarketingmanager.com GBP widgets, Google Fonts,
// and the Google Maps embed. 'unsafe-inline' is kept for scripts/styles because the
// pages are statically prerendered (nonce-based CSP would force dynamic rendering);
// the policy still adds frame-ancestors, object-src and source allowlisting.
const isDev = process.env.NODE_ENV !== "production";

// React's dev server (Fast Refresh, the error overlay, source-mapped callstacks)
// relies on eval(), and HMR opens a WebSocket back to the dev origin. Both are
// permitted in development ONLY — the production policy never allows 'unsafe-eval'.
const scriptSrc = [
  "script-src 'self' 'unsafe-inline'",
  isDev && "'unsafe-eval'",
  "https://www.googletagmanager.com https://www.google-analytics.com",
]
  .filter(Boolean)
  .join(" ");

const connectSrc = [
  "connect-src 'self'",
  isDev && "ws: wss:",
  "https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://analytics.google.com https://stats.g.doubleclick.net",
]
  .filter(Boolean)
  .join(" ");

const csp = [
  "default-src 'self'",
  scriptSrc,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: https:",
  "frame-src 'self' https://www.localmarketingmanager.com https://www.google.com https://maps.google.com",
  connectSrc,
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
  experimental: {
    // Inline the (small) CSS into the HTML <head> instead of a separate
    // render-blocking <link rel="stylesheet">, so first paint / LCP isn't
    // gated on an extra stylesheet round-trip on slow mobile connections.
    inlineCss: true,
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
