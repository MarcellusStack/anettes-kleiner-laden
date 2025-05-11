import { motion, useAnimationControls } from "motion/react";
import { useState, useEffect } from "react";

type MarqueeVariant = "primary" | "white";

interface MarqueeProps {
  text: string;
  variant?: MarqueeVariant;
}

export const Marquee = ({ text, variant = "primary" }: MarqueeProps) => {
  const isPrimary = variant === "primary";
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);

  // Calculate duration based on text length (adjust multiplier as needed)
  const baseDuration = Math.max(text.length * 0.5, 20); // minimum 20 seconds

  // Create array of repeated text elements
  const textArray = Array.from({ length: 8 }, (_, i) => i);

  // Start animation on mount
  useEffect(() => {
    controls.start({ x: "-50%" });
  }, [controls]);

  const handleHoverStart = () => {
    controls.stop();
    setIsPaused(true);
  };

  const handleHoverEnd = () => {
    controls.start({ x: "-50%" });
    setIsPaused(false);
  };

  return (
    <div className="relative w-full md:w-[120%] md:-ml-[10%]">
      <div
        className={`
          ${isPrimary ? "bg-primary" : "bg-white border-2 border-primary"} 
          overflow-hidden whitespace-nowrap relative 
          ${isPrimary ? "-rotate-2 md:-rotate-4" : "rotate-2 md:rotate-6"} 
          py-3 md:py-5
          cursor-pointer
        `}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        onClick={() => {
          if (isPaused) {
            handleHoverEnd();
          } else {
            handleHoverStart();
          }
        }}
      >
        <motion.div
          initial={{ x: "0%" }}
          animate={controls}
          transition={{
            duration: baseDuration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="inline-block whitespace-nowrap transform will-change-transform"
        >
          {textArray.map((index) => (
            <h2
              key={index}
              className={`
                font-sans text-xl md:text-2xl 
                ${isPrimary ? "text-white" : "text-primary"} 
                inline-block mr-[30px] md:mr-[50px]
              `}
            >
              {text}
            </h2>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
