import ProgrammeCard from "@/components/sections/ProgrammeCard";
import { programmeData } from "@/data/programme";

export default function ProgrammePage() {
  return (
    <main className="min-h-screen bg-[#F7F6F5] text-black">
      <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 md:px-10 lg:px-16 lg:py-10">
        <header className="grid gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
            Festival Solimouv’
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.9] sm:text-6xl">
            Programme
          </h1>

          <p className="max-w-4xl text-lg leading-8 text-black/70">
            Découvrez les ateliers, initiations et temps forts du festival
            Solimouv’. Explorez les activités selon vos envies, votre niveau et
            votre rythme.
          </p>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programmeData.map((item) => (
            <ProgrammeCard key={item.id} item={item} />
          ))}
        </section>
      </section>
    </main>
  );
}