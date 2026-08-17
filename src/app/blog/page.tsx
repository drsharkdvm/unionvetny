import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BlogCard } from "@/components/blog-card";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { CtaBand } from "@/components/cta-band";
import { POSTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "The Union Vet pet health library — practical, vet-written guides on dog and cat health, nutrition, safety and preventive care for Queens pet owners.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <PageHero
        eyebrow="Pet Health Library"
        title="Tips & guides from our vets."
        intro="Practical, vet-written advice to help Queens pet owners spot problems early and make confident decisions for the pets they love."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          {/* Featured */}
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              <BlogCard post={featured} featured />
            </div>
          </Reveal>

          {/* The rest */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 4) * 80}>
                <BlogCard post={post} className="h-full" />
              </Reveal>
            ))}
          </div>

          <p className="mt-14 flex items-center justify-center gap-2 text-center text-sm text-mutegray">
            <Icon name="PawPrint" className="size-4 text-blue" />
            New guides are published regularly — check back soon for more pet health tips.
          </p>
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
