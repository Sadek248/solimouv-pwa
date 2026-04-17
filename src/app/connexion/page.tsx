import Link from "next/link";
import { programmeData } from "@/data/programme";
import ProgrammeCard from "@/components/sections/ProgrammeCard";

export default function ConnexionPage() {
  const demoEvent = programmeData[0];

  return (
    <main className="min-h-screen bg-[#F7F6F5] text-black">
      <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 md:px-10 lg:px-16">
        <div className="mb-10 rounded-[28px] border border-black/10 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
            Temporaire
          </p>
          <h1 className="mt-2 text-4xl font-black uppercase">
            Page de référence maquette
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-black/70">
            Cette page regroupe temporairement les principaux écrans du projet
            pour extraction et reproduction dans la maquette.
          </p>
        </div>

        {/* 1. Bloc connexion */}
        <section className="mb-12 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
            Écran
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase">Connexion</h2>

          <div className="mt-6 grid gap-4 md:max-w-md">
            <input
              type="email"
              placeholder="Adresse email"
              className="min-h-[54px] rounded-2xl border border-black/10 bg-[#F7F6F5] px-4 outline-none"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="min-h-[54px] rounded-2xl border border-black/10 bg-[#F7F6F5] px-4 outline-none"
            />
            <button className="min-h-[54px] rounded-2xl bg-[#FF6B4A] px-6 font-semibold text-white">
              Se connecter
            </button>
          </div>
        </section>

        {/* 2. Bloc accueil */}
        <section className="mb-12 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
            Écran
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase">Accueil</h2>

          <div className="mt-6 rounded-[24px] bg-[#F7F6F5] p-6">
            <h3 className="text-4xl font-black uppercase leading-[0.95]">
              Solimouv’
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-black/70">
              Le festival inclusif pour découvrir, pratiquer et partager le
              sport autrement.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-2xl bg-[#FF6B4A] px-5 py-3 font-semibold text-white">
                Découvrir le programme
              </button>
              <button className="rounded-2xl border border-black/10 bg-white px-5 py-3 font-semibold text-[#5C2C4F]">
                Répondre au questionnaire
              </button>
            </div>
          </div>
        </section>

        {/* 3. Bloc programme */}
        <section className="mb-12">
          <div className="mb-6 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
              Écran
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase">Programme</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programmeData.slice(0, 6).map((item) => (
              <ProgrammeCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* 4. Bloc détail activité */}
        {demoEvent && (
          <section className="mb-12 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
              Écran
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase">
              Détail activité
            </h2>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="grid gap-6">
                <div className="rounded-[24px] bg-[#F7F6F5] p-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-[#FFF1EC] px-4 py-2 text-sm font-semibold text-[#FF6B4A]">
                      {demoEvent.time}
                    </span>
                    <span className="rounded-full bg-[#EFE5EC] px-4 py-2 text-sm font-semibold text-[#5C2C4F]">
                      {demoEvent.audience}
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-black uppercase">
                    {demoEvent.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-black/75">
                    {demoEvent.description}
                  </p>

                  <p className="mt-4 text-sm text-black/60">
                    {demoEvent.location}
                  </p>
                </div>

                <div className="rounded-[24px] bg-[#F7F6F5] p-6">
                  <h4 className="text-xl font-black uppercase">À propos</h4>
                  <p className="mt-4 text-base leading-7 text-black/75">
                    {demoEvent.longDescription}
                  </p>
                </div>
              </div>

              <aside className="rounded-[28px] bg-[#5C2C4F] p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  Participation
                </p>
                <h4 className="mt-3 text-2xl font-black uppercase">
                  Réserver votre place
                </h4>
                <p className="mt-4 text-base leading-7 text-white/80">
                  Inscrivez-vous à cette activité en deux étapes.
                </p>
                <button className="mt-6 min-h-[54px] rounded-2xl bg-[#FF6B4A] px-6 font-semibold text-white">
                  S’inscrire
                </button>
              </aside>
            </div>
          </section>
        )}

        {/* 5. Bloc questionnaire */}
        <section className="mb-12 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
            Écran
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase">
            Questionnaire
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-[24px] border border-black/10 bg-[#F7F6F5] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
                Mobilité
              </p>
              <h3 className="mt-2 text-2xl font-black uppercase">
                Comment pouvez-vous vous déplacer ?
              </h3>
              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-white p-4">En marchant / debout</div>
                <div className="rounded-2xl bg-white p-4">En fauteuil roulant</div>
                <div className="rounded-2xl bg-white p-4">
                  Avec une aide à la mobilité
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Liens rapides */}
        <section className="rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
            Navigation rapide
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-2xl border border-black/10 bg-[#F7F6F5] px-4 py-3 font-semibold"
            >
              Accueil réel
            </Link>
            <Link
              href="/programme"
              className="rounded-2xl border border-black/10 bg-[#F7F6F5] px-4 py-3 font-semibold"
            >
              Programme réel
            </Link>
            <Link
              href="/questionnaire"
              className="rounded-2xl border border-black/10 bg-[#F7F6F5] px-4 py-3 font-semibold"
            >
              Questionnaire réel
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}