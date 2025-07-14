import Link from "next/link";

export const Footer = () => {
  return (
    <div className="px-4 py-8 md:px-8 lg:px-16">
      <footer className="bg-primary text-white rounded-3xl px-6 py-12 md:p-16">
        <div className="container mx-auto">
          {/* Top Section - Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 mb-16">
            {/* Empty columns for spacing on larger screens */}
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block"></div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Seiten</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#my-creations"
                    className="text-white/80 hover:text-white transition-colors text-lg"
                  >
                    Meine Kreationen
                  </Link>
                </li>
                <li>
                  <Link
                    href="#my-work"
                    className="text-white/80 hover:text-white transition-colors text-lg"
                  >
                    Meine Arbeit
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-white/80 hover:text-white transition-colors text-lg"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {/* Brand Section - Left */}
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Anettes kleiner Laden
                </h3>
                <p className="text-white/80 text-lg max-w-md">
                  Handgemachte Deko aus Keraflott mit Liebe gestaltet
                </p>
              </div>

              {/* Legal Links and Copyright - Right */}
              <div className="flex flex-col md:items-end justify-between">
                <div className="flex gap-8 mb-8">
                  <Link
                    href="/impressum"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Impressum
                  </Link>
                  <Link
                    href="/datenschutz"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Datenschutz
                  </Link>
                </div>
                <p className="text-white/60">
                  © {new Date().getFullYear()} | Anettes kleiner Laden, All
                  rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
