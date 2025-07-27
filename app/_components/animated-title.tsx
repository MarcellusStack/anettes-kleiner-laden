"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface AnimatedTitleProps {
  text: string;
  className?: string;
  delay?: number; // Optional delay in seconds
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  className = "",
  delay = 0, // Default to 0 for backward compatibility
}) => {
  const letters = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getRotation = (index: number, letter: string) => {
    if (letter === " ") return 0;
    const charCode = letter.charCodeAt(0);
    return ((charCode + index) % 20) - 10;
  };

  return (
    <span
      ref={ref}
      className={`inline-block align-baseline ${className} relative`}
      style={{
        lineHeight: "1",
        display: "inline-flex",
        gap: "0.02em", // optional tweak
      }}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden align-baseline"
          style={{ height: "1em" }}
        >
          <motion.span
            className="inline-block"
            initial={{
              y: "100%",
              rotate: getRotation(index, letter),
            }}
            animate={
              isInView
                ? { y: "0%", rotate: 0 }
                : { y: "100%", rotate: getRotation(index, letter) }
            }
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.8,
              delay: isInView ? delay + index * 0.05 + 0.2 : 0, // Add the optional delay
            }}
            style={{
              transformOrigin: "bottom center",
              display: "inline-block",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
