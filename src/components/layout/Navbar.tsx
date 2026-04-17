"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import LogoutButton from "./LogoutButton";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/programme", label: "Programme" },
  { href: "/profile", label: "Profil" },
];

type AuthUser = {
  id: string;
  email?: string;
} | null;

export default function Navbar() {
  const [user, setUser] = useState<AuthUser>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(
        user
          ? {
              id: user.id,
              email: user.email,
            }
          : null
      );
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(
        session?.user
          ? {
              id: session.user.id,
              email: session.user.email,
            }
          : null
      );
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F7F6F5]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 md:px-10 lg:px-16">
        <Link
          href="/"
          className="shrink-0"
          onClick={closeMenu}
          aria-label="Retour à l’accueil"
        >
          <Image
            src="/images/logo-solimouv.png"
            alt="Logo Solimouv"
            width={58}
            height={58}
            priority
            className="h-auto w-[44px] sm:w-[48px] md:w-[58px]"
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-black transition hover:text-[#FF6B4A]"
            >
              {link.label}
            </Link>
          ))}

          {user ? (
            <div className="flex items-center gap-4">
              <Link
                href="/admin"
                className="rounded-full bg-[#B7E64C] px-4 py-2 text-sm font-bold text-black transition hover:opacity-90"
              >
                Dashboard
              </Link>
              <LogoutButton />
            </div>
          ) : (
            <Link
              href="/connexion"
              className="rounded-full bg-[#FF6B4A] px-4 py-2 text-sm font-bold text-white transition hover:opacity-90"
            >
              Connexion
            </Link>
          )}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white text-[#5C2C4F] transition hover:bg-[#F1EFED] lg:hidden"
        >
          <span className="relative block h-5 w-6">
            <span
              className={[
                "absolute left-0 top-0 h-[2px] w-6 rounded-full bg-current transition",
                isOpen ? "translate-y-[9px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[9px] h-[2px] w-6 rounded-full bg-current transition",
                isOpen ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[18px] h-[2px] w-6 rounded-full bg-current transition",
                isOpen ? "-translate-y-[9px] -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-black/10 bg-[#F7F6F5] lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3 px-5 py-4 sm:px-8 md:px-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#F1EFED]"
              >
                {link.label}
              </Link>
            ))}

            {user ? (
              <div className="grid gap-3 pt-2">
                <Link
                  href="/admin"
                  onClick={closeMenu}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-[#B7E64C] px-4 text-sm font-bold text-black transition hover:opacity-90"
                >
                  Dashboard
                </Link>
                <div onClick={closeMenu}>
                  <LogoutButton />
                </div>
              </div>
            ) : (
              <Link
                href="/connexion"
                onClick={closeMenu}
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-[#FF6B4A] px-4 text-sm font-bold text-white transition hover:opacity-90"
              >
                Connexion
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}