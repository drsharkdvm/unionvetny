import Link from "next/link";
import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { SITE, NAV } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy text-white">
      <div className="grain absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 90% at 80% 0%, rgba(5,136,201,0.3), transparent 55%), radial-gradient(70% 70% at 0% 100%, rgba(230,43,71,0.2), transparent 60%)",
        }}
      />
      <div className="container-x relative flex flex-col items-center py-20 text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-red text-white shadow-[var(--shadow-red)]">
          <Icon name="PawPrint" className="size-8" />
        </span>
        <p className="mt-8 font-display text-[clamp(3.5rem,12vw,7rem)] leading-none tracking-[-0.03em] text-white/90">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl tracking-tight md:text-3xl">
          This page wandered off.
        </h1>
        <p className="mt-4 max-w-md text-white/70">
          The page you&apos;re looking for can&apos;t be found — but your pet&apos;s care team is
          still right here in Oakland Gardens.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Cta href="/" variant="primary" size="lg" icon="ArrowRight">
            Back to home
          </Cta>
          <Cta href={SITE.phone.href} variant="outlineWhite" size="lg" icon="PhoneCall" iconPosition="start">
            Call {SITE.phone.display}
          </Cta>
        </div>
        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
            Popular pages
          </p>
          <nav className="mt-4 flex flex-wrap justify-center gap-2.5" aria-label="Popular pages">
            {NAV.filter((n) => n.href !== "/").map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:border-blue hover:bg-blue hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
