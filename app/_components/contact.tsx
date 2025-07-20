"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export const Contact = () => {
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
          <button className="cursor-pointer self-start text-xl py-2 px-8 rounded-full border-2 bg-soft-black border-soft-black hover:bg-transparent hover:text-soft-black text-white  transition-colors">
            Senden
          </button>
        </div>
      </motion.div>
    </footer>
  );
};
