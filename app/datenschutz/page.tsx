"use client";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50/50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <motion.div
        className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary/20 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-[15%] w-72 h-72 rounded-lg bg-primary/15 blur-3xl rotate-12"
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.05, 1],
          rotate: [12, 22, 12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-[5%] w-48 h-48 rounded-full bg-primary/25 blur-3xl"
        animate={{
          y: [0, 20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-[20%] w-56 h-56 rounded-full bg-primary/10 blur-3xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative container mx-auto px-4 py-16 mt-36 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-soft-black hover:text-primary transition-colors"
        >
          <IconArrowLeft size={24} />
          <span>Zurück zur Startseite</span>
        </Link>

        <h1 className="text-4xl font-bold mb-12 text-soft-black break-words">
          Datenschutzerklärung
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black break-words">
              1. Datenschutz auf einen Blick
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-soft-black break-words">
                Allgemeine Hinweise
              </h3>
              <p className="break-words leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black break-words">
              2. Datenerfassung auf dieser Website
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-soft-black break-words">
                Anonyme Datenerfassung
              </h3>
              <p className="break-words leading-relaxed">
                Wir erfassen Besucherdaten auf dieser Website in anonymisierter
                Form, das heißt ohne Erfassung von IP-Adressen. Diese anonymen
                Daten geben uns lediglich Aufschluss über die Nutzung unserer
                Website, ohne dass wir Rückschlüsse auf einzelne Besucher ziehen
                können.
              </p>
              <p className="break-words leading-relaxed">
                Die anonyme Datenerfassung hilft uns dabei, unsere Website zu
                verbessern und die Nutzererfahrung zu optimieren. Es werden
                keine personenbezogenen Daten gespeichert.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black break-words">
              3. Kontaktformular
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p className="break-words leading-relaxed">
                Wenn Sie das Kontaktformular nutzen, werden die von Ihnen
                angegebenen Daten (Name, E-Mail-Adresse und Nachricht) zur
                Bearbeitung Ihrer Anfrage verwendet. Diese Daten werden nur für
                die Kommunikation mit Ihnen verwendet und nicht an Dritte
                weitergegeben.
              </p>
              <p className="break-words leading-relaxed">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese
                Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis
                zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                unberührt.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black break-words">
              4. Ihre Rechte
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p className="break-words leading-relaxed">
                Sie haben das Recht:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li className="break-words leading-relaxed">
                  Auskunft über Ihre gespeicherten Daten zu erhalten
                </li>
                <li className="break-words leading-relaxed">
                  Die Berichtigung unrichtiger personenbezogener Daten zu
                  verlangen
                </li>
                <li className="break-words leading-relaxed">
                  Die Löschung Ihrer bei uns gespeicherten Daten zu verlangen
                </li>
                <li className="break-words leading-relaxed">
                  Die Einschränkung der Datenverarbeitung zu verlangen
                </li>
                <li className="break-words leading-relaxed">
                  Der Datenverarbeitung zu widersprechen
                </li>
                <li className="break-words leading-relaxed">
                  Die Datenübertragbarkeit zu verlangen
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black break-words">
              5. Kontakt
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p className="break-words leading-relaxed">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer
                personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung
                oder Löschung von Daten wenden Sie sich bitte an:
              </p>
              <p className="break-words leading-relaxed">
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
