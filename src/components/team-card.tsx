import Image from "next/image";
import { Icon } from "@/components/icon";
import type { TeamMember } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * TeamCard — a doctor profile. The photo uses object-contain on a soft brand
 * backdrop so portraits and landscape source photos both show in full, without
 * cropping or stretching (the source images have different aspect ratios).
 */
export function TeamCard({ member, className }: { member: TeamMember; className?: string }) {
  return (
    <figure
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]",
        className
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden border-b border-hairline bg-gradient-to-b from-sky to-white">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role} at Union Vet`}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-contain object-center p-3"
        />
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-md bg-red px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[var(--shadow-red)]">
          <Icon name="Stethoscope" className="size-3.5" />
          {member.role}
        </span>
      </div>
      <figcaption className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl tracking-tight text-navy">{member.name}</h3>
        {member.tagline && (
          <p className="mt-2 text-sm font-bold text-blue">{member.tagline}</p>
        )}
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate">{member.bio}</p>
      </figcaption>
    </figure>
  );
}
