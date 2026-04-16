export default function ContactPage() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-12">
            <h1 className="text-4xl font-bold">Contact</h1>

            <p className="mt-4 text-gray-700">
                Une question, une envie de participer ou de devenir partenaire ? Contactez-nous.
            </p>

            <form className="mt-8 space-y-6 rounded-2xl border border-gray-200 p-6">
                <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Nom
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        placeholder="Votre nom"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        placeholder="votre@email.com"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        placeholder="Votre message"
                    />
                </div>

                <button
                    type="submit"
                    className="rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90"
                >
                    Envoyer
                </button>
            </form>
        </main>
    );
}