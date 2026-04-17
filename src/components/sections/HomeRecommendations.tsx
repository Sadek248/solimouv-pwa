"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Sport =
  | "badminton"
  | "natation"
  | "football"
  | "yoga"
  | "course_a_pied"
  | "gateball";

type RecommendationResult = {
  scores: Record<Sport, number>;
  top3: Array<{ sport: Sport; score: number }>;
  profileLabel: string;
};

const SPORT_LABELS: Record<Sport, string> = {
  badminton: "Badminton",
  natation: "Natation",
  football: "Football",
  yoga: "Yoga",
  course_a_pied: "Course à pied",
  gateball: "Gateball",
};

export default function HomeRecommendations() {
  const [recommendation, setRecommendation] =
    useState<RecommendationResult | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("quiz_recommendation");
    if (!stored) return;

    try {
      setRecommendation(JSON.parse(stored));
    } catch (error) {
      console.error("Erreur de lecture des recommandations :", error);
    }
  }, []);

  const programmeHref = useMemo(() => {
    if (!recommendation?.top3?.length) return "/programme";

    const reco = recommendation.top3.map((item) => item.sport).join(",");
    return `/programme?reco=${encodeURIComponent(reco)}`;
  }, [recommendation]);

  if (!recommendation) return null;

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 md:px-10 lg:px-16">
      <div className="grid gap-6 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] md:p-8">
        <div className="grid gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
            Recommandations personnalisées
          </p>

          <h2 className="text-3xl font-black uppercase leading-[0.95] sm:text-4xl">
            Vos sports conseillés
          </h2>

          <p className="max-w-3xl text-sm leading-7 text-black/65 sm:text-base">
            Ton profil :{" "}
            <span className="font-semibold text-[#5C2C4F]">
              {recommendation.profileLabel}
            </span>
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {recommendation.top3.map((item, index) => (
            <article
              key={item.sport}
              className="grid gap-2 rounded-[24px] border border-black/10 bg-[#F7F6F5] p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5C2C4F]">
                Top {index + 1}
              </p>
              <h3 className="text-xl font-black uppercase">
                {SPORT_LABELS[item.sport]}
              </h3>
              <p className="text-sm text-black/60">Score : {item.score}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={programmeHref}
            className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#FF6B4A] px-6 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Voir les programmes recommandés
          </Link>

          <Link
            href="/questionnaire"
            className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-black/10 bg-white px-6 text-sm font-semibold text-[#5C2C4F] transition hover:bg-[#F7F6F5]"
          >
            Refaire le questionnaire
          </Link>
        </div>
      </div>
    </section>
  );
}