import Link from "next/link";

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F5] px-5 py-8 text-black sm:px-8 md:px-10 lg:px-16">
      <section className="mx-auto grid w-full max-w-4xl gap-6">
        <header className="grid gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
            Informations légales
          </p>
          <h1 className="text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
            Mentions légales
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-black/65 sm:text-base">
            Retrouvez ici les informations légales relatives au site et à la PWA
            Solimouv’.
          </p>
        </header>

        <div className="grid gap-5 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8">
          <LegalSection title="Éditeur du site">
            <p>
              Le présent site / application Solimouv’ est édité par :
            </p>
            <p>
              <strong>Association / structure :</strong> [Nom officiel de
              l’association]
            </p>
            <p>
              <strong>Forme juridique :</strong> [Association loi 1901, etc.]
            </p>
            <p>
              <strong>Adresse :</strong> [Adresse complète]
            </p>
            <p>
              <strong>Email :</strong> [Adresse email de contact]
            </p>
            <p>
              <strong>Téléphone :</strong> [Numéro de téléphone]
            </p>
            <p>
              <strong>Responsable de la publication :</strong> [Nom / fonction]
            </p>
          </LegalSection>

          <LegalSection title="Hébergement">
            <p>
              Le site / l’application est hébergé par :
            </p>
            <p>
              <strong>Hébergeur :</strong> [Nom de l’hébergeur]
            </p>
            <p>
              <strong>Adresse :</strong> [Adresse de l’hébergeur]
            </p>
            <p>
              <strong>Site web :</strong> [URL de l’hébergeur]
            </p>
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              L’ensemble des contenus présents sur ce site / cette application,
              notamment les textes, visuels, éléments graphiques, logos,
              icônes, illustrations, composants d’interface et éléments
              techniques, est protégé par les dispositions en vigueur relatives
              à la propriété intellectuelle.
            </p>
            <p>
              Sauf mention contraire, ces éléments sont la propriété exclusive
              de l’éditeur ou font l’objet d’une autorisation d’utilisation.
              Toute reproduction, représentation, adaptation, diffusion ou
              exploitation, totale ou partielle, sans autorisation préalable,
              est interdite.
            </p>
          </LegalSection>

          <LegalSection title="Responsabilité">
            <p>
              L’éditeur s’efforce de fournir des informations aussi claires,
              exactes et à jour que possible. Toutefois, il ne saurait garantir
              l’exactitude, l’exhaustivité ou l’actualité de l’ensemble des
              contenus publiés.
            </p>
            <p>
              L’utilisateur reconnaît utiliser le site / l’application sous sa
              seule responsabilité. L’éditeur ne pourra être tenu responsable en
              cas d’erreur, d’interruption, de dysfonctionnement, de perte de
              données ou de dommages liés à l’utilisation du service.
            </p>
          </LegalSection>

          <LegalSection title="Liens externes">
            <p>
              Le site / l’application peut contenir des liens vers des sites
              tiers. L’éditeur n’exerce aucun contrôle sur ces ressources
              externes et ne saurait être tenu responsable de leur contenu, de
              leur disponibilité ou de leur politique de confidentialité.
            </p>
          </LegalSection>

          <LegalSection title="Données personnelles">
            <p>
              Des données personnelles peuvent être collectées dans le cadre de
              l’utilisation de la plateforme, notamment lors de l’inscription,
              de la connexion ou de l’envoi d’un message.
            </p>
            <p>
              Pour en savoir plus sur les traitements effectués, la durée de
              conservation, les droits des utilisateurs et les modalités
              d’exercice de ces droits, veuillez consulter la{" "}
              <Link
                href="/politique-confidentialite"
                className="font-semibold text-[#5C2C4F] underline underline-offset-4"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection title="Droit applicable">
            <p>
              Le présent site / cette application est soumis au droit français.
              En cas de litige, et sauf disposition légale contraire, les
              juridictions compétentes seront celles du ressort applicable au
              siège de l’éditeur.
            </p>
          </LegalSection>
        </div>
      </section>
    </main>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-3 rounded-[24px] border border-black/10 bg-[#F7F6F5] p-5 sm:p-6">
      <h2 className="text-xl font-bold text-[#5C2C4F] sm:text-2xl">{title}</h2>
      <div className="grid gap-3 text-sm leading-7 text-black/75 sm:text-base">
        {children}
      </div>
    </section>
  );
}