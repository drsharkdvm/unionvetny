import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { Icon } from "@/components/icon";
import { Cta } from "@/components/cta";
import { CtaBand } from "@/components/cta-band";
import { SITE, ACTIONS } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

const AREA = ["Oakland Gardens", "Bayside", "Fresh Meadows", "Queens Village", "Queens"];
const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.title} in Oakland Gardens, Queens`,
    description: s.summary,
    alternates: { canonical: `/our-services/${s.slug}` },
    openGraph: {
      type: "website",
      title: `${s.title} — Union Vet`,
      description: s.summary,
      url: `${SITE.url}/our-services/${s.slug}`,
      images: [{ url: "/og/og-default.png", width: 1200, height: 630, alt: `${s.title} — Union Vet` }],
    },
    twitter: { card: "summary_large_image", title: `${s.title} — Union Vet`, description: s.summary, images: ["/og/og-default.png"] },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 6);
  // Breadcrumb schema is emitted by <PageHero> from its `crumbs`, so only the
  // Service (+ FAQPage) objects are added here.
  const jsonLd: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: service.title,
      name: `${service.title} — Union Vet`,
      description: service.summary,
      url: `${SITE.url}/our-services/${service.slug}`,
      provider: { "@type": "VeterinaryCare", "@id": `${SITE.url}/#business`, name: SITE.name },
      areaServed: AREA,
    },
  ];
  if (service.faqs?.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="Our Services"
        eyebrowIcon={service.icon}
        title={`${service.title} in Oakland Gardens, Queens`}
        intro={service.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/our-services" },
          { label: service.title, href: `/our-services/${service.slug}` },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* Body copy */}
          <div>
            <span className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-navy text-white">
              <Icon name={service.icon} className="size-7" strokeWidth={2.25} />
            </span>
            {service.intro?.map((p, i) => (
              <p key={i} className="mt-4 text-[1.05rem] leading-[1.8] text-slate first:mt-0">
                {p}
              </p>
            ))}

            {service.whatToExpect && (
              <div className="mt-8">
                <h2 className="flex items-center gap-2 text-xl font-bold text-navy">
                  <Icon name="ShieldCheck" className="size-5 text-blue" />
                  What to expect
                </h2>
                <p className="mt-3 text-[1.05rem] leading-[1.8] text-slate">{service.whatToExpect}</p>
              </div>
            )}

            {service.faqs && service.faqs.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display text-xl tracking-tight text-navy md:text-2xl">
                  Common questions
                </h2>
                <dl className="mt-5 space-y-4">
                  {service.faqs.map((f) => (
                    <div key={f.q} className="rounded-xl border border-hairline bg-white p-5 shadow-[var(--shadow-card)]">
                      <dt className="font-bold text-navy">{f.q}</dt>
                      <dd className="mt-2 text-[0.98rem] leading-relaxed text-slate">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          {/* What's included + CTA */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            {service.details && (
              <div className="rounded-2xl border border-hairline bg-white p-7 shadow-[var(--shadow-card)]">
                <h2 className="text-base font-bold text-navy">What&apos;s included</h2>
                <ul className="mt-5 space-y-3">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-[0.95rem] leading-snug text-slate">
                      <Icon name="Check" className="mt-0.5 size-4 shrink-0 text-red" strokeWidth={3} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-hairline bg-navy p-7 text-white shadow-[var(--shadow-card)]">
              <p className="font-bold">Book {service.title.toLowerCase()}</p>
              <p className="text-sm leading-relaxed text-white/75">
                Same-day and urgent visits welcome — reach our Oakland Gardens team.
              </p>
              <Cta href={ACTIONS.book.href} external variant="primary" size="md" icon="CalendarCheck" iconPosition="start" className="w-full">
                Book an Appointment
              </Cta>
              <Cta href={SITE.phone.href} variant="outlineWhite" size="md" icon="PhoneCall" iconPosition="start" className="w-full">
                {SITE.phone.display}
              </Cta>
            </div>
          </aside>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-sky py-16 md:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl tracking-tight text-navy md:text-3xl">Explore more services</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <ServiceCard key={s.slug} service={s} href={`/our-services/${s.slug}`} className="h-full" />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
