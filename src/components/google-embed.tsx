"use client";

import { useState } from "react";
import { WIDGETS } from "@/lib/site";
import { cn } from "@/lib/utils";

type Variant = "posts" | "reviews" | "gallery";

const CONFIG: Record<
  Variant,
  { src: string; title: string; height: string; minWidth: string }
> = {
  posts: {
    src: WIDGETS.googlePosts,
    title: "Latest Google posts from Union Vet",
    height: "h-[560px]",
    // keep the 3-column layout (>600px) so it never collapses to a tall,
    // internally-scrolling stack on mobile — users swipe horizontally instead
    minWidth: "min-w-[760px]",
  },
  reviews: {
    src: WIDGETS.googleReviews,
    title: "Google reviews for Union Vet",
    height: "h-[340px]",
    minWidth: "min-w-[900px]",
  },
  gallery: {
    src: WIDGETS.gallery,
    title: "Photo gallery of Union Vet",
    height: "h-[420px]",
    // this widget is responsive (grid auto-fits), so no minimum width is needed
    minWidth: "",
  },
};

/**
 * GoogleEmbed — frames a live localmarketingmanager.com widget (Google posts or
 * reviews) inside the brand design. The widgets aren't fully responsive and
 * don't post a resize message, so we pin a comfortable minimum width and let the
 * wrapper scroll horizontally on small screens (swipe), keeping cards readable.
 */
export function GoogleEmbed({
  variant,
  className,
}: {
  variant: Variant;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const { src, title, height, minWidth } = CONFIG[variant];

  return (
    <div
      className={cn(
        "relative w-full overflow-x-auto overflow-y-hidden rounded-2xl [-webkit-overflow-scrolling:touch]",
        className
      )}
    >
      {!loaded && (
        <div
          className={cn("absolute inset-0 animate-pulse rounded-2xl bg-white/60", height)}
          aria-hidden
        />
      )}
      <iframe
        src={src}
        title={title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={cn("block w-full rounded-2xl", height, minWidth)}
        style={{ border: 0, colorScheme: "light" }}
      />
    </div>
  );
}
