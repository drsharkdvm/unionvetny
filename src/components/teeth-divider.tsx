import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * TeethDivider — the badge's jagged "teeth" edge, reused as a section divider
 * per the brand guidelines. Tiles fixed-size triangles across the full width
 * so teeth stay crisp at any viewport size.
 */
export function TeethDivider({
  className,
  color = "var(--color-red)",
  height = 22,
  toothWidth = 34,
  orientation = "down",
}: {
  className?: string;
  color?: string;
  height?: number;
  toothWidth?: number;
  orientation?: "up" | "down";
}) {
  const id = useId().replace(/:/g, "");
  const points =
    orientation === "down"
      ? `0,0 ${toothWidth / 2},${height} ${toothWidth},0`
      : `0,${height} ${toothWidth / 2},0 ${toothWidth},${height}`;

  return (
    <div
      className={cn("pointer-events-none w-full leading-[0]", className)}
      aria-hidden
    >
      <svg
        width="100%"
        height={height}
        role="presentation"
        className="block"
        style={{ height }}
      >
        <defs>
          <pattern
            id={`teeth-${id}`}
            width={toothWidth}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            <polygon points={points} fill={color} />
          </pattern>
        </defs>
        <rect width="100%" height={height} fill={`url(#teeth-${id})`} />
      </svg>
    </div>
  );
}
