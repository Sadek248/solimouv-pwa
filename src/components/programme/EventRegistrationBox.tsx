"use client";

import { useEffect, useState } from "react";

type Props = {
  eventTitle: string;
  eventId: string;
};

export default function EventRegistrationBox({
  eventTitle,
  eventId,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("registrations");
    if (!stored) return;

    try {
      const parsed: string[] = JSON.parse(stored);
      setIsRegistered(parsed.includes(eventId));
    } catch (error) {
      console.error("Erreur lecture inscriptions :", error);
    }
  }, [eventId]);

  const handleConfirm = () => {
    try {
      const stored = localStorage.getItem("registrations");
      const parsed: string[] = stored ? JSON.parse(stored) : [];

      const updated = parsed.includes(eventId) ? parsed : [...parsed, eventId];

      localStorage.setItem("registrations", JSON.stringify(updated));
      setIsRegistered(true);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Erreur inscription :", error);
    }
  };

  const handleUnregister = () => {
    try {
      const stored = localStorage.getItem("registrations");
      const parsed: string[] = stored ? JSON.parse(stored) : [];

      const updated = parsed.filter((id) => id !== eventId);

      localStorage.setItem("registrations", JSON.stringify(updated));
      setIsRegistered(false);
    } catch (error) {
      console.error("Erreur désinscription :", error);
    }
  };

  return (
    <>
      <div className="sticky top-24 grid gap-5 rounded-[28px] border border-black/10 bg-[#5C2C4F] p-6 text-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Participation
        </p>

        <h2 className="text-2xl font-black uppercase leading-tight">
          {isRegistered ? "Inscription confirmée" : "Réserver votre place"}
        </h2>

        <p className="text-base leading-7 text-white/80">
          {isRegistered
            ? `Vous êtes inscrit à "${eventTitle}".`
            : "Inscrivez-vous à cette activité en deux étapes pour éviter les clics involontaires."}
        </p>

        {!isRegistered ? (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex min-h-[54px] items-center justify-center rounded-2xl bg-[#FF6B4A] px-6 text-base font-semibold text-white transition hover:opacity-90"
          >
            S’inscrire
          </button>
        ) : (
          <button
            type="button"
            onClick={handleUnregister}
            className="inline-flex min-h-[54px] items-center justify-center rounded-2xl border border-white/30 px-6 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Se désinscrire
          </button>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/45 px-4">
          <div className="w-full max-w-md rounded-[28px] bg-white p-6 text-black shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <div className="grid gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
                Confirmation
              </p>

              <h3 className="text-2xl font-black uppercase leading-tight">
                Confirmer l’inscription ?
              </h3>

              <p className="text-base leading-7 text-black/75">
                Vous allez vous inscrire à l’activité{" "}
                <span className="font-semibold">{eventTitle}</span>.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-black/10 bg-white px-5 text-sm font-semibold text-[#5C2C4F] transition hover:bg-[#F1EFED]"
                >
                  Annuler
                </button>

                <button
                  type="button"
                  onClick={handleConfirm}
                  className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#FF6B4A] px-5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}