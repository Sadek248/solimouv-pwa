import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "À propos | Solimouv’ - Festival de sport inclusif",
    description:
        "Découvrez Solimouv’, le festival de sport inclusif porté par Up Sport!, une association parisienne engagée pour l’accès au sport, la santé, l’égalité de genre et l’insertion.",
    keywords: [
        "Solimouv",
        "festival sport inclusif",
        "sport pour tous",
        "Up Sport",
        "association sportive Paris",
        "sport inclusif",
        "festival inclusif",
    ],
    openGraph: {
        title: "À propos | Solimouv’",
        description:
            "Le festival inclusif porté par Up Sport! pour découvrir, pratiquer et partager le sport autrement.",
        type: "website",
    },
};

const keyFigures = [
    { value: "500+", label: "participant·e·s lors de la première édition" },
    { value: "13", label: "associations mobilisées" },
    { value: "40+", label: "bénévoles engagés" },
    { value: "92 %", label: "des participant·e·s souhaitent revenir" },
];

const audiences = [
    "Familles",
    "Jeunes",
    "Seniors",
    "Personnes réfugiées",
    "Personnes éloignées du sport",
    "Personnes en situation de handicap",
    "Communauté LGBTQIA+",
];

const values = [
    "Confiance",
    "Diversité",
    "Solidarité",
    "Partage",
];

export default function AProposPage() {
    return (
        <main className="min-h-screen bg-[#F7F6F5] text-black">
            <section className="border-b border-black/10">
                <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-16 lg:py-16">
                    <div className="grid gap-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5C2C4F]">
                            Festival Solimouv’
                        </p>

                        <div className="grid gap-4">
                            <h1 className="text-4xl font-black uppercase leading-[0.92] sm:text-5xl lg:text-6xl">
                                Le sport inclusif
                                <br />
                                en mouvement
                            </h1>

                            <p className="max-w-3xl text-base leading-8 text-black/70 sm:text-lg">
                                Solimouv’ est un festival pensé pour faire découvrir une autre
                                manière de vivre le sport : plus accessible, plus humaine, plus
                                ouverte à toutes et à tous.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/programme"
                                className="inline-flex min-h-[54px] items-center justify-center rounded-2xl bg-[#FF6B4A] px-6 text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                Découvrir le programme
                            </Link>

                            <Link
                                href="/questionnaire"
                                className="inline-flex min-h-[54px] items-center justify-center rounded-2xl border border-black/10 bg-white px-6 text-sm font-semibold text-[#5C2C4F] transition hover:bg-[#F1EFED]"
                            >
                                Trouver mon activité
                            </Link>
                        </div>
                    </div>

                    <aside className="grid gap-4 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
                            En bref
                        </p>

                        <h2 className="text-2xl font-black uppercase leading-tight">
                            Un festival pour pratiquer, découvrir et se rencontrer
                        </h2>

                        <p className="text-base leading-8 text-black/75">
                            Pensé comme un rendez-vous du sport pour tous, Solimouv’ réunit
                            des activités sportives, des temps de sensibilisation et des
                            partenaires engagés pour rendre la pratique plus inclusive.
                        </p>

                        <div className="grid gap-3 pt-2">
                            <div className="rounded-2xl bg-[#FFF1EC] px-4 py-3 text-sm font-semibold text-[#FF6B4A]">
                                Accessible
                            </div>
                            <div className="rounded-2xl bg-[#EFE5EC] px-4 py-3 text-sm font-semibold text-[#5C2C4F]">
                                Humain
                            </div>
                            <div className="rounded-2xl bg-[#E5F4B9] px-4 py-3 text-sm font-semibold text-black">
                                Inclusif
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 md:px-10 lg:px-16">
                <div className="grid gap-6 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
                        Qui sommes-nous ?
                    </p>

                    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
                        <div className="grid gap-4">
                            <h2 className="text-3xl font-black uppercase leading-[0.95]">
                                Up Sport!,
                                <br />
                                l’inclusion par le sport
                            </h2>

                            <p className="text-base leading-8 text-black/75">
                                Up Sport! est une association parisienne créée en 2016 pour
                                favoriser l’inclusion par le sport. Son action s’appuie sur
                                plusieurs piliers : l’accès à la pratique sportive, la santé,
                                l’égalité de genre et l’insertion socio-professionnelle.
                            </p>
                        </div>

                        <div className="grid gap-4 rounded-[24px] bg-[#F7F6F5] p-6">
                            <h3 className="text-xl font-black uppercase">Notre conviction</h3>

                            <p className="text-base leading-8 text-black/75">
                                Le sport ne se limite pas à la performance. C’est aussi un outil
                                de lien social, de confiance, d’émancipation et de mieux-être.
                                C’est cette vision qui inspire Solimouv’ et l’ensemble des
                                initiatives portées par Up Sport!.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 md:px-10 lg:px-16">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <article className="grid gap-5 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
                            Pourquoi Solimouv’ ?
                        </p>

                        <h2 className="text-3xl font-black uppercase leading-[0.95]">
                            Faire découvrir
                            <br />
                            un sport plus ouvert
                        </h2>

                        <p className="text-base leading-8 text-black/75">
                            Solimouv’ a été imaginé comme un festival du sport inclusif,
                            capable de rassembler des personnes d’horizons, d’âges, de
                            parcours et de capacités différentes autour d’une même envie :
                            bouger, tester, partager et se rencontrer.
                        </p>

                        <p className="text-base leading-8 text-black/75">
                            Au-delà des initiations sportives, le festival met aussi en avant
                            des ateliers de sensibilisation et des échanges utiles pour faire
                            évoluer les regards sur la pratique sportive inclusive.
                        </p>
                    </article>

                    <article className="grid gap-5 rounded-[32px] border border-black/10 bg-[#5C2C4F] p-6 text-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                            Pour qui ?
                        </p>

                        <h2 className="text-3xl font-black uppercase leading-[0.95]">
                            Un événement
                            <br />
                            pensé pour la mixité
                        </h2>

                        <div className="flex flex-wrap gap-2">
                            {audiences.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            <section className="border-y border-black/10 bg-white">
                <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 md:px-10 lg:px-16">
                    <div className="grid gap-6">
                        <div className="grid gap-3">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
                                Une première édition marquante
                            </p>

                            <h2 className="text-3xl font-black uppercase leading-[0.95] sm:text-4xl">
                                Des résultats concrets
                            </h2>

                            <p className="max-w-3xl text-base leading-8 text-black/70">
                                La première édition de Solimouv’ a confirmé l’intérêt d’un
                                événement sportif inclusif, fédérateur et ancré dans la réalité
                                du terrain.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                            {keyFigures.map((item, index) => (
                                <article
                                    key={item.label}
                                    className={[
                                        "grid gap-3 rounded-[24px] border border-black/10 p-6",
                                        index === 0
                                            ? "bg-[#FFF1EC]"
                                            : index === 1
                                                ? "bg-[#EFE5EC]"
                                                : index === 2
                                                    ? "bg-[#E5F4B9]"
                                                    : "bg-[#F7F6F5]",
                                    ].join(" ")}
                                >
                                    <p className="text-3xl font-black uppercase leading-none">
                                        {item.value}
                                    </p>
                                    <p className="text-sm leading-7 text-black/75">{item.label}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 md:px-10 lg:px-16">
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <article className="grid gap-5 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
                            Ce qui fait la différence
                        </p>

                        <h2 className="text-3xl font-black uppercase leading-[0.95]">
                            Une expérience
                            <br />
                            humaine et sociale
                        </h2>

                        <p className="text-base leading-8 text-black/75">
                            Solimouv’ ne propose pas seulement des activités. Le festival crée
                            un cadre rassurant et convivial pour essayer, se remettre en
                            mouvement, rencontrer d’autres personnes et découvrir des
                            structures engagées.
                        </p>

                        <p className="text-base leading-8 text-black/75">
                            L’objectif est simple : montrer qu’une autre pratique sportive est
                            possible, plus accessible et plus représentative de la diversité
                            des publics.
                        </p>
                    </article>

                    <article className="grid gap-5 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
                            Nos valeurs
                        </p>

                        <h2 className="text-3xl font-black uppercase leading-[0.95]">
                            Confiance, diversité,
                            <br />
                            solidarité, partage
                        </h2>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {values.map((value) => (
                                <div
                                    key={value}
                                    className="rounded-[22px] bg-[#F7F6F5] px-5 py-4 text-base font-semibold text-[#5C2C4F]"
                                >
                                    {value}
                                </div>
                            ))}
                        </div>

                        <p className="text-base leading-8 text-black/75">
                            Ces valeurs structurent la manière dont les activités sont
                            pensées, organisées et animées : avec attention, bienveillance et
                            ouverture.
                        </p>
                    </article>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 md:px-10 lg:px-16">
                <div className="grid gap-6 rounded-[32px] bg-[#FF6B4A] p-6 text-white shadow-[0_16px_50px_rgba(255,107,74,0.22)] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div className="grid gap-3">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                            Rejoindre l’expérience
                        </p>

                        <h2 className="text-3xl font-black uppercase leading-[0.95] sm:text-4xl">
                            Envie de découvrir
                            <br />
                            le festival autrement ?
                        </h2>

                        <p className="max-w-2xl text-base leading-8 text-white/90">
                            Explore le programme, trouve une activité adaptée à ton profil et
                            découvre une pratique sportive plus inclusive.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/programme"
                            className="inline-flex min-h-[54px] items-center justify-center rounded-2xl bg-white px-6 text-sm font-semibold text-[#5C2C4F] transition hover:opacity-90"
                        >
                            Voir le programme
                        </Link>

                        <Link
                            href="/questionnaire"
                            className="inline-flex min-h-[54px] items-center justify-center rounded-2xl border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                            Faire le questionnaire
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}