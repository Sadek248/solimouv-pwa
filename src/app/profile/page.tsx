import Link from "next/link";

const earnedBadges = [
    {
        id: 1,
        name: "Première découverte",
        description: "Vous avez complété votre questionnaire.",
        color: "bg-[#B7E64C]",
        textColor: "text-black",
    },
    {
        id: 2,
        name: "Explorateur",
        description: "Vous avez découvert plusieurs univers sportifs.",
        color: "bg-[#FF6B4A]",
        textColor: "text-white",
    },
    {
        id: 3,
        name: "Inclusif",
        description: "Vous avez consulté des activités accessibles.",
        color: "bg-[#5C2C4F]",
        textColor: "text-white",
    },
];

const lockedBadges = [
    {
        id: 4,
        name: "Curieux",
        description: "Consulter 5 activités différentes.",
    },
    {
        id: 5,
        name: "Participant",
        description: "Participer à une activité du festival.",
    },
    {
        id: 6,
        name: "Ambassadeur",
        description: "Partager votre expérience Solimouv’.",
    },
];

const preferences = [
    { label: "Mobilité", value: "En marchant / debout" },
    { label: "Intensité", value: "Zen" },
    { label: "Environnement", value: "En duo ou petit groupe" },
    { label: "Temps", value: "Classique" },
];

export default function ProfilePage() {
    const user = {
        firstName: "Mohamed",
        lastName: "Chouikha",
        email: "mohamed@email.com",
        level: "Découverte",
        progress: 42,
    };

    return (
        <main className="min-h-screen bg-[#F7F6F5] px-5 py-8 text-black sm:px-8 md:px-10 lg:px-16">
            <section className="mx-auto grid w-full max-w-7xl gap-6">
                <header className="grid gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
                        Mon profil
                    </p>
                    <h1 className="text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
                        Votre espace Solimouv’
                    </h1>
                    <p className="max-w-2xl text-sm leading-6 text-black/65 sm:text-base">
                        Retrouvez votre profil, vos préférences et les badges débloqués au
                        fil de votre parcours.
                    </p>
                </header>

                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <section className="grid gap-6 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8">
                        <div className="flex items-start justify-between gap-4">
                            <div className="grid gap-2">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6B4A] text-xl font-black text-white">
                                    {user.firstName[0]}
                                    {user.lastName[0]}
                                </div>

                                <div>
                                    <h2 className="text-2xl font-black uppercase leading-none">
                                        {user.firstName} {user.lastName}
                                    </h2>
                                    <p className="mt-2 text-sm text-black/60">{user.email}</p>
                                </div>
                            </div>

                            <span className="rounded-full bg-[#B7E64C] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-black">
                                {user.level}
                            </span>
                        </div>

                        <div className="grid gap-3 rounded-[24px] bg-[#F7F6F5] p-5">
                            <div className="flex items-center justify-between gap-3">
                                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5C2C4F]">
                                    Progression
                                </p>
                                <p className="text-sm font-bold text-[#5C2C4F]">
                                    {user.progress}%
                                </p>
                            </div>

                            <div className="h-3 w-full overflow-hidden rounded-full bg-black/10">
                                <div
                                    className="h-full rounded-full bg-[#FF6B4A]"
                                    style={{ width: `${user.progress}%` }}
                                />
                            </div>

                            <p className="text-sm leading-6 text-black/65">
                                Continuez à explorer des activités pour débloquer de nouveaux
                                badges et enrichir votre parcours.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5C2C4F]">
                                    Préférences
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                {preferences.map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-[20px] border border-black/10 bg-[#F7F6F5] p-4"
                                    >
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5C2C4F]">
                                            {item.label}
                                        </p>
                                        <p className="mt-2 text-sm font-semibold text-black">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/questionnaire"
                                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#FF6B4A] px-5 text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                Modifier mon profil sportif
                            </Link>

                            <Link
                                href="/programme"
                                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-black/10 bg-[#F7F6F5] px-5 text-sm font-semibold text-[#5C2C4F] transition hover:bg-[#F1EFED]"
                            >
                                Explorer les activités
                            </Link>
                        </div>
                    </section>

                    <section className="grid gap-6">
                        <div className="grid gap-4 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5C2C4F]">
                                        Badges obtenus
                                    </p>
                                    <h2 className="mt-2 text-2xl font-black uppercase leading-none">
                                        Vos réussites
                                    </h2>
                                </div>

                                <div className="rounded-full bg-[#B7E64C] px-4 py-2 text-sm font-bold text-black">
                                    {earnedBadges.length}
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                {earnedBadges.map((badge) => (
                                    <article
                                        key={badge.id}
                                        className="grid gap-4 rounded-[24px] border border-black/10 bg-[#F7F6F5] p-5"
                                    >
                                        <div
                                            className={`flex h-14 w-14 items-center justify-center rounded-full ${badge.color} ${badge.textColor} text-lg font-black`}
                                        >
                                            ★
                                        </div>

                                        <div className="grid gap-2">
                                            <h3 className="text-lg font-bold text-[#5C2C4F]">
                                                {badge.name}
                                            </h3>
                                            <p className="text-sm leading-6 text-black/65">
                                                {badge.description}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-4 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8">
                            <div className="grid gap-2">
                                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5C2C4F]">
                                    À débloquer
                                </p>
                                <h2 className="text-2xl font-black uppercase leading-none">
                                    Prochains badges
                                </h2>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                {lockedBadges.map((badge) => (
                                    <article
                                        key={badge.id}
                                        className="grid gap-4 rounded-[24px] border border-dashed border-black/15 bg-[#F7F6F5] p-5 opacity-80"
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/10 text-lg font-black text-[#5C2C4F]">
                                            🔒
                                        </div>

                                        <div className="grid gap-2">
                                            <h3 className="text-lg font-bold text-[#5C2C4F]">
                                                {badge.name}
                                            </h3>
                                            <p className="text-sm leading-6 text-black/60">
                                                {badge.description}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}