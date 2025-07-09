"use client";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export default function Impressum() {
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

        <h1 className="text-4xl font-bold mb-12 text-soft-black">Impressum</h1>

        <div className="space-y-12 max-w-3xl">
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-2 text-lg text-gray-700">
              <p>Anettes kleiner Laden</p>
              <p>Anette Mustermann</p>
              <p>Musterstraße 1</p>
              <p>12345 Musterstadt</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black">
              Kontakt
            </h2>
            <div className="space-y-2 text-lg text-gray-700">
              <p>E-Mail: nettishandmade@web.de</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-soft-black">
              Haftung für Inhalte
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p>
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
            <h2 className="text-2xl font-semibold mb-6 text-soft-black">
              Urheberrecht
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
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
