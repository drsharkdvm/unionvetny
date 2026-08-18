import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import type { Post } from "@/lib/content";
import { cn } from "@/lib/utils";

export function BlogCard({
  post,
  className,
  featured = false,
}: {
  post: Post;
  className?: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-white shadow-[var(--shadow-card)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-float)]",
        featured && "sm:col-span-2 sm:flex-row",
        className
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] w-full overflow-hidden",
          featured && "sm:aspect-auto sm:w-1/2"
        )}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-md bg-navy px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs font-medium text-mutegray">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="Calendar" className="size-3.5" /> {post.displayDate}
          </span>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h3
          className={cn(
            "mt-3 font-bold leading-snug tracking-tight text-navy transition-colors group-hover:text-blue-600",
            featured ? "text-xl" : "text-lg"
          )}
        >
          {post.title}
        </h3>
        <p className="mt-2.5 line-clamp-3 flex-1 text-[0.95rem] leading-relaxed text-slate">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600">
          Read article
          <Icon
            name="ArrowRight"
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
