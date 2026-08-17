import type { Metadata, Viewport } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { EmergencyBar } from "@/components/emergency-bar";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { StructuredData } from "@/components/structured-data";
import { SITE, GA_MEASUREMENT_ID } from "@/lib/site";

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
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <StructuredData />
        <EmergencyBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileCtaBar />
        {/* spacer so the fixed mobile bar never covers footer content */}
        <div aria-hidden className="h-[4.75rem] lg:hidden" />
      </body>
      {/* Google Analytics 4 — loaded only in production so local dev traffic
          isn't recorded in the clinic's analytics property. */}
      {process.env.NODE_ENV === "production" && GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
