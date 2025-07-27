"use client";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { Image } from "@imagekit/next";

export const Footer = () => {
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start 0.8", "start 0.3"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    mass: 0.2,
    restSpeed: 0.5,
    restDelta: 0.01,
  });

  // Animation values - slightly more noticeable
  const y = useTransform(smoothProgress, [0, 1], [50, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1.05, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [0.7, 1]);

  return (
    <div className="px-4 py-8 md:px-8 lg:px-16">
      <motion.footer
        ref={footerRef}
        style={{
          y,
          scale,
          opacity,
        }}
        className="bg-primary text-white rounded-3xl px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16"
      >
        <div className="container mx-auto">
          {/* Top Section - Navigation with Image */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">
            {/* Image Section - Left */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <div className="relative w-full lg:w-2/3 h-56 md:h-64 lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL}
                  src="20240815_194621.jpg"
                  alt="Anettes kleiner Laden"
                  transformation={[
                    {
                      width: 800,
                      height: 820,
                    },
                  ]}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 800px"
                  fill={true}
                  className="object-cover rounded-2xl"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/tr:w-10,h-10,bl-10/20240815_194621.jpg`}
                />
              </div>
            </div>

            {/* Navigation Links - Right */}
            <div className="flex justify-start lg:justify-end">
              <div>
                <h3 className="text-lg font-semibold mb-6">Seiten</h3>
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
      </motion.footer>
    </div>
  );
};
