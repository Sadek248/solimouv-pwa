"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ConnexionPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErreur("");

    const emailTrim = email.trim().toLowerCase();

    if (!emailTrim || !motDePasse) {
      setErreur("Veuillez remplir tous les champs.");
      return;
    }

    try {
      setLoading(true);

      const supabase = createClient();

      const { error } = await supabase.auth.signInWithPassword({
        email: emailTrim,
        password: motDePasse,
      });

      if (error) {
        setErreur("Email ou mot de passe incorrect.");
        return;
      }

      router.push("/questionnaire");
    } catch (error) {
      console.error("Erreur connexion :", error);
      setErreur("Une erreur est survenue pendant la connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F6F5] text-black">
      <section className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-5 py-6 sm:px-8 sm:py-8 md:px-10">
        <div className="mb-8">
          <Image
            src="/images/logo-solimouv.png"
            alt="Logo Solimouv"
            width={70}
            height={70}
            priority
            className="h-auto w-[52px] sm:w-[60px] md:w-[70px]"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-[32px] border border-black/10 bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-7 md:p-8"
        >
          <Field
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            autoComplete="email"
            placeholder="exemple@email.com"
          />

          <Field
            id="motDePasse"
            label="Mot de passe"
            type="password"
            value={motDePasse}
            onChange={setMotDePasse}
            autoComplete="current-password"
            placeholder="Votre mot de passe"
          />

          {erreur && (
            <div className="rounded-2xl border border-[#FF6B4A]/30 bg-[#FF6B4A]/10 px-4 py-3 text-sm text-[#5C2C4F]">
              {erreur}
            </div>
          )}

          <div className="grid gap-4 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex min-h-[56px] items-center justify-center rounded-2xl bg-[#FF6B4A] px-6 text-base font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>

            <p className="text-center text-sm text-black/70">
              Pas de compte ?{" "}
              <Link
                href="/inscription"
                className="font-semibold text-[#5C2C4F] underline underline-offset-4"
              >
                S’inscrire
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
};

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  placeholder,
}: FieldProps) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-black">
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="h-14 rounded-2xl border border-black/10 bg-[#F7F6F5] px-4 text-[15px] text-black outline-none transition placeholder:text-black/35 focus:border-[#5C2C4F] focus:bg-white"
      />
    </div>
  );
}