import AssociationCard from "@/components/sections/AssociationCard";
import type { AssociationItem } from "@/data/associations";

async function getAssociations(): Promise<AssociationItem[]> {
    const res = await fetch("http://localhost:3000/api/associations", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Impossible de récupérer les associations.");
    }

    return res.json();
}

export default async function AssociationsPage() {
    const associations = await getAssociations();

    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            <section>
                <h1 className="text-4xl font-bold text-gray-900">Associations partenaires</h1>

                <p className="mt-4 max-w-3xl text-lg text-gray-700">
                    Solimouv’ rassemble des associations engagées pour un sport plus accessible,
                    plus inclusif et plus solidaire.
                </p>
            </section>

            <section className="mt-10 grid gap-6 md:grid-cols-2">
                {associations.map((item) => (
                    <AssociationCard key={item.id} item={item} />
                ))}
            </section>
        </main>
    );
}