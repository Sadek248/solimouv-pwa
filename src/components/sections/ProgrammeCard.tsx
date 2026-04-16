import type { ProgrammeItem } from "@/data/programme";

type ProgrammeCardProps = {
    item: ProgrammeItem;
};

export default function ProgrammeCard({ item }: ProgrammeCardProps) {
    return (
        <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-gray-500">{item.time}</p>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {item.audience}
                </span>
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-gray-900">{item.title}</h2>

            <p className="mt-3 text-sm text-gray-500">
                {item.location} · {item.partner}
            </p>

            <p className="mt-4 leading-7 text-gray-700">{item.description}</p>
        </article>
    );
}