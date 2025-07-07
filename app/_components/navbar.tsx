"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-center p-4 z-50 ">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.8,
          delay: 1.4,
        }}
        className="relative w-full max-w-2xl bg-white rounded-lg"
      >
        <div className="border border-gray-300 rounded-lg  p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-soft-black font-sans">
              Anettes kleiner Laden
            </h2>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-12 rounded-full hover:bg-soft-black/80 bg-soft-black flex flex-col items-center justify-center cursor-pointer"
            >
              <motion.div
                animate={{
                  rotate: isOpen ? 45 : 0,
                  translateY: isOpen ? 1.5 : -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 0.8,
                }}
                className="absolute w-6 h-[2px] bg-white rounded-full origin-center"
              />
              <motion.div
                animate={{
                  rotate: isOpen ? -45 : 0,
                  translateY: isOpen ? 1 : 4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 0.8,
                }}
                className="absolute w-6 h-[2px] bg-white rounded-full origin-center"
              />
            </motion.button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 0.8,
                  opacity: { duration: 0.2 },
                }}
                className="overflow-hidden relative "
              >
                <div className="relative overflow-hidden">
                  <div className="flex flex-col items-center space-y-4 relative z-10 py-6">
                    <motion.a
                      href="#"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                        mass: 0.8,
                        delay: 0.2,
                      }}
                      className="text-center text-soft-black font-bold hover:text-primary text-2xl font-sans"
                    >
                      Meine Kreationen
                    </motion.a>
                    <motion.a
                      href="#"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                        mass: 0.8,
                        delay: 0.3,
                      }}
                      className="text-center text-soft-black font-bold hover:text-primary text-2xl font-sans"
                    >
                      Meine Arbeit
                    </motion.a>
                    <motion.a
                      href="#"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                        mass: 0.8,
                        delay: 0.4,
                      }}
                      className="text-center text-soft-black font-bold hover:text-primary text-2xl font-sans"
                    >
                      Kontakt
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </nav>
  );
};
