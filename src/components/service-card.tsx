import Link from "next/link";
import { Icon } from "@/components/icon";
import type { Service } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * ServiceCard — white card with a shield-corner accent, chunky brand icon and
 * a hover lift. Optionally links to an in-page anchor on the services page.
 */
export function ServiceCard({
  service,
  href,
  id,
  className,
}: {
  service: Service;
  href?: string;
  id?: string;
  className?: string;
}) {
  const classes = cn(
    "group relative flex flex-col overflow-hidden rounded-xl border border-hairline bg-white p-6 shadow-[var(--shadow-card)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-blue/40 hover:shadow-[var(--shadow-float)]",
    id && "scroll-mt-28",
    className
  );

  const inner = (
    <>
      {/* shield-corner accent */}
      <span
        aria-hidden
        className="absolute right-0 top-0 h-14 w-14 bg-sky [clip-path:polygon(100%_0,0_0,100%_100%)] transition-colors duration-300 group-hover:bg-blue-100"
      />
      <span className="relative mb-5 inline-flex size-13 items-center justify-center rounded-lg bg-navy text-white shadow-[var(--shadow-card)] transition-colors duration-300 group-hover:bg-red">
        <Icon name={service.icon} className="size-6.5" strokeWidth={2.25} />
      </span>
      <h3 className="text-lg font-bold tracking-tight text-navy">{service.title}</h3>
      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate">{service.summary}</p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600">
          Learn more
          <Icon
            name="ArrowRight"
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} id={id} className={classes}>
        {inner}
      </Link>
    );
  }
  return (
    <div id={id} className={classes}>
      {inner}
    </div>
  );
}
