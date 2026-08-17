import Image from "next/image";
import { Icon } from "@/components/icon";
import type { TeamMember } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * TeamCard — a doctor profile. Both photos display in an identical fixed-size
 * oval (176×208) via object-cover, so portrait and landscape source images read
 * as one consistent shape/size. The oval is smaller than the lower-res source
 * photo, so it downscales (stays sharp) rather than being enlarged.
 */
export function TeamCard({ member, className }: { member: TeamMember; className?: string }) {
  return (
    <figure
      className={cn(
        "group flex h-full flex-col items-center rounded-2xl border border-hairline bg-white p-7 text-center shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]",
        className
      )}
    >
      <div className="relative h-52 w-44 overflow-hidden rounded-[50%] bg-sky shadow-[var(--shadow-card)] ring-4 ring-sky">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role} at Union Vet`}
          fill
          sizes="176px"
          className="object-cover object-top"
        />
      </div>

      <span className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-red px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[var(--shadow-red)]">
        <Icon name="Stethoscope" className="size-3.5" />
        {member.role}
      </span>
      <h3 className="mt-3 font-display text-xl tracking-tight text-navy">{member.name}</h3>
      {member.tagline && <p className="mt-2 text-sm font-bold text-blue">{member.tagline}</p>}
      <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">{member.bio}</p>
    </figure>
  );
}
