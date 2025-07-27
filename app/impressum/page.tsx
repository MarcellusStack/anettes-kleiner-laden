"use client";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-50/50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <motion.div
        className="absolute top-32 right-[12%] w-60 h-60 rounded-full bg-primary/18 blur-3xl"
        animate={{
          y: [0, 25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-60 left-[8%] w-80 h-80 rounded-lg bg-primary/12 blur-3xl rotate-45"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.12, 1],
          rotate: [45, 55, 45],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-2/3 left-[5%] w-52 h-52 rounded-full bg-primary/22 blur-3xl"
        animate={{
          y: [0, 18, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-[25%] w-44 h-44 rounded-full bg-primary/15 blur-3xl"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8.5,
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
          Impressum
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black break-words">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-2 text-lg text-gray-700">
              <p className="break-words leading-relaxed">
                Anettes kleiner Laden
              </p>
              <p className="break-words leading-relaxed">Anette Mustermann</p>
              <p className="break-words leading-relaxed">Musterstraße 1</p>
              <p className="break-words leading-relaxed">12345 Musterstadt</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black break-words">
              Kontakt
            </h2>
            <div className="space-y-2 text-lg text-gray-700">
              <p className="break-words leading-relaxed">
                E-Mail: nettishandmade@web.de
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black break-words">
              Haftung für Inhalte
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p className="break-words leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p className="break-words leading-relaxed">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black break-words">
              Urheberrecht
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p className="break-words leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p className="break-words leading-relaxed">
                Sollten Sie der Ansicht sein, dass ein auf dieser Website
                verwendeter Inhalt gegen Urheberrecht verstößt, kontaktieren Sie
                uns bitte über das Kontaktformular. Wir werden den
                entsprechenden Inhalt umgehend prüfen und gegebenenfalls
                entfernen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
