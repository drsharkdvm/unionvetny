import Link from "next/link";
import { Icon, type IconName } from "@/components/icon";
import { TeethDivider } from "@/components/teeth-divider";
import { SITE } from "@/lib/site";

interface Crumb {
  label: string;
  href?: string;
}

/** Interior page banner — navy, atmospheric, with breadcrumb + title. */
export function PageHero({
  eyebrow,
  eyebrowIcon = "PawPrint",
  title,
  intro,
  crumbs,
}: {
  eyebrow?: string;
  eyebrowIcon?: IconName;
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs: Crumb[];
}) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs
      .filter((c) => c.href)
      .map((c, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: c.label,
        item: `${SITE.url}${c.href === "/" ? "" : c.href}`,
      })),
  };

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="grain absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 120% at 100% 0%, rgba(5,136,201,0.32), transparent 55%), radial-gradient(70% 90% at 0% 100%, rgba(230,43,71,0.2), transparent 60%)",
        }}
      />
      <div className="container-x relative py-14 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/60">
            {crumbs.map((c, i) => (
              <li key={c.label} className="inline-flex items-center gap-2">
                {c.href && i < crumbs.length - 1 ? (
                  <Link href={c.href} className="transition-colors hover:text-blue-100">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <Icon name="ChevronDown" className="size-3.5 -rotate-90 text-white/40" />
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <span className="eyebrow text-red">
            <Icon name={eyebrowIcon} className="size-4" strokeWidth={2.5} />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.3rem,5vw,3.6rem)] leading-[1.03] tracking-[-0.02em]">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>
        )}
      </div>
      <TeethDivider color="var(--color-red)" orientation="up" height={14} className="absolute bottom-0 left-0" />
    </section>
  );
}
