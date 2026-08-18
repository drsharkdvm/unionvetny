import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Icon, type IconName } from "@/components/icon";
import { Cta } from "@/components/cta";
import { SITE, ACTIONS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Union Vet in Oakland Gardens, Queens — call (718) 301-4030, email info@unionvetny.com, or send a message. Open Mon–Fri 9–8, Sat–Sun 10–6.",
  alternates: { canonical: "/contact-us" },
  openGraph: { title: "Contact Us · Union Vet", url: "/contact-us" },
  twitter: { title: "Contact Us · Union Vet" },
};

const CONTACT_CARDS: { icon: IconName; label: string; value: string; href: string; external?: boolean }[] = [
  { icon: "MapPin", label: "Visit us", value: SITE.address.full, href: SITE.address.maps, external: true },
  { icon: "PhoneCall", label: "Call or text", value: SITE.phone.display, href: SITE.phone.href },
  { icon: "Mail", label: "Email us", value: SITE.email, href: `mailto:${SITE.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're here for you and your pet in Oakland Gardens."
        intro="Questions, appointments or urgent concerns — reach the Union Vet team however works best for you. We're on Union Turnpike in Oakland Gardens, Queens."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "/contact-us" }]}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* Details */}
          <div>
            <span className="eyebrow">
              <Icon name="PhoneCall" className="size-4" strokeWidth={2.5} />
              Get in touch
            </span>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.5rem)] leading-tight tracking-[-0.02em] text-navy">
              Reach the clinic directly.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate">
              Prefer to book instantly? Use online scheduling. For anything time-sensitive,
              calling is always fastest.
            </p>

            <div className="mt-8 space-y-4">
              {CONTACT_CARDS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-hairline bg-white p-5 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-[var(--shadow-float)]"
                >
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-navy text-white transition-colors duration-300 group-hover:bg-red">
                    <Icon name={c.icon} className="size-5.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-[0.12em] text-mutegray">
                      {c.label}
                    </span>
                    <span className="block truncate text-base font-semibold text-navy">{c.value}</span>
                  </span>
                  <Icon name="ArrowRight" className="ml-auto size-4 shrink-0 text-mutegray transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue" />
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="mt-6 overflow-hidden rounded-xl border border-hairline bg-sky shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-2 border-b border-blue-100 bg-white px-5 py-4">
                <Icon name="Clock" className="size-5 text-blue" />
                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-navy">Hours</h3>
              </div>
              <ul className="divide-y divide-blue-100/70 px-5">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="font-medium text-navy">{h.day}</span>
                    <span className={h.closed ? "font-semibold text-red-600" : "tabular-nums text-slate"}>
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Cta href={ACTIONS.book.href} external variant="primary" size="md" icon="CalendarCheck" iconPosition="start" className="flex-1">
                Book online
              </Cta>
              <Cta href={ACTIONS.pharmacy.href} external variant="outline" size="md" icon="Pill" iconPosition="start" className="flex-1">
                Online Pharmacy
              </Cta>
            </div>
          </div>

          {/* Form */}
          <div>
            <span className="eyebrow">
              <Icon name="Mail" className="size-4" strokeWidth={2.5} />
              Send a message
            </span>
            <h2 className="mb-6 mt-4 font-display text-[clamp(1.8rem,3.5vw,2.5rem)] leading-tight tracking-[-0.02em] text-navy">
              Drop us a note.
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <TestimonialsSection bg="sky" />

      {/* Map */}
      <section className="bg-sky pb-20 md:pb-24">
        <div className="container-x">
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
            <div className="relative bg-sky">
              <iframe
                title="Union Vet location map — 222-10 Union Tpke, Oakland Gardens, NY 11364"
                src={SITE.address.embed}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[0.12]"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
