import { Icon } from "@/components/icon";
import { Stars } from "@/components/stars";
import type { Testimonial } from "@/lib/content";
import { cn } from "@/lib/utils";

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const initials = testimonial.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <figure
      className={cn(
        "relative flex h-full flex-col rounded-xl border border-hairline bg-white p-7 shadow-[var(--shadow-card)]",
        className
      )}
    >
      <Icon
        name="MessageSquare"
        className="absolute right-6 top-6 size-8 text-sky-200"
        strokeWidth={2}
      />
      <Stars rating={testimonial.rating} />
      <blockquote className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-slate">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-hairline pt-5">
        <span className="inline-flex size-11 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
          {initials}
        </span>
        <span>
          <span className="block text-sm font-bold text-navy">{testimonial.name}</span>
          <span className="block text-xs text-mutegray">{testimonial.source}</span>
        </span>
      </figcaption>
    </figure>
  );
}
