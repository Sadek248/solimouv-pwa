import Link from "next/link";

const links = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/programme", label: "Programme" },
    { href: "/associations", label: "Associations" },
    { href: "/contact", label: "Contact" },
    { href: "/lp", label: "LP" },
];

export default function Navbar() {
    return (
        <header className="border-b bg-white">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <Link href="/" className="text-xl font-bold">
                    Solimouv'
                </Link>

                <div className="flex gap-4">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}