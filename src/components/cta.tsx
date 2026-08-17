import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/icon";

/**
 * Cta — the site's primary call-to-action button.
 * Renders a Next <Link> for internal routes, an <a> for external links,
 * or a <button> when given an onClick. Bold, geometric, brand-colored.
 */
export const ctaVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 font-bold whitespace-nowrap rounded-lg transition duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60 active:translate-y-0",
  {
    variants: {
      variant: {
        primary:
          "bg-red text-white shadow-[var(--shadow-red)] hover:bg-red-600 hover:-translate-y-0.5",
        secondary:
          "bg-blue text-white shadow-[var(--shadow-blue)] hover:bg-blue-600 hover:-translate-y-0.5",
        outline:
          "border-2 border-navy/25 text-navy bg-white hover:border-navy hover:bg-navy hover:text-white",
        outlineWhite:
          "border-2 border-white/40 text-white hover:bg-white hover:text-navy",
        white: "bg-white text-navy shadow-[var(--shadow-card)] hover:bg-sky hover:-translate-y-0.5",
        ghost: "text-navy hover:bg-sky",
      },
      size: {
        md: "h-11 px-5 text-sm",
        lg: "h-[3.25rem] px-7 text-base",
        sm: "h-9 px-4 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type BaseProps = VariantProps<typeof ctaVariants> & {
  children: React.ReactNode;
  className?: string;
  icon?: IconName;
  iconPosition?: "start" | "end";
};

type CtaProps =
  | (BaseProps & { href: string; external?: boolean; onClick?: never; type?: never })
  | (BaseProps & { href?: never; external?: never; onClick?: () => void; type?: "button" | "submit" });

export function Cta({
  children,
  className,
  variant,
  size,
  icon,
  iconPosition = "end",
  ...props
}: CtaProps) {
  const classes = cn(ctaVariants({ variant, size }), className);
  const inner = (
    <>
      {icon && iconPosition === "start" && (
        <Icon name={icon} className="size-[1.15em] shrink-0" />
      )}
      <span>{children}</span>
      {icon && iconPosition === "end" && (
        <Icon
          name={icon}
          className="size-[1.15em] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {inner}
    </button>
  );
}
