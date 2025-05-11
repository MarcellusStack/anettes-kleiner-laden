import React, { useRef } from "react";
import { IconArrowDown } from "@tabler/icons-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";

export const Header = () => {
  const headerRef = useRef(null);

  // Adjust scroll offset to start later
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end center"],
  });

  // Create smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    mass: 0.8,
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
    useTransform(smoothProgress, [0, 1], ["-30px", "30px"]),
    shapeSpringConfig
  );

  const shape2Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["40px", "-40px"]),
    shapeSpringConfig
  );

  const shape3Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["-20px", "20px"]),
    shapeSpringConfig
  );

  // Keep blur until we start scrolling more
  const blurValue = useTransform(smoothProgress, [0, 0.4], [2.5, 0]);

  // More conservative spread values
  const card1Transform = {
    x: useTransform(smoothProgress, [0, 1], [0, 200]),
    y: useTransform(smoothProgress, [0, 1], [0, -100]),
    rotate: useTransform(smoothProgress, [0, 1], [2, 15]),
  };

  const card2Transform = {
    x: useTransform(smoothProgress, [0, 1], [15, -250]),
    y: useTransform(smoothProgress, [0, 1], [0, 120]),
    rotate: useTransform(smoothProgress, [0, 1], [4, -20]),
  };

  const card3Transform = {
    x: useTransform(smoothProgress, [0, 1], [30, 180]),
    y: useTransform(smoothProgress, [0, 1], [0, 200]),
    rotate: useTransform(smoothProgress, [0, 1], [6, 10]),
  };

  const card4Transform = {
    x: useTransform(smoothProgress, [0, 1], [45, -220]),
    y: useTransform(smoothProgress, [0, 1], [0, -250]),
    rotate: useTransform(smoothProgress, [0, 1], [8, -25]),
  };

  const card5Transform = {
    x: useTransform(smoothProgress, [0, 1], [60, 240]),
    y: useTransform(smoothProgress, [0, 1], [0, 80]),
    rotate: useTransform(smoothProgress, [0, 1], [10, 30]),
  };

  // Add opacity animation that fades out at the end
  const opacityValue = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <header
      ref={headerRef}
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-113.33px)] gap-10 md:mt-10 overflow-hidden"
    >
      {/* Decorative background shapes */}
      <motion.div
        className=" absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl"
        style={{
          y: shape1Y,
          scale: useTransform(smoothProgress, [0, 0.5], [0.8, 1]),
          opacity: useTransform(smoothProgress, [0, 0.2], [0.8, 0.4]),
        }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-lg bg-primary/30 blur-3xl rotate-12"
        style={{
          y: shape2Y,
          scale: useTransform(smoothProgress, [0.2, 0.7], [0.8, 1]),
          opacity: useTransform(smoothProgress, [0.2, 0.4], [0.8, 0.4]),
        }}
      />
      <motion.div
        className="absolute top-[40%] left-[20%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
        style={{
          y: shape3Y,
          scale: useTransform(smoothProgress, [0.4, 0.9], [0.8, 1]),
          opacity: useTransform(smoothProgress, [0.4, 0.6], [0.8, 0.4]),
        }}
      />

      <h1 className="relative text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans flex flex-col items-center text-center">
        <span className="text-soft-black font-sans">
          Personalisierte <span className="text-primary">Kreationen</span>
        </span>
        <span className="font-sans text-soft-black">
          aus <span className="text-primary">Keraflott</span>
        </span>
      </h1>
      <button className="bg-primary text-white border-primary font-sans text-2xl px-4 py-2 rounded-md">
        Meine Kreationen
      </button>
      <div className="flex flex-row items-center gap-10">
        <motion.div
          animate={{
            y: [0, 10, 0],
            color: ["#1a1a1a", "#14c38e", "#1a1a1a"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0,
          }}
        >
          <IconArrowDown size={32} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 10, 0],
            color: ["#1a1a1a", "#14c38e", "#1a1a1a"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.4,
          }}
        >
          <IconArrowDown size={32} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 10, 0],
            color: ["#1a1a1a", "#14c38e", "#1a1a1a"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.8,
          }}
        >
          <IconArrowDown size={32} />
        </motion.div>
      </div>
      <div className="relative w-[200px] sm:w-[250px] md:w-[300px] h-[300px] sm:h-[350px] md:h-[400px] mt-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-lg"
          style={{
            x: card1Transform.x,
            y: card1Transform.y,
            rotate: card1Transform.rotate,
            filter: useTransform(blurValue, (value) => `blur(${value}px)`),
            opacity: opacityValue,
          }}
        >
          <div className="relative w-full h-full p-2 bg-white rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
            <div className="relative w-full h-full rounded-lg overflow-hidden border-[6px] border-white shadow-inner">
              <Image
                src="/header-1.webp"
                alt="Product-1"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-lg"
          style={{
            x: card2Transform.x,
            y: card2Transform.y,
            rotate: card2Transform.rotate,
            filter: useTransform(blurValue, (value) => `blur(${value}px)`),
            opacity: opacityValue,
          }}
        >
          <div className="relative w-full h-full p-2 bg-white rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
            <div className="relative w-full h-full rounded-lg overflow-hidden border-[6px] border-white shadow-inner">
              <Image
                src="/header-2.webp"
                alt="Product-2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-lg"
          style={{
            x: card3Transform.x,
            y: card3Transform.y,
            rotate: card3Transform.rotate,
            filter: useTransform(blurValue, (value) => `blur(${value}px)`),
            opacity: opacityValue,
          }}
        >
          <div className="relative w-full h-full p-2 bg-white rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
            <div className="relative w-full h-full rounded-lg overflow-hidden border-[6px] border-white shadow-inner">
              <Image
                src="/header-1.webp"
                alt="Product-3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-lg"
          style={{
            x: card4Transform.x,
            y: card4Transform.y,
            rotate: card4Transform.rotate,
            filter: useTransform(blurValue, (value) => `blur(${value}px)`),
            opacity: opacityValue,
          }}
        >
          <div className="relative w-full h-full p-2 bg-white rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
            <div className="relative w-full h-full rounded-lg overflow-hidden border-[6px] border-white shadow-inner">
              <Image
                src="/header-2.webp"
                alt="Product-4"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-lg"
          style={{
            x: card5Transform.x,
            y: card5Transform.y,
            rotate: card5Transform.rotate,
            filter: useTransform(blurValue, (value) => `blur(${value}px)`),
            opacity: opacityValue,
          }}
        >
          <div className="relative w-full h-full p-2 bg-white rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
            <div className="relative w-full h-full rounded-lg overflow-hidden border-[6px] border-white shadow-inner">
              <Image
                src="/header-1.webp"
                alt="Product-5"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
