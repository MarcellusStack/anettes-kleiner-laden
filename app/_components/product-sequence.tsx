import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";

export const ProductSequence = () => {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const images = ["/header-3.webp", "/header-4.avif", "/header-5.avif"];

  const loadingDots = {
    animate: {
      opacity: [0, 1, 1, 0],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      times: [0, 0.2, 0.8, 1],
    },
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Update progress width
    setProgressWidth(latest * 150);

    // Set loaded state when scroll reaches target
    if (latest >= 0.75) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  });

  useEffect(() => {
    if (!isLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden grid place-items-center bg-primary"
    >
      {!isLoaded && (
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              style={{ width: `${progressWidth}%` }}
            />
          </div>
          <p className="text-white text-lg flex items-center font-sans">
            Bilder werden geladen
            <motion.span {...loadingDots} className="inline-block ml-[2px]">
              .
            </motion.span>
            <motion.span
              {...loadingDots}
              className="inline-block"
              transition={{
                ...loadingDots.transition,
                delay: 0.5,
              }}
            >
              .
            </motion.span>
            <motion.span
              {...loadingDots}
              className="inline-block"
              transition={{
                ...loadingDots.transition,
                delay: 1,
              }}
            >
              .
            </motion.span>
          </p>
        </motion.div>
      )}

      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[90%] h-[90%] rounded-md relative overflow-hidden absolute"
        >
          <Image
            alt="Product sequence"
            src={images[currentImageIndex]}
            fill
            className="object-cover"
          />
        </motion.div>
      )}
    </section>
  );
};
