"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type QuizOption = {
  id: string;
  label: string;
  description?: string;
};

type QuizQuestion = {
  id: string;
  title: string;
  subtitle: string;
  options: QuizOption[];
};

const QUESTIONS: QuizQuestion[] = [
  {
    id: "mobility",
    title: "Comment pouvez-vous vous déplacer ?",
    subtitle: "Mobilité",
    options: [
      { id: "walking", label: "En marchant / debout" },
      { id: "wheelchair", label: "En fauteuil roulant" },
      { id: "mobility_aid", label: "Avec une aide à la mobilité" },
    ],
  },
  {
    id: "intensity",
    title: "Quel est votre objectif principal ?",
    subtitle: "Intensité",
    options: [
      {
        id: "zen",
        label: "Zen",
        description: "Détente et bien-être mental",
      },
      {
        id: "tonic",
        label: "Tonique",
        description: "Remise en forme douce",
      },
      {
        id: "explosive",
        label: "Explosif",
        description: "Me défouler et transpirer",
      },
      {
        id: "challenge",
        label: "Défi",
        description: "Dépasser mes limites et performer",
      },
    ],
  },
  {
    id: "social_environment",
    title: "Le sport pour vous, c’est plutôt...",
    subtitle: "Environnement social",
    options: [
      {
        id: "solo",
        label: "Seul(e)",
        description: "Pour se retrouver avec soi-même",
      },
      {
        id: "duo_small_group",
        label: "En duo ou petit groupe",
      },
      {
        id: "team",
        label: "En équipe",
        description: "Pour des sports collectifs",
      },
    ],
  },
  {
    id: "time_factor",
    title: "De combien de temps disposez-vous pour votre découverte ?",
    subtitle: "Facteur temps",
    options: [
      {
        id: "flash",
        label: "Flash",
        description: "Moins de 30 min",
      },
      {
        id: "classic",
        label: "Classique",
        description: "Entre 30 min et 1h30",
      },
      {
        id: "immersive",
        label: "Immersif",
        description: "1h30 et plus",
      },
    ],
  },
  {
    id: "sensory_affinities",
    title: "Qu'est-ce qui vous attire le plus dans une activité ?",
    subtitle: "Affinités sensorielles",
    options: [
      {
        id: "water",
        label: "L'Eau",
        description: "Sensations de légèreté",
      },
      {
        id: "ball",
        label: "Le Ballon",
        description: "Tactique et jeu collectif",
      },
      {
        id: "speed",
        label: "La Vitesse",
        description: "Adrénaline et mouvement",
      },
      {
        id: "precision",
        label: "La Précision",
        description: "Concentration et calme",
      },
    ],
  },
  {
    id: "experience",
    title: "Quelle est votre relation actuelle avec le sport ?",
    subtitle: "Expérience",
    options: [
      {
        id: "curious",
        label: "Curieux(se)",
        description: "Je n'en fais pas, je veux découvrir",
      },
      {
        id: "amateur",
        label: "Amateur",
        description: "Je pratique de temps en temps",
      },
      {
        id: "addicted",
        label: "Accro",
        description: "Je ne peux pas m'en passer !",
      },
    ],
  },
];

type Answers = Record<string, string>;

export default function QuestionnairePage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = QUESTIONS[step];
  const currentAnswer = answers[currentQuestion.id];
  const isLastStep = step === QUESTIONS.length - 1;

  const progress = useMemo(() => {
    return Math.round(((step + 1) / QUESTIONS.length) * 100);
  }, [step]);

  const handleSelect = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (!currentAnswer) return;
    if (!isLastStep) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (step === 0) return;
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    if (!currentAnswer) return;

    try {
      setIsSubmitting(true);

      const payload = {
        mobility: answers.mobility,
        intensity: answers.intensity,
        social_environment: answers.social_environment,
        time_factor: answers.time_factor,
        sensory_affinities: answers.sensory_affinities,
        experience: answers.experience,
      };

      console.log("Réponses questionnaire :", payload);

      router.push("/dashboard");
    } catch (error) {
      console.error("Erreur lors de l'envoi du questionnaire :", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F6F5] text-black">
      <section className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-5 py-6 sm:px-8 sm:py-8 md:px-10">
        <div className="mb-6 grid gap-4">
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex w-fit rounded-full bg-[#B7E64C] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-black">
              Questionnaire
            </span>

            <span className="text-sm font-semibold text-[#5C2C4F]">
              Étape {step + 1} / {QUESTIONS.length}
            </span>
          </div>

          <div className="h-3 w-full overflow-hidden rounded-full bg-black/10">
            <div
              className="h-full rounded-full bg-[#FF6B4A] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid flex-1 content-between gap-6 rounded-[32px] border border-black/10 bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-7 md:p-8">
          <header className="grid gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
              {currentQuestion.subtitle}
            </p>

            <h1 className="text-3xl font-black uppercase leading-[0.95] sm:text-4xl md:text-5xl">
              {currentQuestion.title}
            </h1>

            <p className="max-w-2xl text-sm leading-6 text-black/65 sm:text-base">
              Choisissez une seule réponse pour nous aider à vous proposer des
              activités adaptées à votre profil.
            </p>
          </header>

          <section className="grid gap-4">
            {currentQuestion.options.map((option) => {
              const isSelected = currentAnswer === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelect(option.id)}
                  className={[
                    "grid w-full rounded-[24px] border p-5 text-left transition",
                    "min-h-[88px] sm:min-h-[96px]",
                    isSelected
                      ? "border-[#FF6B4A] bg-[#FFF1EC] shadow-[0_8px_24px_rgba(255,107,74,0.14)]"
                      : "border-black/10 bg-[#F7F6F5] hover:border-[#5C2C4F]/30 hover:bg-white",
                  ].join(" ")}
                >
                  <div className="grid gap-1">
                    <span
                      className={[
                        "text-base font-bold sm:text-lg",
                        isSelected ? "text-[#5C2C4F]" : "text-black",
                      ].join(" ")}
                    >
                      {option.label}
                    </span>

                    {option.description && (
                      <span
                        className={[
                          "text-sm leading-6",
                          isSelected ? "text-[#5C2C4F]/80" : "text-black/60",
                        ].join(" ")}
                      >
                        {option.description}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </section>

          <footer className="grid gap-4 border-t border-black/10 pt-6">
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={step === 0}
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-black/10 bg-white px-5 text-sm font-semibold text-[#5C2C4F] transition hover:bg-[#F7F6F5] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Précédent
              </button>

              {!isLastStep ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!currentAnswer}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#FF6B4A] px-6 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Suivant
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!currentAnswer || isSubmitting}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#FF6B4A] px-6 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Envoi..." : "Terminer"}
                </button>
              )}
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}