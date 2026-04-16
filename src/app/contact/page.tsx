"use client";

import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setStatus("loading");
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Erreur inconnue");
            }

            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch (err: any) {
            setStatus("error");
            setError(err.message);
        }
    };

    return (
        <main className="mx-auto max-w-3xl px-4 py-12">
            <h1 className="text-4xl font-bold">Contact</h1>

            <p className="mt-4 text-gray-700">
                Une question, une envie de participer ou de devenir partenaire ? Contactez-nous.
            </p>

            <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6 rounded-2xl border border-gray-200 p-6"
            >
                <div>
                    <label className="mb-2 block text-sm font-medium">Nom</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3"
                        required
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3"
                        required
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">Message</label>
                    <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="rounded-xl bg-black px-5 py-3 text-white"
                >
                    {status === "loading" ? "Envoi..." : "Envoyer"}
                </button>

                {status === "success" && (
                    <p className="text-green-600">Message envoyé avec succès ✅</p>
                )}

                {status === "error" && (
                    <p className="text-red-600">{error}</p>
                )}
            </form>
        </main>
    );
}