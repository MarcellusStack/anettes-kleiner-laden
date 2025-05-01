"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-center p-4 z-50">
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
        className="relative w-full max-w-2xl"
      >
        <div className="border border-gray-400 rounded-lg bg-white p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-soft-black">
              Anettes kleiner Laden
            </h2>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-soft-black/85 bg-soft-black transition-colors rounded-md px-4 py-2"
            >
              Menü
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
                className="overflow-hidden"
              >
                <div className="flex flex-col items-start space-y-4 pt-4 border-t border-gray-200 mt-4">
                  <motion.a href="#" className=" text-soft-black   ">
                    Produkte
                  </motion.a>
                  <motion.a href="#" className=" text-soft-black   ">
                    Meine Arbeit
                  </motion.a>
                  <motion.a href="#" className=" text-soft-black   ">
                    Kontakt
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </nav>
  );
};
