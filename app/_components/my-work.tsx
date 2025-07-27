import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { IconPencil } from "@tabler/icons-react";
import { AnimatedTitle } from "./animated-title";

export const MyWork = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    mass: 0.2,
    restSpeed: 0.5,
    restDelta: 0.01,
  });

  // Snappier spring settings for shapes
  const shapeSpringConfig = {
    stiffness: 100,
    damping: 15,
    mass: 0.1,
    restSpeed: 0.5,
    restDelta: 0.01,
  };

  // Create spring animations for each shape
  const shape1Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["-50px", "50px"]),
    shapeSpringConfig
  );

  const shape2Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["50px", "-50px"]),
    shapeSpringConfig
  );

  const shape3Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["-30px", "30px"]),
    shapeSpringConfig
  );

  // Split texts
  const title = "Handmade mit Herz";
  const titleLetters = title.split("");

  const yTransform = useTransform(smoothProgress, [0, 1], ["50px", "0px"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center gap-5 md:gap-10 container mx-auto px-4 md:px-10 min-h-[50vh] md:min-h-screen overflow-hidden pb-10"
      id="my-work"
    >
      <h2 className="relative text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans text-center ">
        <span className="text-soft-black font-sans">
          Meine <AnimatedTitle text="Arbeit" className="text-primary" />
        </span>
      </h2>
      {/* Decorative background shapes with enhanced animations */}
      <motion.div
        className="absolute top-20 left-[20%] w-64 h-64 rounded-full bg-primary/30 blur-3xl"
        style={{
          y: shape1Y,
          scale: useTransform(smoothProgress, [0, 0.5], [0.8, 1]),
          opacity: useTransform(smoothProgress, [0, 0.2], [0, 1]),
        }}
      />
      <motion.div
        className="absolute bottom-40 right-[15%] w-72 h-72 rounded-lg bg-primary/40 blur-3xl rotate-12"
        style={{
          y: shape2Y,
          scale: useTransform(smoothProgress, [0.2, 0.7], [0.8, 1]),
          opacity: useTransform(smoothProgress, [0.2, 0.4], [0, 1]),
        }}
      />
      <motion.div
        className="absolute top-1/2 left-[10%] w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        style={{
          y: shape3Y,
          scale: useTransform(smoothProgress, [0.4, 0.9], [0.8, 1]),
          opacity: useTransform(smoothProgress, [0.4, 0.6], [0, 1]),
        }}
      />

      <motion.div
        className="relative flex flex-col items-center gap-5 md:gap-10 w-full max-w-4xl"
        style={{ y: yTransform, zIndex: 1 }}
      >
        <motion.div
          className="relative w-full bg-white rounded-lg shadow-lg p-4 md:p-8 transform -rotate-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            backgroundImage: `
              linear-gradient(#e5e7eb 1px, transparent 1px),
              linear-gradient(to right, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "25px 25px",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        >
          {/* Folder holes */}
          <div className="absolute left-8 top-1/3 w-6 h-6 rounded-full bg-gray-100 shadow-inner border border-gray-200" />
          <div className="absolute left-8 top-2/3 w-6 h-6 rounded-full bg-gray-100 shadow-inner border border-gray-200" />

          {/* Title with underline animation */}
          <div className="relative mb-4 md:mb-8 px-8 md:px-0">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-hand text-primary text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {titleLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block relative"
                  initial={{ opacity: 0, y: 20, rotate: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + index * 0.03,
                    ease: "easeOut",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h2>

            {/* Realistic scribbled underline - responsive width */}
            <motion.svg
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
              width="280"
              height="20"
              viewBox="0 0 280 20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2, delay: 0.6 }}
            >
              <motion.path
                d="M 5 12 Q 15 8 30 10 T 55 9 Q 70 7 85 11 T 110 10 Q 125 8 140 12 T 165 11 Q 180 9 195 13 T 220 12 Q 235 10 250 14 T 275 13"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-primary"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: "easeInOut",
                }}
                style={{
                  filter: "url(#roughPaper)",
                }}
              />

              {/* Add some texture to make it look more hand-drawn */}
              <defs>
                <filter id="roughPaper">
                  <feTurbulence
                    baseFrequency="0.04"
                    numOctaves="5"
                    result="noise"
                    seed="1"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="0.5"
                  />
                </filter>
              </defs>

              {/* Small pen stroke marks for extra realism */}
              <motion.circle
                cx="12"
                cy="10"
                r="0.5"
                fill="currentColor"
                className="text-primary opacity-30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: 0.9 }}
              />
              <motion.circle
                cx="140"
                cy="11"
                r="0.3"
                fill="currentColor"
                className="text-primary opacity-40"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: 1.3 }}
              />
              <motion.circle
                cx="260"
                cy="13"
                r="0.4"
                fill="currentColor"
                className="text-primary opacity-35"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.35 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: 1.6 }}
              />
            </motion.svg>

            {/* Animated pen that follows the underline */}
            <motion.div
              className="absolute text-primary"
              style={{
                left: "50%",
                bottom: "-30px",
              }}
              initial={{ opacity: 0, x: -140, rotate: -15 }}
              whileInView={{
                opacity: [0, 1, 1, 0],
                x: 140,
                rotate: 15,
                transition: {
                  duration: 1.0,
                  delay: 0.7,
                  ease: "easeInOut",
                  opacity: {
                    times: [0, 0.1, 0.9, 1],
                    duration: 1.0,
                  },
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <IconPencil size={20} />
            </motion.div>
          </div>

          {/* Content with simple fade-up animation */}
          <motion.div
            className="text-center text-soft-black font-hand text-lg md:text-2xl leading-[2] md:leading-[2.5] space-y-6 px-8 md:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <p className="font-semibold">Jedes Stück wird von mir:</p>
              <ul className="list-disc list-inside space-y-1 text-left max-w-2xl mx-auto">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  in Handarbeit gegossen und geschliffen und versiegelt
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  liebevoll gestaltet, bemalt oder dekoriert
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  als Einzelstück oder in kleinen Serien gefertigt
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <p className="font-semibold">Vielfältig & individuell:</p>
              <ul className="list-disc list-inside space-y-1 text-left max-w-2xl mx-auto">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  als stilvolle Dekoration für Zuhause
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                >
                  als Geschenkideen für besondere Anlässe
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
