"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Image } from "@imagekit/next";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    mass: 0.2,
    restSpeed: 0.5,
    restDelta: 0.01,
  });

  // Subtle spring settings for shapes
  const shapeSpringConfig = {
    stiffness: 100,
    damping: 15,
    mass: 0.1,
    restSpeed: 0.5,
    restDelta: 0.01,
  };

  // Create more visible scroll-based animations for shapes
  const shape1Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["180px", "-100px"]),
    shapeSpringConfig
  );

  const shape2Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["200px", "-120px"]),
    shapeSpringConfig
  );

  const shape3Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["150px", "-80px"]),
    shapeSpringConfig
  );

  return (
    <footer
      ref={footerRef}
      className="relative bg-white py-16 px-8 overflow-hidden"
      id="contact"
    >
      {/* Decorative background shapes with scroll animations */}
      <motion.div
        className="absolute top-20 right-[15%] w-[220px] h-[220px] rounded-full bg-primary/20 blur-3xl"
        style={{
          y: shape1Y,
          scale: useTransform(smoothProgress, [0, 0.5], [0.8, 1.2]),
          opacity: useTransform(smoothProgress, [0, 0.4], [0.2, 1]),
        }}
      />
      <motion.div
        className="absolute bottom-40 left-[10%] w-[200px] h-[200px] rounded-lg bg-primary/30 blur-3xl rotate-12"
        style={{
          y: shape2Y,
          scale: useTransform(smoothProgress, [0.2, 0.7], [0.8, 1.2]),
          opacity: useTransform(smoothProgress, [0.2, 0.6], [0.2, 1]),
        }}
      />
      <motion.div
        className="absolute top-1/3 right-[8%] w-[250px] h-[250px] rounded-full bg-primary/10 blur-3xl"
        style={{
          y: shape3Y,
          scale: useTransform(smoothProgress, [0.4, 0.9], [0.8, 1.2]),
          opacity: useTransform(smoothProgress, [0.4, 0.8], [0.2, 1]),
        }}
      />

      {/* Contact Section */}
      <motion.div
        className="relative max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-medium mb-2">Haben Sie Interesse?</h2>
        <p className="text-lg font-medium mb-8">
          Dann melden Sie sich mit Ihrem Wunsch sowie eventuellen Kontaktdaten.
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ihr Name"
            className="w-full py-2 text-xl placeholder-gray-400 bg-transparent outline-none border-b border-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Ihre E-Mail-Adresse"
            className="w-full py-2 text-xl placeholder-gray-400 bg-transparent outline-none border-b border-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Ihre Nachricht"
            className="w-full py-2 text-xl placeholder-gray-400 bg-transparent outline-none border-b border-black min-h-[100px] resize-y"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="cursor-pointer self-start text-xl py-2 px-8 border bg-soft-black border-soft-black hover:bg-transparent hover:text-soft-black text-white  transition-colors">
            Senden
          </button>
        </div>
      </motion.div>

      {/* Navigation and Links with Decorative Images */}
      <div className="relative max-w-6xl mx-auto place-items-center grid">
        <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Image */}
          <motion.div
            className="relative w-[200px] h-[250px] -rotate-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: -8,
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative w-full h-full p-2 bg-white rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[8px_8px_20px_rgba(0,0,0,0.15)]">
              <div className="relative w-full h-full rounded-lg overflow-hidden border-[6px] border-white shadow-inner">
                <Image
                  urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL}
                  src="20250511_143721.jpg"
                  alt={`kreation`}
                  transformation={[
                    {
                      width: 0.8,
                      height: 0.8,
                    },
                  ]}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill={true}
                  className="object-fit"
                />
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="space-y-2 text-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            viewport={{ once: true }}
          >
            <Link href="#my-creations" className="block hover:opacity-70">
              Meine Kreationen
            </Link>
            <Link href="#my-work" className="block hover:opacity-70">
              Meine Arbeit
            </Link>
            <Link href="#contact" className="block hover:opacity-70">
              Kontakt
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative w-[200px] h-[250px] rotate-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: 8,
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative w-full h-full p-2 bg-white rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[8px_8px_20px_rgba(0,0,0,0.15)]">
              <div className="relative w-full h-full rounded-lg overflow-hidden border-[6px] border-white shadow-inner">
                <Image
                  urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL}
                  src="20250502_145625.jpg"
                  alt={`kreation`}
                  transformation={[
                    {
                      width: 0.8,
                      height: 0.8,
                    },
                  ]}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill={true}
                  className="object-fit"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="relative max-w-6xl mx-auto mt-16 flex flex-wrap items-center justify-between text-sm text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, delay: 0.4 },
        }}
        viewport={{ once: true }}
      >
        <div className="flex items-center space-x-4">
          <span>© Anettes kleiner Laden 2025</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/impressum"
            className="hover:text-primary transition-colors"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="hover:text-primary transition-colors"
          >
            Datenschutz
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};
