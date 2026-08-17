import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/icon";

/** Eyebrow + heading + optional intro — the recurring section header pattern. */
export function SectionHeading({
  eyebrow,
  eyebrowIcon = "PawPrint",
  title,
  intro,
  align = "left",
  tone = "navy",
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  eyebrowIcon?: IconName;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "navy" | "white";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow mb-4", tone === "white" && "text-red")}>
          <Icon name={eyebrowIcon} className="size-4" strokeWidth={2.5} />
          {eyebrow}
        </span>
      )}
      <Heading
        className={cn(
          "font-display text-[clamp(1.9rem,4vw,2.9rem)] leading-[1.05] tracking-[-0.02em]",
          tone === "white" ? "text-white" : "text-navy"
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[1.05rem] leading-[1.7]",
            align === "center" && "mx-auto",
            tone === "white" ? "text-white/75" : "text-slate"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
