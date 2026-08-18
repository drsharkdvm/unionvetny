/**
 * Union Vet — central site configuration.
 * Single source of truth for business info, navigation and external links.
 */

export interface NavItem {
  label: string;
  href: string;
  /** external links open in a new tab */
  external?: boolean;
}

export interface DayHours {
  day: string;
  hours: string;
  closed?: boolean;
}

const PHONE_DISPLAY = "(718) 301-4030";
const PHONE_E164 = "+17183014030";

// Typed as DayHours[] so `closed` stays an available (optional) field even when
// no day is currently closed — set `closed: true` on a day to grey it out.
const HOURS: DayHours[] = [
  { day: "Monday", hours: "9 AM – 8 PM" },
  { day: "Tuesday", hours: "9 AM – 8 PM" },
  { day: "Wednesday", hours: "9 AM – 8 PM" },
  { day: "Thursday", hours: "9 AM – 8 PM" },
  { day: "Friday", hours: "9 AM – 8 PM" },
  { day: "Saturday", hours: "10 AM – 6 PM" },
  { day: "Sunday", hours: "10 AM – 6 PM" },
];

export const SITE = {
  name: "Union Vet",
  // Official / Google Business Profile name. "Union Vet NY" is kept only as an
  // alternateName in structured data (it's the domain-based variant).
  legalName: "Union Vet",
  tagline: "Your Pet's Care Team, United.",
  description:
    "Union Vet is a modern animal hospital in Oakland Gardens, Queens — same-day emergency care, wellness exams, vaccinations, surgery & diagnostics for pets.",
  url: "https://unionvetny.com",

  phone: { display: PHONE_DISPLAY, href: `tel:${PHONE_E164}`, e164: PHONE_E164 },
  email: "info@unionvetny.com",

  address: {
    street: "222-10 Union Tpke",
    city: "Oakland Gardens",
    region: "NY",
    postal: "11364",
    full: "222-10 Union Tpke, Oakland Gardens, NY 11364",
    maps: "https://www.google.com/maps/search/?api=1&query=222-10+Union+Tpke+Oakland+Gardens+NY+11364",
    embed:
      "https://www.google.com/maps?q=222-10+Union+Tpke,+Oakland+Gardens,+NY+11364&output=embed",
  },

  hours: HOURS,

  hoursSummary: [
    { label: "Mon – Fri", value: "9 AM – 8 PM" },
    { label: "Sat – Sun", value: "10 AM – 6 PM" },
  ],
} as const;

/** External destinations (open in a new tab). */
export const EXTERNAL = {
  booking: "https://unionvet.app.prod.nectar.vet/client-portal/schedule",
  pharmacy: "https://unionvetny.covetruspharmacy.com",
} as const;

/**
 * Live Google Business Profile widgets (embedded via iframe), served by the
 * clinic's localmarketingmanager.com account. These auto-update with new
 * Google posts and reviews.
 */
export const WIDGETS = {
  googlePosts:
    "https://www.localmarketingmanager.com/api/local-posts/unionvetny-local-posts-widget",
  googleReviews:
    "https://www.localmarketingmanager.com/api/reviews/unionvetny-review-widget?pageSize=4",
  gallery:
    "https://www.localmarketingmanager.com/api/images/unionvetny-image-widget",
  /** Public Google profile for "read all reviews" / "follow us" links. */
  googleProfile:
    "https://www.google.com/maps/search/?api=1&query=Union+Vet+NY+Oakland+Gardens",
} as const;

/**
 * Google Analytics 4 measurement ID. Public by design (it appears in the
 * client HTML), so it's safe to commit; override per-environment with the
 * NEXT_PUBLIC_GA_ID env var if needed.
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? "G-QJTGCWL7D4";

/** Primary navigation shown in the header + footer. */
export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/our-services" },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact-us" },
];

/** Utility / action links (external booking + pharmacy). */
export const ACTIONS = {
  book: { label: "Book an Appointment", href: EXTERNAL.booking, external: true },
  pharmacy: { label: "Online Pharmacy", href: EXTERNAL.pharmacy, external: true },
} as const;
