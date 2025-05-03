"use client";
import { motion } from "motion/react";
import React, { useState } from "react";

export const LoadingScreen = () => {
  const [completed, setCompleted] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ translateY: "0" }}
      animate={{
        translateY: "-100%",
        display: completed ? "none" : "grid",
      }}
      onAnimationComplete={() => {
        setCompleted(true);
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 0.8,
        delay: 1.3,
      }}
      className="bg-primary min-h-screen grid place-items-center absolute inset-0 z-[1000]"
    >
      <motion.h1 className="text-3xl text-white font-bold font-sans flex flex-row items-center gap-1">
        <motion.span
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
            mass: 0.8,
            delay: 0.2,
          }}
          className="inline-block"
        >
          Anettes{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.8,
            delay: 0.3,
          }}
          className="inline-block"
        >
          kleiner{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.8,
            delay: 0.4,
          }}
          className="inline-block"
        >
          Laden
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              mass: 0.8,
              delay: 0.5,
            }}
            className="inline-block"
          >
            .
          </motion.span>
        </motion.span>
      </motion.h1>
    </motion.div>
  );
};
