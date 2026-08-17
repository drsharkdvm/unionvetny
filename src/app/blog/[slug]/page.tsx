import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPost, POSTS, type PostBlock } from "@/lib/posts";
import { Icon } from "@/components/icon";
import { BlogCard } from "@/components/blog-card";
import { Cta } from "@/components/cta";
import { CtaBand } from "@/components/cta-band";
import { TeethDivider } from "@/components/teeth-divider";
import { SITE, ACTIONS } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE.url}/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.date,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [post.image] },
  };
}

/** Group blocks so consecutive list items render inside one <ul>. */
function group(blocks: PostBlock[]) {
  const out: Array<PostBlock | { t: "ul"; items: string[] }> = [];
  for (const b of blocks) {
    const prev = out[out.length - 1];
    if (b.t === "li") {
      if (prev && "items" in prev) prev.items.push(b.x);
      else out.push({ t: "ul", items: [b.x] });
    } else out.push(b);
  }
  return out;
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const groups = group(post.body);
  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/blog/${post.slug}` },
      headline: post.title,
      description: post.excerpt,
      image: `${SITE.url}${post.image}`,
      datePublished: post.date,
      dateModified: post.date,
      articleSection: post.category,
      author: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
      reviewedBy: {
        "@type": "Organization",
        name: SITE.name,
        url: `${SITE.url}/about-us`,
      },
      publisher: {
        "@type": "Organization",
        name: SITE.legalName,
        logo: { "@type": "ImageObject", url: `${SITE.url}/brand/union-vet-logo.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="grain absolute inset-0" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 120% at 100% 0%, rgba(5,136,201,0.3), transparent 55%), radial-gradient(70% 90% at 0% 100%, rgba(230,43,71,0.18), transparent 60%)",
          }}
        />
        <div className="container-x relative max-w-3xl py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-blue-100">Home</Link>
              </li>
              <li><Icon name="ChevronDown" className="size-3.5 -rotate-90 text-white/40" /></li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-blue-100">Blog</Link>
              </li>
              <li><Icon name="ChevronDown" className="size-3.5 -rotate-90 text-white/40" /></li>
              <li className="text-white/90">{post.category}</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-md bg-red px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.08] tracking-[-0.02em]">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <Icon name="PawPrint" className="size-4 text-blue-100" /> By the Union Vet team
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="Calendar" className="size-4 text-blue-100" /> {post.displayDate}
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="Clock" className="size-4 text-blue-100" /> {post.readingTime}
            </span>
          </div>
        </div>
        <TeethDivider color="var(--color-red)" orientation="up" height={14} className="absolute bottom-0 left-0" />
      </section>

      {/* Body */}
      <article className="bg-white py-14 md:py-16">
        <div className="container-x max-w-3xl">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl border border-hairline shadow-[var(--shadow-card)]">
            <Image src={post.image} alt={post.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          </div>

          <div className="prose-article">
            {groups.map((g, i) => {
              if (g.t === "ul") {
                return (
                  <ul key={i} className="my-5 space-y-2.5">
                    {g.items.map((item, j) => (
                      <li key={j} className="flex gap-3 leading-[1.75] text-slate">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-red" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (g.t === "h2")
                return (
                  <h2 key={i} className="mt-10 font-display text-2xl leading-tight tracking-tight text-navy md:text-[1.7rem]">
                    {g.x}
                  </h2>
                );
              if (g.t === "h3")
                return <h3 key={i} className="mt-8 text-lg font-bold text-navy">{g.x}</h3>;
              if (g.t === "h4")
                return <h4 key={i} className="mt-6 text-base font-bold text-navy">{g.x}</h4>;
              return <p key={i} className="mt-4 text-[1.05rem] leading-[1.8] text-slate">{g.x}</p>;
            })}
          </div>

          {/* E-E-A-T / author + inline CTA */}
          <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-hairline bg-sky p-7 sm:flex-row sm:items-center">
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
              <Icon name="ShieldCheck" className="size-7" />
            </span>
            <div className="flex-1">
              <p className="font-bold text-navy">
                Medically reviewed by the{" "}
                <Link href="/about-us" className="text-blue underline underline-offset-2 hover:text-blue-600">
                  Union Vet veterinary team
                </Link>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate">
                Our guides are written and reviewed by our veterinarians, Dr. Lara Cabugawan and
                Dr. Ramy Sharkawy. This is general education, not a substitute for an exam — if
                you&apos;re worried about your pet, our Oakland Gardens team is here for same-day and
                urgent visits.
              </p>
            </div>
            <Cta href={SITE.phone.href} variant="primary" size="md" icon="PhoneCall" iconPosition="start" className="shrink-0">
              Call the clinic
            </Cta>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-blue-600">
              <Icon name="ArrowRight" className="size-4 rotate-180" /> Back to all articles
            </Link>
            <Cta href={ACTIONS.book.href} external variant="outline" size="sm" icon="CalendarCheck" iconPosition="start">
              Book an appointment
            </Cta>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="bg-sky py-16 md:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl tracking-tight text-navy md:text-3xl">More pet health guides</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} className="h-full" />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Have a Question?"
        title="Concerned about your pet?"
        body="Reading up is a great start — but nothing replaces a real exam. Book an appointment or call our Oakland Gardens team."
      />
    </>
  );
}
