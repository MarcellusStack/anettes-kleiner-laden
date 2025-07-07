"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <footer className="relative bg-white py-16 px-8 overflow-hidden">
      {/* Decorative background shapes */}
      <motion.div
        className="absolute top-20 right-[15%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{
          opacity: 0.4,
          y: 0,
          scale: 1,
          transition: { duration: 1, ease: "easeOut" },
        }}
        viewport={{ once: true, margin: "100px" }}
      />
      <motion.div
        className="absolute bottom-40 left-[10%] w-[400px] h-[400px] rounded-lg bg-primary/30 blur-3xl rotate-12"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        whileInView={{
          opacity: 0.4,
          y: 0,
          scale: 1,
          transition: { duration: 1, delay: 0.2, ease: "easeOut" },
        }}
        viewport={{ once: true, margin: "100px" }}
      />
      <motion.div
        className="absolute top-1/2 left-[20%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{
          opacity: 0.4,
          y: 0,
          scale: 1,
          transition: { duration: 1, delay: 0.4, ease: "easeOut" },
        }}
        viewport={{ once: true, margin: "100px" }}
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
        <p className="text-xl font-medium mb-8">
          Dann melden Sie sich mit Ihrem Wunsch sowie eventuellen Kontaktdaten.
        </p>

        <div className="flex flex-col gap-4">
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
          <button className="self-start text-xl py-2 px-8 border border-black hover:bg-black hover:text-white transition-colors">
            Senden
          </button>
        </div>
      </motion.div>

      {/* Navigation and Links with Decorative Images */}
      <div className="relative max-w-6xl mx-auto place-items-center grid">
        <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Image */}
          <motion.div
            className="relative w-[200px] h-[250px] -rotate-12"
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
                  src="/header-1.webp"
                  alt="Decorative Product"
                  fill
                  className="object-cover"
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
            <Link href="#products" className="block hover:opacity-70">
              Produkte
            </Link>
            <Link href="#work" className="block hover:opacity-70">
              Meine Arbeiten
            </Link>
            <Link href="#contact" className="block hover:opacity-70">
              Kontakt
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative w-[200px] h-[250px] rotate-12"
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
                  src="/header-2.webp"
                  alt="Decorative Product"
                  fill
                  className="object-cover"
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
      </motion.div>
    </footer>
  );
};
