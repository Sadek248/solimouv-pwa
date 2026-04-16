import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#F7F6F5] text-black">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-10 sm:px-8 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-16">
        <div className="grid content-start gap-4">
          <Image
            src="/images/logo-solimouv.png"
            alt="Logo Solimouv"
            width={72}
            height={72}
            className="h-auto w-[56px] sm:w-[64px] md:w-[72px]"
          />

          <div className="grid gap-3">
            <p className="text-lg font-black uppercase leading-none text-[#5C2C4F]">
              Solimouv’
            </p>

            <p className="max-w-md text-sm leading-6 text-black/70 sm:text-base">
              Une expérience simple et accessible pour découvrir des activités
              sportives adaptées à chacun.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#5C2C4F]">
            Contact
          </h3>

          <form className="grid gap-4 rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-6">
            <div className="grid gap-2">
              <label htmlFor="footer-email" className="text-sm font-semibold text-black">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="exemple@email.com"
                className="h-12 rounded-2xl border border-black/10 bg-[#F7F6F5] px-4 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#5C2C4F] focus:bg-white"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="footer-message" className="text-sm font-semibold text-black">
                Message
              </label>
              <textarea
                id="footer-message"
                rows={4}
                placeholder="Votre message"
                className="resize-none rounded-2xl border border-black/10 bg-[#F7F6F5] px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#5C2C4F] focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-[48px] w-fit items-center justify-center rounded-2xl bg-[#FF6B4A] px-5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Envoyer
            </button>
          </form>

          <div className="grid gap-3 text-sm leading-6 text-black/70 sm:text-base">
            <Link href="/mentions-legales" className="transition hover:text-[#FF6B4A]">
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="transition hover:text-[#FF6B4A]"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-4 text-xs text-black/55 sm:px-8 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
          <p>© 2026 Solimouv’. Tous droits réservés.</p>
          <p>Conçu dans une logique accessible et responsive.</p>
        </div>
      </div>
    </footer>
  );
}