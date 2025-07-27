import React, { useRef, useState, useEffect } from "react";
import { IconArrowDown } from "@tabler/icons-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Image } from "@imagekit/next";
import Link from "next/link";
import { AnimatedTitle } from "./animated-title";

export const Header = () => {
  const headerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Adjust scroll offset to start later
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end center"],
  });

  // Create smooth spring animations - less aggressive on mobile
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: isMobile ? 100 : 200,
    damping: isMobile ? 30 : 25,
    mass: isMobile ? 1.2 : 0.8,
  });

  // Snappier spring settings for shapes - reduced on mobile
  const shapeSpringConfig = {
    stiffness: isMobile ? 50 : 100,
    damping: isMobile ? 20 : 15,
    mass: isMobile ? 0.2 : 0.1,
    restSpeed: 0.5,
    restDelta: 0.01,
  };

  // Create spring animations for each shape - reduced movement on mobile
  const shape1Y = useSpring(
    useTransform(
      smoothProgress,
      [0, 1],
      isMobile ? ["-15px", "15px"] : ["-30px", "30px"]
    ),
    shapeSpringConfig
  );

  const shape2Y = useSpring(
    useTransform(
      smoothProgress,
      [0, 1],
      isMobile ? ["20px", "-20px"] : ["40px", "-40px"]
    ),
    shapeSpringConfig
  );

  const shape3Y = useSpring(
    useTransform(
      smoothProgress,
      [0, 1],
      isMobile ? ["-10px", "10px"] : ["-20px", "20px"]
    ),
    shapeSpringConfig
  );

  // Simplified card transforms for mobile
  const card1Transform = {
    x: useTransform(smoothProgress, [0, 1], isMobile ? [0, 150] : [0, 400]),
    y: useTransform(smoothProgress, [0, 1], isMobile ? [0, -100] : [0, -300]),
    rotate: useTransform(smoothProgress, [0, 1], isMobile ? [1, 8] : [2, 25]),
  };

  const card2Transform = {
    x: useTransform(smoothProgress, [0, 1], isMobile ? [8, -150] : [15, -450]),
    y: useTransform(smoothProgress, [0, 1], isMobile ? [0, 80] : [0, 250]),
    rotate: useTransform(
      smoothProgress,
      [0, 1],
      isMobile ? [2, -10] : [4, -30]
    ),
  };

  const card3Transform = {
    x: useTransform(smoothProgress, [0, 1], isMobile ? [15, 120] : [30, 380]),
    y: useTransform(smoothProgress, [0, 1], isMobile ? [0, 120] : [0, 400]),
    rotate: useTransform(smoothProgress, [0, 1], isMobile ? [3, 6] : [6, 20]),
  };

  const card4Transform = {
    x: useTransform(smoothProgress, [0, 1], isMobile ? [23, -130] : [45, -420]),
    y: useTransform(smoothProgress, [0, 1], isMobile ? [0, -120] : [0, -450]),
    rotate: useTransform(
      smoothProgress,
      [0, 1],
      isMobile ? [4, -12] : [8, -35]
    ),
  };

  const card5Transform = {
    x: useTransform(smoothProgress, [0, 1], isMobile ? [30, 140] : [60, 440]),
    y: useTransform(smoothProgress, [0, 1], isMobile ? [0, 60] : [0, 200]),
    rotate: useTransform(smoothProgress, [0, 1], isMobile ? [5, 15] : [10, 40]),
  };

  // Add initial card trick animation
  const initialCardAnimation = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Add opacity animation that fades out at the end
  const opacityValue = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <header
      ref={headerRef}
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-113.33px)] gap-10 md:mt-10"
    >
      {/* Decorative background shapes - reduced on mobile */}
      <motion.div
        className="absolute top-[10%] right-[15%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-primary/20 blur-3xl"
        style={{
          y: shape1Y,
          scale: useTransform(smoothProgress, [0, 0.5], [0.9, 1]),
          opacity: useTransform(smoothProgress, [0, 0.2], [0.8, 0.4]),
          willChange: "transform",
        }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-lg bg-primary/30 blur-3xl rotate-12"
        style={{
          y: shape2Y,
          scale: useTransform(smoothProgress, [0.2, 0.7], [0.9, 1]),
          opacity: useTransform(smoothProgress, [0.2, 0.4], [0.8, 0.4]),
          willChange: "transform",
        }}
      />
      <motion.div
        className="absolute top-[40%] left-[20%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-primary/10 blur-3xl"
        style={{
          y: shape3Y,
          scale: useTransform(smoothProgress, [0.4, 0.9], [0.9, 1]),
          opacity: useTransform(smoothProgress, [0.4, 0.6], [0.8, 0.4]),
          willChange: "transform",
        }}
      />

      <h1 className="relative text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans flex flex-col items-center text-center">
        <span className="text-soft-black font-sans">
          Handgemachte{" "}
          <AnimatedTitle text="Deko" className="text-primary" delay={1.3} />
        </span>
        <span className="font-sans text-soft-black">
          aus{" "}
          <AnimatedTitle
            text="Keraflott"
            className="text-primary"
            delay={1.3}
          />
        </span>
        <span className="font-sans text-soft-black">
          mit Liebe{" "}
          <AnimatedTitle
            text="gestaltet"
            className="text-primary"
            delay={1.3}
          />
        </span>
      </h1>
      <Link
        href="#my-creations"
        className="cursor-pointer text-xl py-2 px-8 rounded-full border-2 bg-soft-black border-soft-black hover:bg-transparent hover:text-soft-black text-white transition-colors z-50"
      >
        Meine Kreationen
      </Link>
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
        {[
          { transform: card1Transform, delay: 0, src: "20250615_151418.jpg" },
          { transform: card2Transform, delay: 0.1, src: "20250615_145040.jpg" },
          { transform: card3Transform, delay: 0.2, src: "20250608_182723.jpg" },
          { transform: card4Transform, delay: 0.3, src: "20250608_133037.jpg" },
          { transform: card5Transform, delay: 0.4, src: "20250615_124141.jpg" },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-lg"
            initial={initialCardAnimation.initial}
            animate={initialCardAnimation.animate}
            transition={{ delay: card.delay }}
            style={{
              x: card.transform.x,
              y: card.transform.y,
              rotate: card.transform.rotate,
              opacity: opacityValue,
              willChange: "transform",
            }}
          >
            <div className="relative w-full h-full p-2 bg-white rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
              <div className="relative w-full h-full rounded-lg overflow-hidden border-[6px] border-white shadow-inner">
                <Image
                  urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL}
                  src={card.src}
                  alt={`kreation`}
                  transformation={[
                    {
                      width: isMobile ? 300 : 400,
                      height: isMobile ? 375 : 500,
                    },
                  ]}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill={true}
                  className="object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/tr:w-10,h-10,bl-10/${card.src}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </header>
  );
};
