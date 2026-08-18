import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { CtaBand } from "@/components/cta-band";
import { VALUES, WHY_CHOOSE_US, TEAM } from "@/lib/content";
import { SITE } from "@/lib/site";

/** Stable @id for each vet so other pages (e.g. blog authorship) can reference them. */
const personId = (name: string) =>
  `${SITE.url}/about-us#${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

const teamJsonLd = TEAM.map((m) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId(m.name),
  name: m.name,
  jobTitle: m.role,
  description: m.bio,
  image: `${SITE.url}${m.image}`,
  url: `${SITE.url}/about-us`,
  worksFor: {
    "@type": "VeterinaryCare",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
  },
  knowsAbout: ["Veterinary medicine", "Pet surgery", "Emergency veterinary care"],
}));

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Union Vet team — a modern animal hospital in Oakland Gardens, Queens, pioneering accessible urgent care, led by Dr. Cabugawan & Dr. Sharkawy.",
  alternates: { canonical: "/about-us" },
  openGraph: { title: "About Us · Union Vet", url: "/about-us" },
  twitter: { title: "About Us · Union Vet" },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />
      <PageHero
        eyebrow="About Us"
        title="Pioneering compassionate, accessible pet care in Oakland Gardens, Queens."
        intro="We're pleased to enhance the relationship between people and their pets by pioneering innovative urgent-care solutions — because pets deserve accessible care beyond the emergency room or a traditional primary vet."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about-us" }]}
      />

      {/* Story */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-hairline shadow-[var(--shadow-float)]">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/kitten.jpg"
                  alt="A kitten cared for at Union Vet in Oakland Gardens"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 hidden items-center gap-3 rounded-xl border border-hairline bg-white p-4 shadow-[var(--shadow-float)] sm:flex">
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-red text-white">
                <Icon name="Heart" className="size-6" />
              </span>
              <p className="max-w-[12rem] text-xs font-semibold leading-snug text-navy">
                Treating every pet like one of our own.
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Who We Are"
              title="A modern animal hospital for the Queens community."
              intro="Union Vet is a team of compassionate veterinarians and staff dedicated to high-quality, personalized care for dogs, cats and all pets in Oakland Gardens."
            />
            <p className="mt-5 leading-relaxed text-slate">
              We believe pets need accessible care options beyond the emergency room or
              traditional primary care. That&apos;s why we&apos;ve expanded to offer
              comprehensive services — urgent care, wellness exams, vaccinations, surgical
              procedures, dental cleanings and international health certificates — all under
              one roof, delivered with warmth and honesty.
            </p>
            <Cta href="/our-services" variant="secondary" size="md" icon="ArrowRight" className="mt-8">
              Explore our services
            </Cta>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sky py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Values"
            eyebrowIcon="Heart"
            title="What we stand for."
            intro="Five commitments guide everything we do — from the front desk to the surgical suite."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.key} delay={(i % 3) * 80}>
                <div className="group flex h-full gap-4 rounded-xl border border-white bg-white p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-navy text-white transition-colors duration-300 group-hover:bg-blue">
                    <Icon name={value.icon} className="size-6" strokeWidth={2.25} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-navy">{value.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate">{value.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose Union Vet"
            eyebrowIcon="BadgeCheck"
            title="Reasons families trust us."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 80}>
                <div className="group h-full rounded-xl border border-hairline bg-white p-6 text-center shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className="mx-auto mb-5 inline-flex size-14 items-center justify-center rounded-xl bg-sky text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                    <Icon name={item.icon} className="size-7" strokeWidth={2.25} />
                  </span>
                  <h3 className="text-base font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-sky py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Meet the Team"
            eyebrowIcon="Users"
            title="The vets behind Union Vet."
            intro="Skilled, methodical and endlessly caring — our veterinarians bring decades of combined experience to every patient."
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="United Care"
        title="Your pet's care team is ready."
        body="Experience the Union Vet difference — book an appointment online or call our Oakland Gardens hospital today."
      />
    </>
  );
}
