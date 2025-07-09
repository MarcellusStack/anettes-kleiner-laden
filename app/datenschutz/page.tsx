"use client";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 py-16 mt-36">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-soft-black hover:text-primary transition-colors"
        >
          <IconArrowLeft size={24} />
          <span>Zurück zur Startseite</span>
        </Link>

        <h1 className="text-4xl font-bold mb-12 text-soft-black">
          Datenschutzerklärung
        </h1>

        <div className="space-y-12 max-w-3xl">
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black">
              1. Datenschutz auf einen Blick
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-soft-black">
                Allgemeine Hinweise
              </h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black">
              2. Datenerfassung auf dieser Website
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-soft-black">
                Anonyme Datenerfassung
              </h3>
              <p>
                Wir erfassen Besucherdaten auf dieser Website in anonymisierter
                Form, das heißt ohne Erfassung von IP-Adressen. Diese anonymen
                Daten geben uns lediglich Aufschluss über die Nutzung unserer
                Website, ohne dass wir Rückschlüsse auf einzelne Besucher ziehen
                können.
              </p>
              <p>
                Die anonyme Datenerfassung hilft uns dabei, unsere Website zu
                verbessern und die Nutzererfahrung zu optimieren. Es werden
                keine personenbezogenen Daten gespeichert.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black">
              3. Kontaktformular
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Wenn Sie das Kontaktformular nutzen, werden die von Ihnen
                angegebenen Daten (Name, E-Mail-Adresse und Nachricht) zur
                Bearbeitung Ihrer Anfrage verwendet. Diese Daten werden nur für
                die Kommunikation mit Ihnen verwendet und nicht an Dritte
                weitergegeben.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese
                Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis
                zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                unberührt.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black">
              4. Ihre Rechte
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>Sie haben das Recht:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Auskunft über Ihre gespeicherten Daten zu erhalten</li>
                <li>
                  Die Berichtigung unrichtiger personenbezogener Daten zu
                  verlangen
                </li>
                <li>
                  Die Löschung Ihrer bei uns gespeicherten Daten zu verlangen
                </li>
                <li>Die Einschränkung der Datenverarbeitung zu verlangen</li>
                <li>Der Datenverarbeitung zu widersprechen</li>
                <li>Die Datenübertragbarkeit zu verlangen</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black">
              5. Kontakt
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer
                personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung
                oder Löschung von Daten wenden Sie sich bitte an:
              </p>
              <p>
                Anettes kleiner Laden
                <br />
                E-Mail: nettishandmade@web.de
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
