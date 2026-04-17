import Link from "next/link";
import HomeRecommendations from "@/components/sections/HomeRecommendations";
const partners = [
  "Fondation PiLeje",
  "UFOLEP 75",
  "Força Foundation",
  "Kainos",
  "Yoga & Sport with Refugees",
  "Moove Toi",
  "Les Hijabeuses",
  "Sine Qua Non",
  "Novosport Alice Milliat",
  "UNASS",
  "Up Sport!",
];

const benefits = [
  {
    title: "Découvrir de nouveaux sports",
    description:
      "Explorez des activités variées et trouvez une pratique qui vous correspond vraiment.",
  },
  {
    title: "Rencontrer des associations engagées",
    description:
      "Échangez avec des acteurs de terrain qui rendent le sport plus accessible et inclusif.",
  },
  {
    title: "Vivre une expérience inclusive",
    description:
      "Profitez d’un festival pensé pour accueillir des publics, des niveaux et des besoins différents.",
  },
  {
    title: "Pratiquer à votre rythme",
    description:
      "Choisissez selon votre envie, votre énergie et votre niveau de confort.",
  },
];

const filters = [
  "Niveau",
  "Envie",
  "Accessibilité",
  "Intensité",
];

export default function HomePage() {
  return (
    <main className="bg-[#F7F6F5] text-black">
      <HeroSection />
      <AboutSection />
      <WhoWeAreSection />
      <FindSportSection />
      <PartnersSection />
      <BenefitsSection />
      <FinalCtaSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="px-5 pb-8 pt-6 sm:px-8 md:px-10 lg:px-16 lg:pb-12 lg:pt-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-6">
          <div className="grid gap-4">
            <span className="inline-flex w-fit rounded-full bg-[#B7E64C] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-black">
              Festival sportif inclusif
            </span>

            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
              Trouvez le sport qui vous correspond
            </h1>

            <p className="max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Solimouv’ vous aide à découvrir des activités sportives accessibles,
              inclusives et adaptées à votre niveau, votre envie et votre rythme.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/questionnaire"
              className="inline-flex min-h-[56px] items-center justify-center rounded-2xl bg-[#FF6B4A] px-6 text-base font-semibold text-white transition hover:opacity-90"
            >
              Trouver mon sport
            </Link>

            <Link
              href="/programme"
              className="inline-flex min-h-[56px] items-center justify-center rounded-2xl border border-black/10 bg-white px-6 text-base font-semibold text-[#5C2C4F] transition hover:bg-[#F1EFED]"
            >
              Découvrir les activités
            </Link>
          </div>
        </div>

        <div className="grid">
          <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white p-5 shadow-[0_16px_50px_rgba(0,0,0,0.06)] sm:p-7">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#FF6B4A]/15 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-[#B7E64C]/20 blur-2xl" />

            <div className="relative grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[24px] bg-[#F7F6F5] p-4">
                  <div className="mb-3 h-28 rounded-[20px] bg-[#FF6B4A]" />
                  <p className="text-sm font-bold text-[#5C2C4F]">Tous niveaux</p>
                </div>

                <div className="rounded-[24px] bg-[#F7F6F5] p-4">
                  <div className="mb-3 h-28 rounded-[20px] bg-[#B7E64C]" />
                  <p className="text-sm font-bold text-[#5C2C4F]">Accessibilité</p>
                </div>
              </div>

              <div className="rounded-[24px] bg-[#5C2C4F] p-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                  Solimouv’
                </p>
                <p className="mt-2 text-lg font-semibold leading-7">
                  Un festival pensé pour la diversité des corps, des pratiques et
                  des parcours.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <MiniBadge label="Inclusif" />
                <MiniBadge label="Accessible" />
                <MiniBadge label="Guidé" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
<HomeRecommendations />
function AboutSection() {
  return (
    <section className="px-5 py-8 sm:px-8 md:px-10 lg:px-16 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
            À propos de Solimouv’
          </p>
          <h2 className="text-3xl font-black uppercase leading-[0.95] sm:text-4xl">
            Un festival dédié au sport inclusif à Paris
          </h2>
        </div>

        <div className="grid gap-4 text-sm leading-7 text-black/75 sm:text-base">
          <p>
            Solimouv’ est un événement imaginé pour rendre le sport plus
            accessible, plus lisible et plus accueillant pour toutes et tous.
          </p>
          <p>
            Le festival met en avant la diversité des pratiques sportives, des
            niveaux, des envies et des publics. L’objectif est simple :
            permettre à chacun de trouver une activité adaptée à sa réalité, à
            son énergie et à ses besoins.
          </p>
          <p>
            À travers une approche inclusive, pédagogique et inspirante,
            Solimouv’ valorise une autre façon de découvrir le sport : plus
            ouverte, plus humaine et plus accessible.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <section className="px-5 py-8 sm:px-8 md:px-10 lg:px-16 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8">
          <div className="grid gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
              Qui sommes-nous ?
            </p>
            <h2 className="text-3xl font-black uppercase leading-[0.95] sm:text-4xl">
              Up Sport!
            </h2>
          </div>

          <div className="grid gap-4 text-sm leading-7 text-black/75 sm:text-base">
            <p>
              Up Sport! est une association qui utilise le sport comme levier
              d’inclusion sociale. Son action s’adresse à des publics variés et
              vise à créer des espaces de pratique plus ouverts, plus justes et
              plus accessibles.
            </p>
            <p>
              À travers Solimouv’, l’association valorise une vision du sport
              fondée sur la solidarité, l’accessibilité, la diversité des
              parcours et l’impact social positif.
            </p>
          </div>
        </div>

        <div className="grid gap-4 rounded-[32px] border border-black/10 bg-[#5C2C4F] p-6 text-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            Nos valeurs
          </p>

          <div className="grid gap-3">
            <ValueChip label="Solidarité" />
            <ValueChip label="Accessibilité" />
            <ValueChip label="Impact social" />
            <ValueChip label="Inclusion" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FindSportSection() {
  return (
    <section className="px-5 py-8 sm:px-8 md:px-10 lg:px-16 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8 lg:grid-cols-[1fr_1fr]">
        <div className="grid gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
            Trouver son sport
          </p>

          <h2 className="text-3xl font-black uppercase leading-[0.95] sm:text-4xl">
            Une expérience guidée et personnalisée
          </h2>

          <p className="max-w-xl text-sm leading-7 text-black/75 sm:text-base">
            La PWA Solimouv’ vous accompagne dans un parcours simple pour vous
            recommander des activités selon votre profil, votre envie, votre
            niveau et vos besoins en accessibilité.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/questionnaire"
              className="inline-flex min-h-[54px] items-center justify-center rounded-2xl bg-[#FF6B4A] px-6 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Commencer
            </Link>

            <Link
              href="/programme"
              className="inline-flex min-h-[54px] items-center justify-center rounded-2xl border border-black/10 bg-[#F7F6F5] px-6 text-sm font-semibold text-[#5C2C4F] transition hover:bg-[#F1EFED]"
            >
              Explorer les sports
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[24px] bg-[#F7F6F5] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5C2C4F]">
              Filtres possibles
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {filters.map((filter) => (
                <span
                  key={filter}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black"
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-black/10 bg-[#FFF1EC] p-5">
            <p className="text-base font-bold text-[#5C2C4F]">
              Approche ludique et inclusive
            </p>
            <p className="mt-2 text-sm leading-6 text-black/75">
              Répondez à quelques questions simples pour découvrir les activités
              les plus pertinentes pour vous.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="overflow-hidden px-5 py-8 sm:px-8 md:px-10 lg:px-16 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-6">
        <div className="grid gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
            Nos partenaires
          </p>
          <h2 className="text-3xl font-black uppercase leading-[0.95] sm:text-4xl">
            Un réseau engagé autour du sport inclusif
          </h2>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-black/10 bg-white py-5 shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
          <div className="flex w-max animate-[scroll_32s_linear_infinite] gap-4 px-4">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex min-h-[64px] min-w-[220px] items-center justify-center rounded-[20px] border border-black/10 bg-[#F7F6F5] px-5 py-4 text-center text-sm font-semibold text-[#5C2C4F]"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="px-5 py-8 sm:px-8 md:px-10 lg:px-16 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-6">
        <div className="grid gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
            Pourquoi participer ?
          </p>
          <h2 className="text-3xl font-black uppercase leading-[0.95] sm:text-4xl">
            Une expérience ouverte à tous les rythmes
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="grid gap-4 rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B7E64C] text-base font-black text-black">
                {index + 1}
              </div>

              <div className="grid gap-2">
                <h3 className="text-lg font-bold text-[#5C2C4F]">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-6 text-black/70">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="px-5 py-8 sm:px-8 md:px-10 lg:px-16 lg:py-12">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-[#5C2C4F] p-6 text-white shadow-[0_16px_50px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Rejoindre Solimouv’
            </p>
            <h2 className="text-3xl font-black uppercase leading-[0.95] sm:text-4xl">
              Participez à un festival pensé pour vous
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Découvrez des sports, rencontrez des associations engagées et
              vivez une expérience inclusive, accessible et guidée.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/programme"
              className="inline-flex min-h-[56px] items-center justify-center rounded-2xl bg-[#FF6B4A] px-6 text-base font-semibold text-white transition hover:opacity-90"
            >
              Participer au festival
            </Link>

            <Link
              href="/questionnaire"
              className="inline-flex min-h-[56px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 text-base font-semibold text-white transition hover:bg-white/15"
            >
              Trouver mon sport
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniBadge({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-black/10 bg-white px-4 py-3 text-center text-sm font-semibold text-[#5C2C4F]">
      {label}
    </div>
  );
}

function ValueChip({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white">
      {label}
    </div>
  );
}