# Union Vet — Website

A production-grade marketing site for **Union Vet**, a veterinary hospital in
Oakland Gardens, Queens. Built with the latest Next.js App Router, TypeScript,
Tailwind CSS v4 and shadcn/ui, following the Union Vet Brand Guidelines
(bold "sports-crest / emergency-response" identity — Union Navy, Guardian Red,
Response Blue, Archivo Black + Inter).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Tech stack

- **Next.js 16** (App Router, React Server Components by default)
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first tokens in `src/app/globals.css`)
- **shadcn/ui** + **Base UI** primitives, **lucide-react** icons
- Fonts via `next/font`: Archivo Black (display) + Inter (body)

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # shell: fonts, metadata, header/footer, JSON-LD
│   ├── page.tsx              # Home
│   ├── our-services/         # Our Services
│   ├── about-us/             # About Us (team, values)
│   ├── contact-us/           # Contact (form + map)
│   ├── blog/                 # Blog (latest 5 posts)
│   ├── faqs/                 # FAQs (accordion + FAQ schema)
│   ├── privacy/ · terms/     # Legal (template copy)
│   ├── sitemap.ts · robots.ts
│   └── globals.css           # brand design tokens
├── components/               # reusable UI (Cta, cards, header, footer, …)
│   └── ui/                   # shadcn components
└── lib/
    ├── site.ts               # business info, nav, external links
    └── content.ts            # services, team, testimonials, posts, FAQs
```

Content lives in `src/lib/site.ts` and `src/lib/content.ts` — edit those to
update copy, hours, services, team, testimonials, blog posts or FAQs.

## Notes for the client

- **Book an Appointment** and **Online Pharmacy** link out to the existing
  Nectar scheduling portal and Covetrus pharmacy (new tab), matching the live site.
- **FAQs** were written in the brand voice from real practice info — the live
  site's FAQ page had no published questions. Review/edit in `src/lib/content.ts`.
- **Blog** shows the 5 latest posts and links to the full articles on
  unionvetny.com. Update the list in `src/lib/content.ts`.
- The home page embeds the clinic's live localmarketingmanager.com widgets —
  a **Gallery** (photos) section plus a **"Straight from Google"** section
  (posts + reviews) — all auto-updating. URLs live in `WIDGETS` in
  `src/lib/site.ts`; framing in `src/components/google-embed.tsx`. The posts/reviews
  widgets aren't fully responsive, so those embeds pin a minimum width and swipe
  horizontally on small screens; the gallery widget is responsive on its own.
- **Imagery** was pulled from the live site into `public/images/`. Some photos may
  be licensed stock — swap in owned Union Vet photography before launch.
- **Contact form** is a self-contained demo (client-side validation + success
  state). Wire it to an email service or server action to receive submissions.
- **Legal pages** (Terms, Privacy) are migrated verbatim from unionvetny.com and
  stored in `src/lib/legal.ts`; only the staging-domain support email was corrected
  to `info@unionvetny.com`. Have counsel confirm before launch.
- **Team bios** (About Us) are the exact bios from unionvetny.com. Doctor photos use
  `object-contain` on a soft backdrop so the portrait and landscape source photos
  both show in full without stretching (`src/components/team-card.tsx`).
- **Google Analytics 4** (`G-QJTGCWL7D4`) is wired via `@next/third-parties`
  in `src/app/layout.tsx`. It loads **only in production builds** so local dev
  traffic isn't recorded. Override the ID with the `NEXT_PUBLIC_GA_ID` env var
  (see `.env.example`). Verify with `npm run build && npm start`.
- **SEO.** Structured data (VeterinaryCare + AggregateRating/Review + Breadcrumb +
  FAQPage + Service + BlogPosting + Person), a branded OG image (`public/og/`),
  `llms.txt`, security headers + CSP and old-URL 301s all live in `next.config.ts`,
  `src/app/layout.tsx`, `src/components/structured-data.tsx` and the page files.
  The 5 blog articles and 12 services are internal SSG pages. After each deploy,
  run `node scripts/indexnow.mjs` to ping IndexNow (key file in `public/`).
- **Still needs the client's GBP data:** real Facebook/Instagram/GBP profile URLs
  (for `sameAs` + footer icons), the Google Place-ID (for `hasMap`/directions
  deep-links), exact lat/long (geo precision), and the true Google review count
  (the schema `aggregateRating` currently reflects the 4 on-page testimonials).
- Brand source files live in `brand_assets/`.
