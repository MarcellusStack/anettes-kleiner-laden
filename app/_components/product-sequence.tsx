import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
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

  const scissorsMotion = {
    animate: {
      rotate: [-10, 10, -10],
    },
    transition: {
      rotate: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
      },
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
      className="relative h-[450px] md:h-screen w-full overflow-hidden grid place-items-center bg-primary"
    >
      {!isLoaded && (
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64">
            <motion.div
              className="absolute -top-8 flex items-center gap-2"
              style={{
                left: `${progressWidth}%`,
                transform: "translateX(-50%)",
              }}
            >
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...scissorsMotion}
              >
                <path
                  d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 4L8.12 15.88"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.47 14.48L20 20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.12 8.12L12 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* More detailed Hot Glue Gun SVG */}
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {/* Handle with more detail */}
                <path
                  d="M3 14V8C3 6.89543 3.89543 6 5 6H7L9 4H13L15 6H17C18.1046 6 19 6.89543 19 8V14C19 15.1046 18.1046 16 17 16H5C3.89543 16 3 15.1046 3 14Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Grip texture */}
                <path
                  d="M5 8H7M5 10H7M5 12H7"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                {/* Trigger */}
                <path
                  d="M6 16V19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Enhanced Nozzle */}
                <path
                  d="M19 11H22L20.5 9.5V12.5L19 11Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Glue Stick Entry */}
                <path
                  d="M3 11H1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Heat Indicator with glow effect */}
                <circle cx="16" cy="11" r="1" fill="white" />
                <circle cx="16" cy="11" r="2" fill="white" fillOpacity="0.3" />
                {/* Multiple Dripping Glue Effects */}
                <motion.path
                  d="M22 11L23 13L22.5 15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    opacity: [0, 1, 0],
                    pathLength: [0, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                <motion.path
                  d="M22.5 11L22 12.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  animate={{
                    opacity: [0, 1, 0],
                    pathLength: [0, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 0.5,
                  }}
                />
                {/* Hot glue buildup */}
                <motion.circle
                  cx="22"
                  cy="11"
                  r="1"
                  fill="white"
                  fillOpacity="0.5"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              </motion.svg>
            </motion.div>

            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: `${progressWidth}%` }}
              />
            </div>
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
