import { notFound } from "next/navigation";
import Link from "next/link";
import { programmeData } from "@/data/programme";
import EventRegistrationBox from "@/components/programme/EventRegistrationBox";

type Props = {
    params: {
        id: string;
    };
};

export default function ProgrammeDetailPage({ params }: Props) {
    const { id } = params;

    const event = programmeData.find((item) => item.id === id);

    if (!event) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#F7F6F5] text-black">
            <section className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8 md:px-10 lg:px-16 lg:py-10">

                {/* 🔙 Retour */}
                <div className="mb-6">
                    <Link
                        href="/programme"
                        className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#5C2C4F] transition hover:bg-[#F1EFED]"
                    >
                        ← Retour au programme
                    </Link>
                </div>

                {/* 📦 CARD */}
                <article className="grid gap-8 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8">

                    {/* 🧠 HEADER */}
                    <header className="grid gap-5">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-[#FFF1EC] px-4 py-2 text-sm font-semibold text-[#FF6B4A]">
                                {event.time}
                            </span>

                            <span className="rounded-full bg-[#EFE5EC] px-4 py-2 text-sm font-semibold text-[#5C2C4F]">
                                {event.audience}
                            </span>

                            <span className="rounded-full bg-[#E5F4B9] px-4 py-2 text-sm font-semibold text-black">
                                {event.category}
                            </span>
                        </div>

                        <div className="grid gap-3">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
                                Activité Solimouv’
                            </p>

                            <h1 className="text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
                                {event.title}
                            </h1>

                            <p className="text-lg leading-8 text-black/75">
                                {event.description}
                            </p>
                        </div>
                    </header>

                    {/* 🧩 CONTENT */}
                    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

                        {/* LEFT */}
                        <div className="grid gap-6">

                            {/* 📄 À propos */}
                            <div className="rounded-[24px] bg-[#F7F6F5] p-6">
                                <h2 className="text-xl font-black uppercase">À propos</h2>
                                <p className="mt-4 text-base leading-8 text-black/80">
                                    {event.longDescription}
                                </p>
                            </div>

                            {/* 📌 Infos */}
                            <div className="rounded-[24px] bg-[#F7F6F5] p-6">
                                <h2 className="text-xl font-black uppercase">
                                    Informations clés
                                </h2>

                                <div className="mt-4 grid gap-3 text-base text-black/80">
                                    <p>
                                        <span className="font-semibold">Horaire :</span>{" "}
                                        {event.time}
                                    </p>

                                    <p>
                                        <span className="font-semibold">Lieu :</span>{" "}
                                        {event.location}
                                    </p>

                                    <p>
                                        <span className="font-semibold">Public :</span>{" "}
                                        {event.audience}
                                    </p>

                                    <p>
                                        <span className="font-semibold">Sport :</span>{" "}
                                        {event.sport}
                                    </p>
                                </div>
                            </div>

                            {/* 🏷️ Tags */}
                            <div className="rounded-[24px] bg-[#F7F6F5] p-6">
                                <h2 className="text-xl font-black uppercase">Mots-clés</h2>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {event.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-[#5C2C4F]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <aside>
                            <EventRegistrationBox
                                eventTitle={event.title}
                                eventId={event.id}
                            />
                        </aside>

                    </div>
                </article>
            </section>
        </main>
    );
}