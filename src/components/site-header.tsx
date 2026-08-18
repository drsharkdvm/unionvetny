"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { NAV, ACTIONS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
      className={cn(
        "sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-shadow duration-300",
        scrolled ? "border-hairline shadow-[var(--shadow-card)]" : "border-transparent"
      )}
    >
      <div className="container-x flex h-18 items-center justify-between gap-4">
        <Logo height={44} priority />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive(item.href)}
              className={cn(
                "nav-underline text-[13px] font-bold uppercase tracking-[0.09em] transition-colors",
                isActive(item.href) ? "text-blue-600" : "text-navy hover:text-blue-600"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={SITE.phone.href}
            aria-label={`Call Union Vet at ${SITE.phone.display}`}
            className="hidden items-center gap-2 pr-1 text-sm font-bold text-navy transition-colors hover:text-red xl:inline-flex"
          >
            <Icon name="PhoneCall" className="size-4 text-red" />
            {SITE.phone.display}
          </a>
          <Cta href={ACTIONS.pharmacy.href} external variant="outline" size="sm" icon="Pill" iconPosition="start">
            Pharmacy
          </Cta>
          <Cta href={ACTIONS.book.href} external variant="primary" size="sm" icon="CalendarCheck" iconPosition="start">
            Book Appointment
          </Cta>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex size-11 items-center justify-center rounded-lg border-2 border-navy/15 text-navy transition-colors hover:bg-sky lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Icon name="Menu" className="size-6" />
        </button>
      </div>
      </header>

      {/* Mobile menu overlay — rendered OUTSIDE <header> so the header's
          backdrop-filter doesn't become the containing block for this fixed layer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        inert={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-navy-950/50 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-[var(--shadow-float)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex h-18 items-center justify-between border-b border-hairline px-5">
            <Logo height={38} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-11 items-center justify-center rounded-lg border-2 border-navy/15 text-navy transition-colors hover:bg-sky"
              aria-label="Close menu"
            >
              <Icon name="X" className="size-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-4 py-5" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                data-active={isActive(item.href)}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-3 text-base font-bold uppercase tracking-[0.06em] transition-colors",
                  isActive(item.href)
                    ? "bg-sky text-blue-600"
                    : "text-navy hover:bg-sky"
                )}
              >
                {item.label}
                <Icon name="ArrowRight" className="size-4 opacity-40" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 border-t border-hairline p-5">
            <Cta href={ACTIONS.book.href} external variant="primary" size="lg" icon="CalendarCheck" iconPosition="start" className="w-full">
              Book Appointment
            </Cta>
            <Cta href={ACTIONS.pharmacy.href} external variant="outline" size="lg" icon="Pill" iconPosition="start" className="w-full">
              Online Pharmacy
            </Cta>
            <a
              href={SITE.phone.href}
              className="mt-1 inline-flex items-center justify-center gap-2 text-sm font-bold text-navy"
            >
              <Icon name="PhoneCall" className="size-4 text-red" />
              {SITE.phone.display}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
