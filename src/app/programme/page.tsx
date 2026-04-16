export default function ProgrammePage() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="text-4xl font-bold">Programme</h1>

            <p className="mt-4 max-w-2xl text-gray-700">
                Découvrez les ateliers, initiations et moments forts du festival Solimouv’.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
                <article className="rounded-2xl border border-gray-200 p-6">
                    <p className="text-sm text-gray-500">10:00 - Terrain A</p>
                    <h2 className="mt-2 text-2xl font-semibold">Football inclusif</h2>
                    <p className="mt-2 text-gray-600">
                        Une initiation ouverte à tous pour découvrir une pratique collective,
                        conviviale et accessible.
                    </p>
                </article>

                <article className="rounded-2xl border border-gray-200 p-6">
                    <p className="text-sm text-gray-500">11:30 - Salle B</p>
                    <h2 className="mt-2 text-2xl font-semibold">Yoga adapté</h2>
                    <p className="mt-2 text-gray-600">
                        Un moment de bien-être pensé pour différents niveaux de mobilité et de pratique.
                    </p>
                </article>

                <article className="rounded-2xl border border-gray-200 p-6">
                    <p className="text-sm text-gray-500">14:00 - Espace central</p>
                    <h2 className="mt-2 text-2xl font-semibold">Atelier sensibilisation</h2>
                    <p className="mt-2 text-gray-600">
                        Un temps d’échange autour du sport inclusif, de l’égalité et de l’accès à la pratique.
                    </p>
                </article>

                <article className="rounded-2xl border border-gray-200 p-6">
                    <p className="text-sm text-gray-500">16:00 - Stand prévention</p>
                    <h2 className="mt-2 text-2xl font-semibold">Premiers secours</h2>
                    <p className="mt-2 text-gray-600">
                        Une initiation utile et accessible pour apprendre les gestes essentiels.
                    </p>
                </article>
            </div>
        </main>
    );
}