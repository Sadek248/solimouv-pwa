"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function InscriptionPage() {
  const router = useRouter();

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState("");
  const [succes, setSucces] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErreur("");
    setSucces("");

    const nomTrim = nom.trim();
    const prenomTrim = prenom.trim();
    const emailTrim = email.trim().toLowerCase();
    const telephoneTrim = telephone.trim();
    const fullName = `${prenomTrim} ${nomTrim}`.trim();

    if (!nomTrim || !prenomTrim || !emailTrim || !telephoneTrim || !motDePasse) {
      setErreur("Veuillez remplir tous les champs.");
      return;
    }

    if (motDePasse.length < 6) {
      setErreur("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    try {
      setLoading(true);

      const supabase = createClient();

      const { data, error } = await supabase.auth.signUp({
        email: emailTrim,
        password: motDePasse,
        options: {
          data: {
            nom: nomTrim,
            prenom: prenomTrim,
            full_name: fullName,
            telephone: telephoneTrim,
            role: "user",
          },
        },
      });

      if (error) {
        setErreur(error.message);
        return;
      }

      if (!data.user) {
        setErreur("Impossible de créer le compte.");
        return;
      }

      if (!data.session) {
        setSucces("Compte créé. Vérifiez votre email pour confirmer votre inscription.");
        return;
      }

      router.push("/questionnaire");
    } catch (error) {
      console.error("Erreur inscription :", error);
      setErreur("Une erreur est survenue pendant l'inscription.");
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
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="nom"
              label="Nom"
              value={nom}
              onChange={setNom}
              autoComplete="family-name"
              placeholder="Votre nom"
            />
            <Field
              id="prenom"
              label="Prénom"
              value={prenom}
              onChange={setPrenom}
              autoComplete="given-name"
              placeholder="Votre prénom"
            />
          </div>

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
            id="telephone"
            label="Tél."
            type="tel"
            value={telephone}
            onChange={setTelephone}
            autoComplete="tel"
            placeholder="06 00 00 00 00"
          />

          <Field
            id="motDePasse"
            label="Mot de passe"
            type="password"
            value={motDePasse}
            onChange={setMotDePasse}
            autoComplete="new-password"
            placeholder="Minimum 6 caractères"
          />

          {erreur && (
            <div className="rounded-2xl border border-[#FF6B4A]/30 bg-[#FF6B4A]/10 px-4 py-3 text-sm text-[#5C2C4F]">
              {erreur}
            </div>
          )}

          {succes && (
            <div className="rounded-2xl border border-[#B7E64C]/40 bg-[#B7E64C]/15 px-4 py-3 text-sm text-black">
              {succes}
            </div>
          )}

          <div className="grid gap-4 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex min-h-[56px] items-center justify-center logirounded-2xl bg-[#FF6B4A] px-6 text-base font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Création..." : "Créer un compte"}
            </button>

            <p className="text-center text-sm text-black/70">
              Tu as un compte ?{" "}
              <Link
                href="/connexion"
                className="font-semibold text-[#5C2C4F] underline underline-offset-4"
              >
                Se connecter
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