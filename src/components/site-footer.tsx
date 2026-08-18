import Link from "next/link";
import { Logo } from "@/components/logo";
import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { TeethDivider } from "@/components/teeth-divider";
import { NAV, ACTIONS, SITE } from "@/lib/site";

const YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="relative mt-auto bg-navy text-white/85">
      <TeethDivider color="var(--color-red)" orientation="up" height={16} className="absolute -top-[15px] left-0" />
      <div className="grain absolute inset-0 overflow-hidden" />

      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo height={46} chip />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/80">
              A modern animal hospital in Oakland Gardens, Queens — compassionate,
              high-quality care that keeps your pet healthy at every stage of life.
            </p>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/75">
              Proudly serving Oakland Gardens, Bayside, Fresh Meadows, Queens Village
              and the greater Queens, NY area.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: "MapPin" as const, href: SITE.address.maps, label: "Find us on Google Maps" },
                { icon: "Mail" as const, href: `mailto:${SITE.email}`, label: "Email us" },
                { icon: "PhoneCall" as const, href: SITE.phone.href, label: "Call us" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  aria-label={s.label}
                  target={s.icon === "MapPin" ? "_blank" : undefined}
                  rel={s.icon === "MapPin" ? "noopener noreferrer" : undefined}
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-white/15 text-white/80 transition-colors hover:border-blue hover:bg-blue hover:text-white"
                >
                  <Icon name={s.icon} className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-blue-100"
                  >
                    <span className="h-px w-3 bg-white/25" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick actions */}
          <nav aria-label="Quick actions">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">
              Get Care
            </h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link href="/emergency-vet" className="inline-flex items-center gap-2 font-semibold text-white/90 transition-colors hover:text-blue-100">
                  <Icon name="Siren" className="size-4 text-red" /> Emergency Care
                </Link>
              </li>
              <li>
                <a href={ACTIONS.book.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-blue-100">
                  <Icon name="CalendarCheck" className="size-4 text-red" /> Book an Appointment
                </a>
              </li>
              <li>
                <a href={ACTIONS.pharmacy.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-blue-100">
                  <Icon name="Pill" className="size-4 text-red" /> Online Pharmacy
                </a>
              </li>
              <li>
                <Link href="/our-services" className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-blue-100">
                  <Icon name="Stethoscope" className="size-4 text-red" /> Our Services
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-blue-100">
                  <Icon name="MessageSquare" className="size-4 text-red" /> FAQs
                </Link>
              </li>
            </ul>
          </nav>

          {/* Visit us */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">
              Visit Us
            </h3>
            <ul className="mt-5 space-y-4 text-[15px]">
              <li className="flex gap-3">
                <Icon name="MapPin" className="mt-0.5 size-4.5 shrink-0 text-blue-100" />
                <a href={SITE.address.maps} target="_blank" rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-blue-100">
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="PhoneCall" className="mt-0.5 size-4.5 shrink-0 text-blue-100" />
                <a href={SITE.phone.href} className="text-white/80 transition-colors hover:text-blue-100">
                  {SITE.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="Clock" className="mt-0.5 size-4.5 shrink-0 text-blue-100" />
                <div className="text-white/80">
                  {SITE.hoursSummary.map((h) => (
                    <div key={h.label} className="flex justify-between gap-4">
                      <span>{h.label}</span>
                      <span className="tabular-nums text-white/90">{h.value}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
            <Cta href={SITE.phone.href} variant="primary" size="sm" icon="PhoneCall" iconPosition="start" className="mt-6">
              Call the Clinic
            </Cta>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-[13px] text-white/75 sm:flex-row">
          <p>© {YEAR} {SITE.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="transition-colors hover:text-white">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
