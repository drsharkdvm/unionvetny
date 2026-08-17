import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

/**
 * Logo — the full-color Union Vet lockup.
 * `chip` wraps it on a white rounded surface for use on the navy footer,
 * keeping the brand colors legible without recoloring the mark.
 */
export function Logo({
  className,
  height = 44,
  chip = false,
  priority = false,
}: {
  className?: string;
  height?: number;
  chip?: boolean;
  priority?: boolean;
}) {
  const width = Math.round((height * 400) / 150);
  return (
    <Link
      href="/"
      aria-label={`${SITE.name} — home`}
      className={cn(
        "inline-flex items-center rounded-md transition duration-200 hover:opacity-90",
        chip && "bg-white px-3.5 py-2.5 shadow-[var(--shadow-card)]",
        className
      )}
    >
      <Image
        src="/brand/union-vet-logo.png"
        alt="Union Vet"
        width={width}
        height={height}
        priority={priority}
        style={{ height, width: "auto" }}
        className="select-none"
      />
    </Link>
  );
}
