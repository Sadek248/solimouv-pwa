import type { AssociationItem } from "@/data/associations";

type AssociationCardProps = {
    item: AssociationItem;
};

export default function AssociationCard({ item }: AssociationCardProps) {
    return (
        <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-gray-900">{item.name}</h2>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {item.category}
                </span>
            </div>

            <p className="mt-4 leading-7 text-gray-700">{item.description}</p>

            <a
                href={item.website}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
                Voir le site
            </a>
        </article>
    );
}