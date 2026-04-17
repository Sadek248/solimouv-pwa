import Image from "next/image";
import {
  User,
  Sparkles,
  MapPin,
  Star,
  Smartphone,
  Play,
} from "lucide-react";

const BRAND_ORANGE = "#F56D4E";

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden bg-white text-black scroll-smooth">
      {/* Header / Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center">
            <Image
              src="/images/logo-solimouv.png"
              alt="Logo Solimouv'"
              width={120}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>

          <a
            href="#cta"
            className="rounded-full px-5 py-2 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: BRAND_ORANGE }}
          >
            Participer
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-gray-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide">
            🚀 12 JUILLET • CENTRE CHARLES MOUREU
          </div>

          <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] md:text-7xl">
            Le terrain de jeu du{" "}
            <span className="text-gray-400">sport inclusif</span> et de la
            diversité.
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Le 12 juillet au Centre Charles Moureu, participez à un{" "}
            <strong>événement solidaire</strong> 100% gratuit. Trouvez enfin la{" "}
            <strong>pratique adaptée</strong> à vos envies et rejoignez le
            mouvement !
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#features"
              className="w-full rounded-3xl px-8 py-4 text-lg font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg sm:w-auto"
              style={{ backgroundColor: BRAND_ORANGE }}
            >
              Trouver mon sport idéal
            </a>

            <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-200" />
                <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-300" />
                <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-400" />
              </div>
              <span>+500 déjà inscrits</span>
            </div>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="relative mx-auto mt-16 max-w-sm">
          <div
            className="absolute -inset-4 rounded-full blur-3xl"
            style={{ backgroundColor: `${BRAND_ORANGE}33` }}
          />

          <div className="relative rounded-[2.5rem] border-4 border-gray-800 bg-black p-3 shadow-2xl">
            <div className="flex aspect-[9/19] flex-col overflow-hidden rounded-[2rem] bg-white p-6">
              <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-gray-200" />

              <div className="mb-8 flex items-center gap-2">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: BRAND_ORANGE }}
                >
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-gray-400">
                    Bonjour Sarah
                  </p>
                  <p className="text-sm font-bold">Ton programme du jour</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                      style={{ backgroundColor: BRAND_ORANGE }}
                    >
                      CONFIRMÉ
                    </span>
                    <span className="text-[10px] text-gray-400">10:00</span>
                  </div>
                  <p className="text-xs font-bold">Initiation Basket Fauteuil</p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 opacity-60">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-bold text-gray-400">
                      À VENIR
                    </span>
                    <span className="text-[10px] text-gray-400">14:30</span>
                  </div>
                  <p className="text-xs font-bold">Yoga Inclusif</p>
                </div>
              </div>

              <div className="mt-auto rounded-2xl bg-black p-4 text-center text-xs font-bold text-white">
                Ouvrir la carte du festival
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preuve sociale */}
      <section className="border-y border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
            <div className="text-center md:border-r md:border-gray-200">
              <p className="mb-1 text-4xl font-extrabold">500+</p>
              <p className="px-4 text-sm font-medium text-gray-500">
                participants unis par la{" "}
                <span className="font-bold text-black">solidarité</span>
              </p>
            </div>

            <div className="text-center md:border-r md:border-gray-200">
              <p className="mb-1 text-4xl font-extrabold">13</p>
              <p className="px-4 text-sm font-medium text-gray-500">
                <span className="font-bold text-black">asso sport</span>{" "}
                partenaires engagées pour l&apos;égalité
              </p>
            </div>

            <div className="text-center">
              <p className="mb-1 text-4xl font-extrabold">92%</p>
              <p className="px-4 text-sm font-medium text-gray-500">
                ont hâte de revenir cette année !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section id="features" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold">
            L&apos;expérience Solimouv&apos;
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-2">
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ backgroundColor: BRAND_ORANGE }}
              >
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-extrabold leading-tight">
                Votre{" "}
                <span style={{ color: BRAND_ORANGE }}>
                  initiation sportive
                </span>{" "}
                sur-mesure
              </h3>
              <p className="leading-relaxed text-gray-600">
                Répondez à quelques questions et laissez notre outil
                d&apos;innovation sociale vous guider vers le sport parfait pour
                vous, que vous cherchiez une activité valide ou du{" "}
                <strong>handi sport</strong>.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-2">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-extrabold leading-tight">
                Accessibilité et programme clair
              </h3>
              <p className="leading-relaxed text-gray-600">
                Planifiez votre journée sans stress. Filtrez les activités par
                horaire, vérifiez l&apos;<strong>accessibilité</strong> de chaque
                zone et trouvez votre chemin facilement sur place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="overflow-hidden bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold">
              Ce que disent nos participants
            </h2>
            <div className="flex justify-center gap-1" style={{ color: BRAND_ORANGE }}>
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
          </div>

          <div className="mb-24 grid gap-8 md:grid-cols-2">
            <div className="relative rounded-3xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <div
                className="absolute -left-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-white"
                style={{ backgroundColor: BRAND_ORANGE }}
              >
                “
              </div>
              <p className="mb-6 italic text-gray-700">
                &quot;Je cherchais une association inclusion pour reprendre une
                activité en douceur. Solimouv&apos; m&apos;a prouvé que
                l&apos;égalité des chances existe aussi sur le terrain !&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
                <p className="font-bold">
                  Sarah,{" "}
                  <span className="text-sm font-normal text-gray-400">
                    24 ans
                  </span>
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <div
                className="absolute -left-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-white"
                style={{ backgroundColor: BRAND_ORANGE }}
              >
                “
              </div>
              <p className="mb-6 italic text-gray-700">
                &quot;Génial d&apos;avoir une app pour filtrer
                l&apos;accessibilité et trouver mon initiation au sport idéale
                en fauteuil. L&apos;organisation est top.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
                <p className="font-bold">
                  Thomas,{" "}
                  <span className="text-sm font-normal text-gray-400">
                    27 ans
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-8 text-xs font-bold uppercase tracking-widest text-gray-400">
              Un événement soutenu par
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale transition-all hover:grayscale-0 md:gap-16">
              <span className="text-xl font-black italic">UP SPORT!</span>
              <span className="text-xl font-bold uppercase tracking-tighter">
                Ville de Paris
              </span>
              <span className="border-2 border-black px-2 text-xl font-bold">
                SOLIDARITÉ
              </span>
              <span className="text-xl font-black">Maddyness</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-3xl font-extrabold">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h4 className="mb-3 text-lg font-bold">
                Dois-je être un athlète pour venir à cet événement solidaire ?
              </h4>
              <p className="text-gray-600">
                Absolument pas ! Le but est l&apos;initiation sportive à votre
                rythme, dans un esprit de pure solidarité et de convivialité.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h4 className="mb-3 text-lg font-bold">
                Les activités sont-elles adaptées à mon handicap ?
              </h4>
              <p className="text-gray-600">
                L&apos;accessibilité est notre priorité numéro un.
                L&apos;application vous permet de filtrer chaque pratique adaptée
                à vos besoins spécifiques.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h4 className="mb-3 text-lg font-bold">
                Est-ce que tout est vraiment gratuit ?
              </h4>
              <p className="text-gray-600">
                Oui, l&apos;accès au festival et toutes les activités proposées
                par chaque asso sport présente sont 100% gratuits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="cta" className="px-6 py-24">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[3rem] bg-black p-12 text-center text-white">
          <div
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[80px]"
            style={{ backgroundColor: `${BRAND_ORANGE}33` }}
          />

          <h2 className="relative z-10 mb-8 text-3xl font-extrabold md:text-5xl">
            Prêt à trouver votre prochain terrain de jeu ?
          </h2>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <button
              className="rounded-full px-10 py-5 text-xl font-bold text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: BRAND_ORANGE }}
            >
              Lancer mon matching sportif
            </button>

            <div className="flex gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold">
                <Smartphone className="h-4 w-4" style={{ color: BRAND_ORANGE }} />
                iOS App
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold">
                <Play className="h-4 w-4" style={{ color: BRAND_ORANGE }} />
                Android
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}