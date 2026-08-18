import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { TeethDivider } from "@/components/teeth-divider";
import { CtaBand } from "@/components/cta-band";
import { TestimonialsSection } from "@/components/testimonials-section";
import { SITE } from "@/lib/site";
import { SERVICES, WELLNESS_CHECKLIST, EMERGENCY_SIGNS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Urgent care, wellness exams, vaccinations, diagnostics, surgery and dental care at Union Vet — comprehensive veterinary services in Oakland Gardens, Queens.",
  alternates: { canonical: "/our-services" },
  openGraph: { title: "Our Services · Union Vet", url: "/our-services" },
  twitter: { title: "Our Services · Union Vet" },
};

const SURGERY_POINTS = [
  {
    icon: "ShieldCheck" as const,
    title: "Pre-surgical screening",
    body: "Before any procedure we perform a thorough exam and pre-surgical blood screen to keep your pet safe under anesthesia.",
  },
  {
    icon: "HeartPulse" as const,
    title: "Pain management",
    body: "We recognize pain affects pets physically and emotionally, so comfort and monitoring are built into every surgery.",
  },
  {
    icon: "Clock" as const,
    title: "Careful recovery",
    body: "Recovery times vary — some pets stay overnight while others head home the same day, always with a clear care plan.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete pet care in Queens, from wellness to emergencies."
        intro="We are an animal hospital designed for you and your pet — from annual exams and vaccinations to treatment for stomach issues, wounds and true emergencies. Everything your companion needs, in one trusted place."
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Services", href: "/our-services" }]}
      />

      {/* Services grid */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Offer"
            eyebrowIcon="Stethoscope"
            title="A full range of veterinary services."
            intro="From preventive wellness to advanced diagnostics and surgery, our skilled team combines modern equipment with genuine compassion."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 80}>
                <ServiceCard service={service} href={`/our-services/${service.slug}`} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness deep-dive */}
      <section id="wellness-exam" className="scroll-mt-24 bg-sky py-20 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Wellness Care"
              eyebrowIcon="Stethoscope"
              title="A nose-to-tail exam, every visit."
              intro="Routine wellness care is the foundation of a long, healthy life. During a comprehensive exam our veterinarians check every system — catching small concerns before they become big ones."
            />
            <Cta href={SITE.phone.href} variant="secondary" size="md" icon="CalendarCheck" iconPosition="start" className="mt-8">
              Schedule a wellness exam
            </Cta>
          </div>
          <Reveal>
            <div className="rounded-2xl border border-white bg-white p-7 shadow-[var(--shadow-float)]">
              <h3 className="flex items-center gap-2 text-base font-bold text-navy">
                <Icon name="CheckCircle2" className="size-5 text-blue" />
                Your wellness exam includes
              </h3>
              <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {WELLNESS_CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-slate">
                    <Icon name="Check" className="mt-0.5 size-4 shrink-0 text-red" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Emergency deep-dive */}
      <section id="emergency" className="relative scroll-mt-24 overflow-hidden bg-navy-900 text-white">
        <TeethDivider color="var(--color-red)" orientation="down" height={18} className="absolute left-0 top-0" />
        <Image src="/images/vaccination-banner.png" alt="" fill sizes="100vw" className="object-cover opacity-20" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(15,25,34,0.96), rgba(15,25,34,0.8))" }}
        />
        <div className="container-x relative grid gap-10 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">
              <Icon name="Siren" className="size-4" strokeWidth={2.5} />
              Urgent & Emergency Care
            </span>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.05] tracking-[-0.02em]">
              When it can&apos;t wait, we&apos;re ready.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
              The easiest way to know whether to seek emergency care: if you feel your
              pet&apos;s condition is serious and cannot wait, it&apos;s time to call.
              We provide fast, same-day care for urgent injuries and illnesses.
            </p>
            <Cta href={SITE.phone.href} variant="primary" size="lg" icon="PhoneCall" iconPosition="start" className="mt-8">
              Emergency? Call {SITE.phone.display}
            </Cta>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
            <h3 className="flex items-center gap-2 text-base font-bold text-white">
              <Icon name="Cross" className="size-5 text-red" strokeWidth={2.75} />
              Seek emergency care if you notice:
            </h3>
            <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {EMERGENCY_SIGNS.map((sign) => (
                <li key={sign} className="flex items-start gap-2.5 text-sm text-white/80">
                  <Icon name="Check" className="mt-0.5 size-4 shrink-0 text-blue-100" strokeWidth={3} />
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Surgery */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Surgery"
            eyebrowIcon="HeartPulse"
            title="Safe, modern surgical care."
            intro="From routine spay and neuter to soft-tissue and orthopedic procedures, our surgical suite pairs advanced equipment with careful, continuous monitoring."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {SURGERY_POINTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-xl border border-hairline bg-white p-7 shadow-[var(--shadow-card)]">
                  <span className="mb-5 inline-flex size-13 items-center justify-center rounded-lg bg-navy text-white">
                    <Icon name={p.icon} className="size-6.5" />
                  </span>
                  <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Nutrition callout */}
          <div className="mt-16 overflow-hidden rounded-2xl border border-hairline bg-sky shadow-[var(--shadow-card)]">
            <div className="grid gap-8 p-8 md:grid-cols-[1.4fr_1fr] md:items-center md:p-12">
              <div>
                <span className="eyebrow">
                  <Icon name="Apple" className="size-4" strokeWidth={2.5} />
                  Nutritional Counseling
                </span>
                <h3 className="mt-4 font-display text-2xl leading-tight tracking-tight text-navy md:text-3xl">
                  The right nutrition, tailored to your pet.
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-slate">
                  Ensuring your furry friend gets proper nutrition and fresh, clean water
                  is key to their health and happiness. High-quality nutrition can truly
                  boost quality of life and longevity — we proudly offer a great selection
                  of Hill&apos;s and Royal Canin prescription foods and supplements tailored
                  to their needs.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                {["Hill's Prescription Diet", "Royal Canin", "Supplements", "Weight plans"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-white px-4 py-2.5 text-sm font-semibold text-navy">
                    <Icon name="Check" className="size-4 text-blue" strokeWidth={3} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection bg="sky" />

      <CtaBand
        title="Not sure which service you need?"
        body="Tell us what's going on and our Oakland Gardens team will point you in the right direction — book online or give us a call."
      />
    </>
  );
}
