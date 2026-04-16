export default function PolitiqueConfidentialitePage() {
    return (
        <main className="min-h-screen bg-[#F7F6F5] px-5 py-8 text-black sm:px-8 md:px-10 lg:px-16">
            <section className="mx-auto grid w-full max-w-4xl gap-6">
                <header className="grid gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C2C4F]">
                        Protection des données
                    </p>
                    <h1 className="text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
                        Politique de confidentialité
                    </h1>
                    <p className="max-w-2xl text-sm leading-6 text-black/65 sm:text-base">
                        Cette page explique quelles données peuvent être collectées sur
                        Solimouv’, pour quelles finalités et quels sont vos droits.
                    </p>
                </header>

                <div className="grid gap-5 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8">
                    <PrivacySection title="1. Responsable du traitement">
                        <p>
                            Le responsable du traitement des données personnelles collectées
                            via la plateforme Solimouv’ est :
                        </p>
                        <p>
                            <strong>[Nom officiel de l’association / structure]</strong>
                        </p>
                        <p>
                            <strong>Adresse :</strong> [Adresse complète]
                        </p>
                        <p>
                            <strong>Email de contact :</strong> [Adresse email de contact]
                        </p>
                    </PrivacySection>

                    <PrivacySection title="2. Données collectées">
                        <p>
                            Dans le cadre de l’utilisation de la plateforme, certaines données
                            personnelles peuvent être collectées, notamment :
                        </p>
                        <p>
                            nom, prénom, adresse email, numéro de téléphone, informations
                            liées au compte utilisateur, réponses au questionnaire, ainsi que
                            les données nécessaires au bon fonctionnement technique du
                            service.
                        </p>
                        <p>
                            En fonction des fonctionnalités activées, des données
                            complémentaires peuvent également être collectées lorsque
                            l’utilisateur choisit de les transmettre volontairement.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="3. Finalités du traitement">
                        <p>Les données sont collectées pour les finalités suivantes :</p>
                        <p>
                            création et gestion du compte utilisateur, authentification,
                            personnalisation de l’expérience, proposition de recommandations
                            adaptées, gestion des demandes de contact, amélioration du service
                            et sécurisation de la plateforme.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="4. Base légale">
                        <p>
                            Les traitements de données reposent, selon les cas, sur :
                        </p>
                        <p>
                            l’exécution de mesures précontractuelles ou contractuelles, le
                            consentement de l’utilisateur lorsqu’il est requis, ainsi que
                            l’intérêt légitime de l’éditeur pour assurer le bon
                            fonctionnement, la sécurité et l’amélioration de la plateforme.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="5. Destinataires des données">
                        <p>
                            Les données sont destinées uniquement aux personnes habilitées et,
                            le cas échéant, aux prestataires techniques intervenant dans
                            l’hébergement, la maintenance ou le fonctionnement de la
                            plateforme, dans la stricte limite de leurs missions.
                        </p>
                        <p>
                            Les données ne sont ni vendues ni cédées à des tiers à des fins
                            commerciales.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="6. Durée de conservation">
                        <p>
                            Les données personnelles sont conservées pendant une durée
                            limitée, proportionnée aux finalités pour lesquelles elles ont été
                            collectées.
                        </p>
                        <p>
                            Les données liées au compte utilisateur sont conservées tant que
                            le compte est actif, puis supprimées ou archivées selon les
                            obligations légales applicables. Les messages de contact peuvent
                            être conservés le temps nécessaire au traitement de la demande.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="7. Sécurité">
                        <p>
                            Des mesures techniques et organisationnelles appropriées sont
                            mises en œuvre afin de protéger les données personnelles contre
                            toute destruction, perte, altération, divulgation non autorisée ou
                            accès non autorisé.
                        </p>
                        <p>
                            Malgré ces précautions, aucun système n’est totalement exempt de
                            risque. L’utilisateur est invité à adopter de bonnes pratiques de
                            sécurité, notamment dans la gestion de ses identifiants.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="8. Vos droits">
                        <p>
                            Conformément à la réglementation applicable, vous disposez d’un
                            droit d’accès, de rectification, d’effacement, de limitation, d’
                            opposition et, lorsque cela est applicable, d’un droit à la
                            portabilité de vos données.
                        </p>
                        <p>
                            Vous pouvez également retirer votre consentement à tout moment
                            lorsque le traitement repose sur celui-ci.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="9. Exercer vos droits">
                        <p>
                            Pour exercer vos droits ou poser une question relative à la
                            protection des données, vous pouvez contacter :
                        </p>
                        <p>
                            <strong>[Nom / service en charge]</strong>
                        </p>
                        <p>
                            <strong>Email :</strong> [Adresse email RGPD ou contact]
                        </p>
                        <p>
                            Une réponse vous sera apportée dans les meilleurs délais, sous
                            réserve de la vérification de votre identité lorsque cela est
                            nécessaire.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="10. Réclamation">
                        <p>
                            Si vous estimez que vos droits ne sont pas respectés, vous pouvez
                            adresser une réclamation à l’autorité de contrôle compétente,
                            notamment la CNIL en France.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="11. Mise à jour de la politique">
                        <p>
                            La présente politique de confidentialité peut être modifiée afin
                            de refléter les évolutions légales, réglementaires, techniques ou
                            fonctionnelles de la plateforme.
                        </p>
                        <p>
                            La date de mise à jour affichée ci-dessous permet d’identifier la
                            version en vigueur.
                        </p>
                        <p>
                            <strong>Dernière mise à jour :</strong> [à compléter]
                        </p>
                    </PrivacySection>
                </div>
            </section>
        </main>
    );
}

function PrivacySection({
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