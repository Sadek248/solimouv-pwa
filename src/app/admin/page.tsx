"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const supabase = createClient();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/connexion");
        return;
      }

      const { data: profile, error } = await supabase
        .schema("app")
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error || !profile) {
        router.push("/");
        return;
      }

      if (profile.role !== "admin") {
        router.push("/");
        return;
      }

      setAuthorized(true);
      setLoading(false);
    };

    checkAccess();
  }, [router, supabase]);

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-12">
        <p>Chargement...</p>
      </main>
    );
  }

  if (!authorized) return null;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold">Dashboard administrateur</h1>
      <p className="mt-4 text-gray-700">
        Espace réservé aux organisateurs et à l’administration de Solimouv'.
      </p>
    </main>
  );
}