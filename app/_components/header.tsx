import React, { useRef } from "react";
import { IconArrowDown } from "@tabler/icons-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export const Header = () => {
  const headerRef = useRef(null);

  // Get scroll progress for the header section
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  // Create smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    mass: 0.8,
  });

  // Updated transform ranges for smoother transition
  const rightRotation = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [12, 0, 0, -6, -12]
  );
  const leftRotation = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-12, 0, 0, 6, 12]
  );
  const blurValue = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [5, 0, 0, 2.5, 5]
  );
  const yOffset = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [100, -50, -50, 25, 100]
  );

  return (
    <header
      ref={headerRef}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-113.33px)] gap-10 md:mt-10"
    >
      <motion.div
        className="absolute top-[75%] -z-10 right-1/7 w-[300px] h-[400px] "
        style={{
          y: yOffset,
          rotate: rightRotation,
          filter: useTransform(blurValue, (value) => `blur(${value}px)`),
        }}
      >
        <Image
          src="/header-1.webp"
          alt="Product-1-image"
          fill={true}
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute top-[70%] -z-10 left-1/8 w-[300px] h-[400px]"
        style={{
          rotate: leftRotation,
          filter: useTransform(blurValue, (value) => `blur(${value}px)`),
          translateY: yOffset,
        }}
      >
        <Image
          src="/header-2.webp"
          alt="Product-2-image"
          fill={true}
          className="object-cover"
        />
      </motion.div>
      <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans flex flex-col items-center text-center">
        <span className="text-soft-black font-sans">
          Personalisierte <span className="text-primary">Dekorationen</span>
        </span>
        <span className="font-sans text-soft-black">
          aus <span className="text-primary">Keraflott</span>
        </span>
      </h1>
      <button className="bg-primary text-white border-primary font-sans text-2xl px-4 py-2 rounded-md">
        Meine Dekorationen
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
    </header>
  );
};
