import { SITE, WIDGETS } from "@/lib/site";

/**
 * LocalBusiness / VeterinaryCare structured data — emitted site-wide so search
 * engines and AI answer engines can surface NAP, hours, geo and map reliably.
 * (No aggregateRating/review here: self-declared ratings without verifiable,
 * on-page reviews violate Google's review-snippet policy — the real rating and
 * count come from the live Google Business Profile.)
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: "Union Vet NY",
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone.e164,
    email: SITE.email,
    image: [
      `${SITE.url}/og/og-default.png`,
      `${SITE.url}/images/vaccination-banner.png`,
    ],
    logo: `${SITE.url}/brand/union-vet-logo.png`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7431,
      longitude: -73.7573,
    },
    hasMap: SITE.address.maps,
    sameAs: [WIDGETS.googleProfile],
    areaServed: [
      "Oakland Gardens",
      "Bayside",
      "Fresh Meadows",
      "Queens Village",
      "Queens",
    ],
    knowsAbout: [
      "Veterinary emergency care",
      "Pet wellness exams",
      "Pet vaccinations",
      "Pet surgery",
      "Veterinary diagnostics",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
