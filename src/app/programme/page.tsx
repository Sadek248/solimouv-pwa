import ProgrammeCard from "@/components/sections/ProgrammeCard";
import type { ProgrammeItem } from "@/data/programme";

async function getProgramme(): Promise<ProgrammeItem[]> {
    const res = await fetch("http://localhost:3000/api/programme", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Impossible de récupérer le programme.");
    }

    return res.json();
}

export default async function ProgrammePage() {
    const programme = await getProgramme();

    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            <section>
                <h1 className="text-4xl font-bold text-gray-900">Programme</h1>

                <p className="mt-4 max-w-3xl text-lg text-gray-700">
                    Découvrez les ateliers, initiations et temps forts du festival Solimouv’.
                </p>
            </section>

            <section className="mt-10 grid gap-6 md:grid-cols-2">
                {programme.map((item) => (
                    <ProgrammeCard key={item.id} item={item} />
                ))}
            </section>
        </main>
    );
}
