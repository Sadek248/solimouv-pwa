import ProgrammeCard from "@/components/sections/ProgrammeCard";
import { programme } from "@/data/programme";

export default function ProgrammePage() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            <section>
                <h1 className="text-4xl font-bold text-gray-900">Programme</h1>

                <p className="mt-4 max-w-3xl text-lg text-gray-700">
                    Découvrez les ateliers, initiations et temps forts du festival Solimouv’.
                    Cette programmation est pensée pour favoriser la découverte sportive,
                    l’inclusion et la rencontre entre les publics.
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