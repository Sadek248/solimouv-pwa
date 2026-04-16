export default function LandingPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            <section className="rounded-2xl bg-black p-10 text-white">
                <h1 className="text-4xl font-bold">
                    Une PWA pour faire rayonner Solimouv’
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-gray-200">
                    Une application pensée pour valoriser le festival, améliorer l’expérience
                    des publics et offrir un support de pilotage moderne aux organisateurs.
                </p>
            </section>

            <section className="mt-10 grid gap-6 md:grid-cols-3">
                <article className="rounded-2xl border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold">Communication</h2>
                    <p className="mt-2 text-gray-600">
                        Une vitrine digitale claire pour présenter le festival, ses valeurs et ses partenaires.
                    </p>
                </article>

                <article className="rounded-2xl border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold">Engagement</h2>
                    <p className="mt-2 text-gray-600">
                        Des parcours interactifs pour mieux informer, orienter et mobiliser les publics.
                    </p>
                </article>

                <article className="rounded-2xl border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold">Pilotage</h2>
                    <p className="mt-2 text-gray-600">
                        Une base évolutive pour accompagner les futures éditions du festival.
                    </p>
                </article>
            </section>
        </main>
    );
}