import { SITE, ACTIONS } from "@/lib/site";
import { Icon } from "@/components/icon";

/** Fixed bottom action bar on mobile — call + book always within thumb reach. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-hairline bg-white/95 p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
      <a
        href={SITE.phone.href}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-navy/20 font-bold text-navy transition-colors active:bg-sky"
      >
        <Icon name="PhoneCall" className="size-5 text-red" />
        Call Now
      </a>
      <a
        href={ACTIONS.book.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-red-600 font-bold text-white shadow-[var(--shadow-red)] active:translate-y-px"
      >
        <Icon name="CalendarCheck" className="size-5" />
        Book
      </a>
    </div>
  );
}
