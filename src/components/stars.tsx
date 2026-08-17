import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export function Stars({ rating = 5, className }: { rating?: number; className?: string }) {
  return (
    <div
      className={cn("inline-flex items-center gap-0.5 text-red", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="Star"
          className={cn("size-4", i < rating ? "fill-red text-red" : "text-hairline")}
        />
      ))}
    </div>
  );
}
