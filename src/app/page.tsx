import Image from "next/image";
import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { GoogleEmbed } from "@/components/google-embed";
import { TestimonialCard } from "@/components/testimonial-card";
import { BlogCard } from "@/components/blog-card";
import { Stars } from "@/components/stars";
import { TeethDivider } from "@/components/teeth-divider";
import { CtaBand } from "@/components/cta-band";
import { SITE, ACTIONS, WIDGETS } from "@/lib/site";
import {
  SERVICES,
  POSTS,
  WHY_CHOOSE_US,
  EMERGENCY_SIGNS,
  TESTIMONIALS,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Union Vet — Emergency & Wellness Vet in Oakland Gardens, Queens",
  description: SITE.description,
  alternates: { canonical: "/" },
};

const HERO_TRUST = [
  { icon: "Clock" as const, label: "Open late until 8 PM" },
  { icon: "Siren" as const, label: "Same-day emergencies" },
  { icon: "PawPrint" as const, label: "Dogs, cats & all pets" },
];

const STATS = [
  { value: "20+", label: "Years of combined experience" },
  { value: "8 PM", label: "Open late, Monday to Friday" },
  { value: "Same-day", label: "Urgent & emergency visits" },
  { value: "5.0★", label: "Loved by Queens pet parents" },
];

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="grain absolute inset-0" />
        {/* layered radial atmosphere */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 80% -10%, rgba(5,136,201,0.35), transparent 55%), radial-gradient(80% 70% at 0% 110%, rgba(230,43,71,0.22), transparent 60%)",
          }}
        />
        <div className="container-x relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          {/* Copy */}
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow text-red">
                <Icon name="MapPin" className="size-4" strokeWidth={2.5} />
                Oakland Gardens · Queens, NY
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,4.25rem)] leading-[0.98] tracking-[-0.03em]">
                Your Pet&apos;s Care
                <br />
                Team, <span className="text-red">United.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
                Union Vet is your trusted animal hospital in Queens — fast same-day
                emergency care plus wellness exams, vaccinations, surgery and advanced
                diagnostics for the pets you love.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Cta href={ACTIONS.book.href} external variant="primary" size="lg" icon="CalendarCheck" iconPosition="start">
                  Book an Appointment
                </Cta>
                <Cta href={SITE.phone.href} variant="outlineWhite" size="lg" icon="PhoneCall" iconPosition="start">
                  Call {SITE.phone.display}
                </Cta>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
                {HERO_TRUST.map((t) => (
                  <li key={t.label} className="inline-flex items-center gap-2 text-sm font-semibold text-white/85">
                    <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/10 text-blue-100">
                      <Icon name={t.icon} className="size-3.5" strokeWidth={2.5} />
                    </span>
                    {t.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={200} className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* speed-stripe wings behind the frame */}
              <div aria-hidden className="absolute -inset-4 -z-0">
                <div className="absolute right-6 top-8 h-2 w-40 -rotate-12 rounded-full bg-red/70" />
                <div className="absolute right-6 top-12 h-2 w-28 -rotate-12 rounded-full bg-blue/70" />
              </div>
              <div className="relative overflow-hidden rounded-[1.5rem] border-4 border-white/10 shadow-[var(--shadow-float)] ring-1 ring-white/10">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/cat-dog-bond.jpg"
                    alt="A cat and dog resting nose to nose — the bond Union Vet protects"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,25,34,0.55), rgba(15,25,34,0) 45%)",
                    }}
                  />
                </div>
              </div>

              {/* floating rating card */}
              <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-xl border border-hairline bg-white p-3.5 pr-5 shadow-[var(--shadow-float)] sm:-left-6">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-red text-white">
                  <Icon name="ShieldCheck" className="size-6" />
                </span>
                <span>
                  <Stars rating={5} className="mb-0.5" />
                  <span className="block text-xs font-semibold text-navy">
                    Trusted by Queens pet parents
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== STATS STRIP ===================== */}
      <section className="relative z-10 bg-white">
        <div className="container-x -mt-8 md:-mt-10">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline shadow-[var(--shadow-card)] lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white p-6 text-center sm:p-7">
                <div className="font-display text-3xl leading-none tracking-tight text-navy sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-[0.8rem] font-medium leading-snug text-mutegray">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WELCOME + SERVICES ===================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <SectionHeading
              eyebrow="Comprehensive Pet Care"
              title={<>Everything your pet needs,<br className="hidden sm:block" /> under one roof.</>}
              intro="From routine wellness and preventive care to advanced diagnostics, surgery and emergency treatment — our team keeps your companion healthy at every stage of life."
              className="max-w-2xl"
            />
            <Cta href="/our-services" variant="outline" size="md" icon="ArrowRight" className="hidden shrink-0 md:inline-flex">
              View all services
            </Cta>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 90}>
                <ServiceCard service={service} href={`/our-services/${service.slug}`} className="h-full" />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center md:hidden">
            <Cta href="/our-services" variant="outline" size="md" icon="ArrowRight">
              View all services
            </Cta>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT TEASER ===================== */}
      <section className="bg-sky py-20 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white shadow-[var(--shadow-float)]">
                <div className="relative aspect-[5/4]">
                  <Image
                    src="/images/pets-group.jpg"
                    alt="Cats and dogs of all shapes and sizes — the patients of Union Vet"
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
              {/* floating team badge */}
              <div className="absolute -bottom-6 right-4 hidden max-w-[15rem] items-center gap-3 rounded-xl border border-hairline bg-white p-4 shadow-[var(--shadow-float)] sm:flex">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
                  <Icon name="Users" className="size-5.5" />
                </span>
                <p className="text-xs font-semibold leading-snug text-navy">
                  A compassionate team of vets &amp; staff who treat your pet like family.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Who We Are"
              title="A modern animal hospital built around you and your pet."
              intro="Union Vet is a team of compassionate veterinarians and staff dedicated to high-quality, personalized care for dogs, cats and all pets in our Oakland Gardens community. We pioneer accessible urgent care — so help is here when you need it most."
            />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Quality veterinary medicine",
                "State-of-the-art hospital",
                "Convenient Queens location",
                "Transparent, honest pricing",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-navy">
                  <Icon name="CheckCircle2" className="size-5 shrink-0 text-blue" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Cta href="/about-us" variant="secondary" size="md" icon="ArrowRight">
                More about Union Vet
              </Cta>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Union Vet"
            title="Care you can count on."
            intro="Strength, reliability and genuine warmth — the reasons Queens families trust us with the pets they love."
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

      {/* ===================== GALLERY ===================== */}
      <section id="gallery" className="scroll-mt-24 bg-sky py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Gallery"
            eyebrowIcon="PawPrint"
            title="A look inside Union Vet."
            intro="Take a peek inside our Oakland Gardens hospital and meet a few of the happy patients we're proud to care for — photos straight from our Google profile."
            align="center"
            className="mx-auto"
          />
          <Reveal className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-hairline bg-white shadow-[var(--shadow-card)]">
              <GoogleEmbed variant="gallery" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== EMERGENCY (signature) ===================== */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <TeethDivider color="var(--color-red)" orientation="down" height={20} className="absolute left-0 top-0" />
        <Image
          src="/images/vaccination-banner.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(15,25,34,0.96) 0%, rgba(15,25,34,0.86) 45%, rgba(15,25,34,0.7) 100%)",
          }}
        />
        <div className="container-x relative grid gap-10 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow text-red">
              <Icon name="Siren" className="size-4" strokeWidth={2.5} />
              Emergency & Urgent Care
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] tracking-[-0.02em]">
              In an emergency, every minute counts.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
              As your trusted emergency vet in Oakland Gardens, we provide fast same-day
              care for urgent medical issues, injuries and illnesses. If it feels serious
              and can&apos;t wait — call us right away.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta href={SITE.phone.href} variant="primary" size="lg" icon="PhoneCall" iconPosition="start">
                Emergency? Call Now
              </Cta>
              <Cta href="/emergency-vet" variant="outlineWhite" size="lg" icon="ArrowRight">
                Emergency care info
              </Cta>
            </div>
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

      {/* ===================== TESTIMONIALS (crawlable) ===================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <div className="flex flex-col items-center gap-4 text-center">
            <SectionHeading
              eyebrow="Kind Words"
              eyebrowIcon="Star"
              title="Loved by Queens pet parents."
              align="center"
            />
            <div className="flex items-center gap-2 text-sm font-semibold text-navy">
              <Stars rating={5} />
              Rated 5.0 from {TESTIMONIALS.length}+ Google reviews
            </div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 4) * 80}>
                <TestimonialCard testimonial={t} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STRAIGHT FROM GOOGLE ===================== */}
      <section id="reviews" className="scroll-mt-24 bg-sky py-20 md:py-24">
        <div className="container-x">
          <div className="flex flex-col items-center gap-4 text-center">
            <SectionHeading
              eyebrow="Straight from Google"
              eyebrowIcon="Star"
              title="Real updates. Real reviews."
              intro="See the latest posts from our Google Business Profile and hear from Queens pet parents — straight from Google, updated in real time."
              align="center"
              className="mx-auto"
            />
            <div className="flex items-center gap-2 text-sm font-semibold text-navy">
              <Stars rating={5} />
              Rated 5.0 across Google reviews
            </div>
          </div>

          {/* Latest Google posts */}
          <Reveal className="mt-14">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h3 className="flex items-center gap-2.5 text-lg font-bold text-navy">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-navy text-white">
                  <Icon name="Calendar" className="size-5" />
                </span>
                Latest posts
              </h3>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-mutegray">
                <Icon name="PawPrint" className="size-3.5 text-blue" />
                From our Google profile
              </span>
            </div>
            <GoogleEmbed variant="posts" />
          </Reveal>

          {/* Google reviews */}
          <Reveal className="mt-16">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h3 className="flex items-center gap-2.5 text-lg font-bold text-navy">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-navy text-white">
                  <Icon name="Star" className="size-5" />
                </span>
                What pet parents say
              </h3>
              <Cta href={WIDGETS.googleProfile} external variant="outline" size="sm" icon="ArrowUpRight">
                Read all reviews
              </Cta>
            </div>
            <GoogleEmbed variant="reviews" />
          </Reveal>
        </div>
      </section>

      {/* ===================== BLOG TEASER ===================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <SectionHeading
              eyebrow="Pet Health Library"
              title="Tips & guides from our vets."
              intro="Practical, vet-written advice to help Queens pet owners make confident decisions."
              className="max-w-2xl"
            />
            <Cta href="/blog" variant="outline" size="md" icon="ArrowRight" className="hidden shrink-0 md:inline-flex">
              Visit the blog
            </Cta>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 90}>
                <BlogCard post={post} className="h-full" />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center md:hidden">
            <Cta href="/blog" variant="outline" size="md" icon="ArrowRight">
              Visit the blog
            </Cta>
          </div>
        </div>
      </section>

      {/* ===================== CLOSING CTA ===================== */}
      <CtaBand />
    </>
  );
}
