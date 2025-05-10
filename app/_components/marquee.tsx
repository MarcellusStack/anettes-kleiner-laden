import { motion } from "motion/react";

type MarqueeVariant = "primary" | "white";

interface MarqueeProps {
  text: string;
  variant?: MarqueeVariant;
}

export const Marquee = ({ text, variant = "primary" }: MarqueeProps) => {
  const isPrimary = variant === "primary";

  // Calculate duration based on text length (adjust multiplier as needed)
  const baseDuration = Math.max(text.length * 0.5, 20); // minimum 20 seconds

  // Create array of repeated text elements
  const textArray = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="relative w-full md:w-[120%] md:-ml-[10%]">
      <div
        className={`
          ${isPrimary ? "bg-primary" : "bg-white border-2 border-primary"} 
          overflow-hidden whitespace-nowrap relative 
          ${isPrimary ? "-rotate-2 md:-rotate-4" : "rotate-2 md:rotate-6"} 
          py-3 md:py-5
        `}
      >
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
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
