import { PageHero } from "@/components/page-hero";
import { Icon } from "@/components/icon";
import type { LegalBlock } from "@/lib/legal";
import { SITE } from "@/lib/site";

/** Turn URLs, emails and the clinic phone number into links within body text. */
function linkify(text: string): React.ReactNode {
  const regex =
    /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[\w.-]+|\+1\s*\(\d{3}\)\s*\d{3}-\d{4})/g;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  const cls = "font-medium text-blue-600 underline underline-offset-2 hover:text-blue-700";
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("http")) {
      nodes.push(
        <a key={key++} href={tok} target="_blank" rel="noopener noreferrer" className={cls}>
          {tok}
        </a>
      );
    } else if (tok.includes("@")) {
      nodes.push(
        <a key={key++} href={`mailto:${tok}`} className={cls}>
          {tok}
        </a>
      );
    } else {
      nodes.push(
        <a key={key++} href={SITE.phone.href} className={cls}>
          {tok}
        </a>
      );
    }
    last = m.index + tok.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** Group blocks so consecutive list items render inside a single <ul>. */
function group(blocks: LegalBlock[]) {
  const groups: Array<LegalBlock | { t: "ul"; items: string[] }> = [];
  for (const b of blocks) {
    const prev = groups[groups.length - 1];
    if (b.t === "li") {
      if (prev && "items" in prev) prev.items.push(b.x);
      else groups.push({ t: "ul", items: [b.x] });
    } else {
      groups.push(b);
    }
  }
  return groups;
}

export function LegalPage({
  title,
  updated,
  intro,
  crumbLabel,
  crumbHref,
  blocks,
}: {
  title: string;
  updated: string;
  intro: string;
  crumbLabel: string;
  crumbHref: string;
  blocks: LegalBlock[];
}) {
  const groups = group(blocks);
  return (
    <>
      <PageHero
        eyebrow="Legal"
        eyebrowIcon="ShieldCheck"
        title={title}
        intro={intro}
        crumbs={[{ label: "Home", href: "/" }, { label: crumbLabel, href: crumbHref }]}
      />
      <section className="bg-white py-16 md:py-20">
        <div className="container-x max-w-3xl">
          <p className="mb-10 inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-sky px-4 py-2.5 text-sm font-semibold text-navy">
            <Icon name="Clock" className="size-4 text-blue" />
            Last updated: {updated}
          </p>

          <div className="space-y-1">
            {groups.map((g, i) => {
              if (g.t === "ul") {
                return (
                  <ul key={i} className="my-4 space-y-2.5">
                    {g.items.map((item, j) => (
                      <li key={j} className="flex gap-3 leading-relaxed text-slate">
                        <Icon name="Check" className="mt-1 size-4 shrink-0 text-red" strokeWidth={3} />
                        <span>{linkify(item)}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (g.t === "h2") {
                return (
                  <h2 key={i} className="!mt-10 border-t border-hairline pt-8 font-display text-xl tracking-tight text-navy md:text-2xl">
                    {g.x}
                  </h2>
                );
              }
              if (g.t === "h3") {
                return (
                  <h3 key={i} className="!mt-7 text-lg font-bold text-navy">
                    {g.x}
                  </h3>
                );
              }
              if (g.t === "h4") {
                return (
                  <h4 key={i} className="!mt-6 text-base font-bold text-navy">
                    {g.x}
                  </h4>
                );
              }
              return (
                <p key={i} className="!mt-3 leading-relaxed text-slate">
                  {linkify(g.x)}
                </p>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
