import Link from "next/link";
import type { ProgrammeItem } from "@/data/programme";

type Props = {
  item: ProgrammeItem;
};

const accentClasses: Record<ProgrammeItem["accentColor"], string> = {
  green: "border-t-[6px] border-t-[#B7E64C]",
  purple: "border-t-[6px] border-t-[#5C2C4F]",
  orange: "border-t-[6px] border-t-[#FF6B4A]",
};

const badgeClasses: Record<ProgrammeItem["accentColor"], string> = {
  green: "bg-[#E5F4B9] text-black",
  purple: "bg-[#EFE5EC] text-[#5C2C4F]",
  orange: "bg-[#FDE7E1] text-[#5C2C4F]",
};

const buttonClasses: Record<ProgrammeItem["accentColor"], string> = {
  green: "bg-[#5C2C4F] text-white hover:opacity-90",
  purple: "bg-[#FF6B4A] text-white hover:opacity-90",
  orange: "bg-[#FF6B4A] text-white hover:opacity-90",
};

export default function ProgrammeCard({ item }: Props) {
  return (
    <article
      className={`grid gap-6 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] ${accentClasses[item.accentColor]}`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-3xl font-bold text-[#FF6B4A]">{item.time}</p>

        <span
          className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${badgeClasses[item.accentColor]}`}
        >
          {item.audience}
        </span>
      </div>

      <div className="grid gap-4">
        <h2 className="text-2xl font-black leading-tight">{item.title}</h2>

        <p className="text-base text-[#6D5870]">{item.location}</p>

        <p className="text-lg leading-9 text-black/80">{item.description}</p>
      </div>

      <div>
        <Link
          href={`/programme/${item.id}`}
          className={`inline-flex min-h-[52px] items-center justify-center rounded-2xl px-5 text-base font-semibold transition ${buttonClasses[item.accentColor]}`}
        >
          Voir l’activité
        </Link>
      </div>
    </article>
  );
}