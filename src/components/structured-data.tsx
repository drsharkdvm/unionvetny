import { SITE, WIDGETS } from "@/lib/site";
import { TESTIMONIALS } from "@/lib/content";

/**
 * LocalBusiness / VeterinaryCare structured data — emitted site-wide so search
 * engines and AI answer engines can surface NAP, hours, geo, map, reviews and
 * ratings reliably.
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      reviewCount: TESTIMONIALS.length,
    },
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.rating),
        bestRating: "5",
      },
      reviewBody: t.quote,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
