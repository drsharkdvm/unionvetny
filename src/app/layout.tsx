import type { Metadata, Viewport } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import Script from "next/script";
import { DeferredGA } from "@/components/deferred-ga";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { EmergencyBar } from "@/components/emergency-bar";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { StructuredData } from "@/components/structured-data";
import { SITE, GA_MEASUREMENT_ID } from "@/lib/site";

// Google Tag Manager container ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-TW66J9K4";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
  display: "swap",
  // Display font (headings only) — don't preload it so the ~48KB woff2 doesn't
  // compete with the LCP hero image on slow mobile. swap + adjusted fallback
  // keeps CLS at ~0 while the web font streams in.
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Union Vet — Emergency & Wellness Vet in Oakland Gardens, Queens",
    template: "%s · Union Vet",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "veterinarian Queens",
    "emergency vet Oakland Gardens",
    "animal hospital Queens NY",
    "pet vaccinations",
    "pet surgery",
    "Union Vet",
  ],
  icons: {
    icon: [
      { url: "/brand/union-vet-favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/brand/union-vet-favicon.png", sizes: "512x512" }],
    shortcut: ["/brand/union-vet-favicon.png"],
  },
  openGraph: {
    type: "website",
    title: "Union Vet — Your Pet's Care Team, United",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    images: [
      {
        url: "/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "Union Vet — emergency & wellness animal hospital in Oakland Gardens, Queens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Union Vet — Your Pet's Care Team, United",
    description: SITE.description,
    images: ["/og/og-default.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1f2f42",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} h-full`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <StructuredData />
        <EmergencyBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileCtaBar />
        {/* spacer so the fixed mobile bar never covers footer content */}
        <div aria-hidden className="h-[4.75rem] lg:hidden" />
        {/* Vercel Web Analytics (privacy-friendly; active on Vercel deployments) */}
        <Analytics />
      </body>
      {/* Google Analytics 4 — loaded only in production so local dev traffic
          isn't recorded in the clinic's analytics property. */}
      {process.env.NODE_ENV === "production" && GA_MEASUREMENT_ID && (
        <DeferredGA gaId={GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
