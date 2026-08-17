import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import { TeethDivider } from "@/components/teeth-divider";
import { SITE } from "@/lib/site";
import { EMERGENCY_SIGNS, TEAM } from "@/lib/content";

export const metadata: Metadata = {
  title: "Emergency Vet in Oakland Gardens, Queens",
  description:
    "Pet emergency? Union Vet provides fast, experienced same-day emergency & urgent veterinary care in Oakland Gardens, Queens. Call (718) 301-4030 or come in right away.",
  alternates: { canonical: "/emergency-vet" },
  openGraph: {
    type: "website",
    title: "Emergency Vet in Oakland Gardens, Queens — Union Vet",
    description:
      "Fast, experienced same-day emergency and urgent care for dogs, cats and all pets in Queens. Call (718) 301-4030 or come in right away.",
    url: `${SITE.url}/emergency-vet`,
    images: [{ url: "/og/og-default.png", width: 1200, height: 630, alt: "Union Vet — emergency vet in Oakland Gardens, Queens" }],
  },
};

const STEPS = [
  {
    icon: "PhoneCall" as const,
    title: "Call ahead",
    body: "Phone (718) 301-4030 on your way in so our team can prepare for your arrival and advise you right away.",
  },
  {
    icon: "Siren" as const,
    title: "Rapid triage",
    body: "The moment you arrive, we assess your pet immediately — the most critical cases are always seen first.",
  },
  {
    icon: "Microscope" as const,
    title: "Exam & diagnostics",
    body: "Your veterinarian examines your pet and uses our in-house lab and imaging (digital X-ray, ultrasound) for fast, accurate answers.",
  },
  {
    icon: "HeartPulse" as const,
    title: "Treatment & stabilization",
    body: "We stabilize your pet, manage pain, and begin treatment — explaining each step and your options before we act.",
  },
  {
    icon: "CheckCircle2" as const,
    title: "Clear updates & next steps",
    body: "You'll get straight answers and a plan, whether that's continued care with us or a referral for overnight monitoring.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Emergency veterinary care",
    name: "Emergency & Urgent Veterinary Care — Union Vet",
    description:
      "Fast same-day emergency and urgent care for dogs, cats and all pets in Oakland Gardens, Queens.",
    url: `${SITE.url}/emergency-vet`,
    provider: { "@type": "VeterinaryCare", "@id": `${SITE.url}/#business`, name: SITE.name },
    areaServed: ["Oakland Gardens", "Bayside", "Fresh Meadows", "Queens Village", "Queens"],
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: { "@type": "ContactPoint", telephone: SITE.phone.e164, contactType: "emergency" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Emergency Vet", item: `${SITE.url}/emergency-vet` },
    ],
  },
];

export default function EmergencyVetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Image
          src="/images/vaccination-banner.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(15,25,34,0.95) 0%, rgba(15,25,34,0.88) 45%, rgba(15,25,34,0.72) 100%), radial-gradient(70% 90% at 100% 0%, rgba(230,43,71,0.28), transparent 55%)",
          }}
        />
        <div className="grain absolute inset-0" />
        <div className="container-x relative py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-semibold text-white/55">
              <li><Link href="/" className="transition-colors hover:text-blue-100">Home</Link></li>
              <li><Icon name="ChevronDown" className="size-3.5 -rotate-90 text-white/40" /></li>
              <li className="text-white/90">Emergency Vet</li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow text-red">
                <Icon name="Siren" className="size-4" strokeWidth={2.5} />
                Same-Day Emergency Care · Oakland Gardens, Queens
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.03em]">
                Pet Emergency? <span className="text-red">We&apos;re Here for You.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                Fast, experienced emergency veterinary care in Queens. Call us now or come in right away.
              </p>
            </Reveal>

            {/* Large, prominent phone number */}
            <Reveal delay={220}>
              <a
                href={SITE.phone.href}
                className="group mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 pr-7 backdrop-blur-sm transition-colors hover:border-red hover:bg-white/10"
              >
                <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-xl bg-red text-white shadow-[var(--shadow-red)]">
                  <Icon name="PhoneCall" className="size-7" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                    Call us right away
                  </span>
                  <span className="block font-display text-4xl leading-none tracking-tight text-white sm:text-5xl">
                    {SITE.phone.display}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Cta href={SITE.phone.href} variant="primary" size="lg" icon="PhoneCall" iconPosition="start">
                  Call Now
                </Cta>
                <Cta href={SITE.address.maps} external variant="outlineWhite" size="lg" icon="MapPin" iconPosition="start">
                  Get Directions
                </Cta>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <p className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-white/80">
                <span className="inline-flex items-center gap-2">
                  <Icon name="Clock" className="size-4 text-blue-100" /> Open late until 8 PM (Mon–Fri)
                </span>
                <span className="inline-flex items-center gap-2">
                  <Icon name="PawPrint" className="size-4 text-blue-100" /> Dogs, cats &amp; all pets
                </span>
              </p>
            </Reveal>
          </div>
        </div>
        <TeethDivider color="var(--color-red)" orientation="up" height={16} className="absolute bottom-0 left-0" />
      </section>

      {/* ===================== WHEN TO SEEK EMERGENCY CARE ===================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Don't Wait"
            eyebrowIcon="Cross"
            title="When to seek emergency care"
            intro="Trust your instincts — if your pet's condition feels serious and can't wait, call us right away. Seek emergency care immediately if you notice any of these signs:"
            className="max-w-3xl"
          />
          <div className="mt-10 rounded-2xl border border-red-100 bg-red-50 p-7 sm:p-9">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {EMERGENCY_SIGNS.map((sign) => (
                <li key={sign} className="flex items-start gap-3 text-[0.98rem] font-medium text-navy">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-red text-white">
                    <Icon name="Cross" className="size-3.5" strokeWidth={3} />
                  </span>
                  {sign}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col items-start gap-4 border-t border-red-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-navy">
                Not sure? When in doubt, call us — we&apos;ll help you decide what to do next.
              </p>
              <Cta href={SITE.phone.href} variant="primary" size="md" icon="PhoneCall" iconPosition="start" className="shrink-0">
                Call {SITE.phone.display}
              </Cta>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHAT TO EXPECT ===================== */}
      <section className="bg-sky py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What to Expect"
            eyebrowIcon="ShieldCheck"
            title="What happens when you arrive"
            intro="An emergency is stressful enough. Here's exactly how our team handles urgent cases so you know what to expect."
            className="max-w-3xl"
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={(i % 5) * 70}>
                <li className="relative h-full rounded-xl border border-white bg-white p-6 shadow-[var(--shadow-card)]">
                  <span className="absolute right-5 top-5 font-display text-3xl leading-none text-sky-200">
                    {i + 1}
                  </span>
                  <span className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-navy text-white">
                    <Icon name={step.icon} className="size-6" strokeWidth={2.25} />
                  </span>
                  <h3 className="text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ===================== OUR EMERGENCY TEAM ===================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our Emergency Team"
              eyebrowIcon="Users"
              title="Experienced hands when it matters most"
              intro="When it's urgent, experience counts. Emergency and urgent cases at Union Vet are handled by our veterinarians — with decades of combined experience in internal medicine, surgery and advanced imaging — supported by a compassionate team that treats your pet like their own."
            />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Rapid triage & stabilization",
                "In-house labs & imaging",
                "Surgery & advanced diagnostics",
                "Pain management & monitoring",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-navy">
                  <Icon name="CheckCircle2" className="size-5 shrink-0 text-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 90}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== LOCATION, HOURS & CONTACT ===================== */}
      <section className="bg-sky py-20 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Find Us Fast"
              eyebrowIcon="MapPin"
              title="Location, hours & contact"
            />
            <div className="mt-8 space-y-4">
              <a
                href={SITE.address.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-hairline bg-white p-5 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-0.5 hover:border-blue/40"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-navy text-white transition-colors group-hover:bg-red">
                  <Icon name="MapPin" className="size-5.5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-mutegray">Address</span>
                  <span className="block text-base font-semibold text-navy">{SITE.address.full}</span>
                </span>
              </a>
              <a
                href={SITE.phone.href}
                className="group flex items-center gap-4 rounded-xl border border-hairline bg-white p-5 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-0.5 hover:border-blue/40"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-red text-white">
                  <Icon name="PhoneCall" className="size-5.5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-mutegray">Call or text</span>
                  <span className="block text-base font-semibold text-navy">{SITE.phone.display}</span>
                </span>
              </a>
            </div>

            {/* Hours */}
            <div className="mt-6 overflow-hidden rounded-xl border border-hairline bg-white shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-2 border-b border-hairline px-5 py-4">
                <Icon name="Clock" className="size-5 text-blue" />
                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-navy">Hours</h3>
              </div>
              <ul className="divide-y divide-hairline px-5">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="font-medium text-navy">{h.day}</span>
                    <span className={h.closed ? "font-semibold text-red" : "tabular-nums text-slate"}>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Honest after-hours note */}
            <p className="mt-6 flex gap-3 rounded-xl border border-blue-100 bg-white p-5 text-sm leading-relaxed text-slate">
              <Icon name="Siren" className="mt-0.5 size-5 shrink-0 text-red" />
              <span>
                <strong className="font-semibold text-navy">After hours?</strong> Union Vet offers same-day
                urgent and emergency care during our open hours — we&apos;re a full-service hospital, not a
                24-hour facility. For an emergency outside these hours, call{" "}
                <a href={SITE.phone.href} className="font-semibold text-blue underline underline-offset-2">{SITE.phone.display}</a>{" "}
                for guidance or go to the nearest 24-hour emergency animal hospital.
              </span>
            </p>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-hairline bg-white shadow-[var(--shadow-card)]">
            <div className="flex flex-col gap-3 border-b border-hairline px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-2.5 text-sm font-semibold text-navy">
                <Icon name="MapPin" className="size-5 text-red" />
                {SITE.address.full}
              </p>
              <Cta href={SITE.address.maps} external variant="outline" size="sm" icon="ArrowUpRight">
                Get directions
              </Cta>
            </div>
            <div className="relative min-h-[360px] bg-sky">
              <iframe
                title="Union Vet emergency location — 222-10 Union Tpke, Oakland Gardens, NY 11364"
                src={SITE.address.embed}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 block size-full grayscale-[0.12]"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FINAL STRONG CTA ===================== */}
      <section className="relative overflow-hidden bg-navy text-white">
        <TeethDivider color="var(--color-red)" orientation="down" height={18} className="absolute left-0 top-0" />
        <div className="grain absolute inset-0" />
        <div
          aria-hidden
          className="absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-red/25 blur-3xl"
        />
        <div className="container-x relative flex flex-col items-center gap-8 py-16 text-center md:py-20">
          <span className="eyebrow text-red">
            <Icon name="Siren" className="size-4" strokeWidth={2.5} />
            Every Second Counts
          </span>
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.05] tracking-[-0.02em]">
            Your pet needs help? Call us now.
          </h2>
          <a href={SITE.phone.href} className="font-display text-4xl tracking-tight text-white transition-colors hover:text-blue-100 sm:text-5xl">
            {SITE.phone.display}
          </a>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Cta href={SITE.phone.href} variant="primary" size="lg" icon="PhoneCall" iconPosition="start">
              Call Now
            </Cta>
            <Cta href={SITE.address.maps} external variant="outlineWhite" size="lg" icon="MapPin" iconPosition="start">
              Get Directions
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
