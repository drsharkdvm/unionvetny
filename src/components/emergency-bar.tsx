import { SITE } from "@/lib/site";
import { Icon } from "@/components/icon";

/** Slim top utility bar — keeps emergency phone, location and hours ever-present. */
export function EmergencyBar() {
  return (
    <div className="relative z-50 bg-navy text-white">
      <div className="container-x flex h-10 items-center justify-between gap-4 text-[13px]">
        <a
          href={SITE.phone.href}
          className="group inline-flex items-center gap-2 font-semibold"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.14em]">
            <Icon name="Siren" className="size-3.5" strokeWidth={2.5} />
            <span className="hidden xs:inline">Same-Day Emergency</span>
            <span className="xs:hidden">Emergency</span>
          </span>
          <span className="tabular-nums transition-colors group-hover:text-blue-100">
            {SITE.phone.display}
          </span>
        </a>

        <div className="hidden items-center gap-6 text-white/80 md:flex">
          <a
            href={SITE.address.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Icon name="MapPin" className="size-3.5 text-blue-100" />
            {SITE.address.full}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="Clock" className="size-3.5 text-blue-100" />
            Mon–Fri 8–8 · Sat 8–4
          </span>
        </div>
      </div>
    </div>
  );
}
