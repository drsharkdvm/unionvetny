import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { Stars } from "@/components/stars";
import { TESTIMONIALS } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Crawlable Google-review block, reused across the home, contact and services pages. */
export function TestimonialsSection({
  bg = "white",
  className,
}: {
  bg?: "white" | "sky";
  className?: string;
}) {
  return (
    <section className={cn(bg === "sky" ? "bg-sky" : "bg-white", "py-16 md:py-20", className)}>
      <div className="container-x">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionHeading
            eyebrow="Kind Words"
            eyebrowIcon="Star"
            title="Loved by Queens pet parents."
            align="center"
          />
          <div className="flex items-center gap-2 text-sm font-semibold text-navy">
            <Stars rating={5} />
            Rated 5.0 from {TESTIMONIALS.length}+ Google reviews
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} className="h-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
