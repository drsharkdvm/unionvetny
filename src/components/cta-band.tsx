import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { TeethDivider } from "@/components/teeth-divider";
import { SITE, ACTIONS } from "@/lib/site";

/** Closing call-to-action band — navy, energetic, one primary red action. */
export function CtaBand({
  eyebrow = "Your Pet's Guardian",
  title = "Ready when your pet needs you.",
  body = "Book online in under a minute, or call our Oakland Gardens team — same-day and emergency visits welcome.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <TeethDivider color="var(--color-red)" orientation="down" height={18} className="absolute left-0 top-0" />
      <div className="grain absolute inset-0" />
      {/* speed-stripe glow */}
      <div
        aria-hidden
        className="absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-24 top-0 h-[320px] w-[320px] rounded-full bg-red/20 blur-3xl"
      />

      <div className="container-x relative flex flex-col items-center gap-8 py-16 text-center md:py-20">
        <span className="eyebrow text-red">
          <Icon name="PawPrint" className="size-4" strokeWidth={2.5} />
          {eyebrow}
        </span>
        <h2 className="max-w-3xl font-display text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.05] tracking-[-0.02em]">
          {title}
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-white/75">{body}</p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Cta href={ACTIONS.book.href} external variant="primary" size="lg" icon="CalendarCheck" iconPosition="start">
            Book an Appointment
          </Cta>
          <Cta href={SITE.phone.href} variant="outlineWhite" size="lg" icon="PhoneCall" iconPosition="start">
            {SITE.phone.display}
          </Cta>
        </div>
      </div>
    </section>
  );
}
