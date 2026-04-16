"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import LogoutButton from "./LogoutButton";

const links = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/programme", label: "Programme" },
    { href: "/associations", label: "Associations" },
    { href: "/contact", label: "Contact" },
    { href: "/lp", label: "LP" },
];

type AuthUser = {
    id: string;
    email?: string;
} | null;

export default function Navbar() {
    const [user, setUser] = useState<AuthUser>(null);

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

    return (
        <header className="border-b bg-white">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <Link href="/" className="text-xl font-bold">
                    Solimouv'
                </Link>

                <div className="flex items-center gap-4">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:underline">
                            {link.label}
                        </Link>
                    ))}

                    {user ? (
                        <>
                            <Link href="/admin" className="hover:underline">
                                Dashboard
                            </Link>
                            <LogoutButton />
                        </>
                    ) : (
                        <Link href="/connexion" className="hover:underline">
                            Connexion
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
}