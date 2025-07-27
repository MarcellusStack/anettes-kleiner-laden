"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous === undefined) return;

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navVariants = {
    closed: {
      borderRadius: 9999,
    },
    open: {
      borderRadius: 24,
    },
  };

  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2 },
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2, delay: 0.1 },
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-center p-4 z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: hidden ? -100 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.8,
          delay: scrollY.get() === 0 ? 1.4 : 0,
        }}
        className="relative w-full max-w-4xl bg-transparent"
      >
        <motion.div
          variants={navVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="border border-gray-300 bg-white"
        >
          <div className="flex items-center justify-between gap-4 p-2">
            <h2 className="text-xl font-semibold text-soft-black font-sans pl-4">
              Anettes kleiner Laden
            </h2>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 pr-4">
              <Link
                href="#my-creations"
                className="cursor-pointer font-semibold text-lg py-1 px-2 rounded-full border-transparent border-2 hover:border-primary text-primary transition-all"
              >
                Meine Kreationen
              </Link>
              <Link
                href="#my-work"
                className="cursor-pointer font-semibold text-lg py-1 px-2 rounded-full border-transparent border-2 hover:border-primary text-primary transition-all"
              >
                Meine Arbeit
              </Link>
              <Link
                href="#contact"
                className="cursor-pointer font-semibold text-primary text-lg py-1 px-2 rounded-full border-transparent border-2 hover:border-primary transition-all"
              >
                Kontakt
              </Link>
            </div>

            {/* Mobile Burger Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-12 h-12 rounded-full hover:bg-primary/80 bg-primary flex flex-col items-center justify-center cursor-pointer mr-2"
              aria-label="Menü öffnen"
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

          {/* Mobile Navigation Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="overflow-hidden relative md:hidden border-t border-gray-300"
          >
            <div className="relative overflow-hidden">
              <div className="flex flex-col items-center space-y-4 relative z-10 py-6">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={
                    isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    mass: 0.8,
                    delay: 0.2,
                  }}
                >
                  <Link
                    href="#my-creations"
                    className="text-center text-primary font-bold text-2xl font-sans"
                    onClick={() => setIsOpen(false)}
                  >
                    Meine Kreationen
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={
                    isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    mass: 0.8,
                    delay: 0.3,
                  }}
                >
                  <Link
                    href="#my-work"
                    className="text-center text-primary font-bold text-2xl font-sans"
                    onClick={() => setIsOpen(false)}
                  >
                    Meine Arbeit
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={
                    isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    mass: 0.8,
                    delay: 0.4,
                  }}
                >
                  <Link
                    href="#contact"
                    className="text-center text-primary font-bold text-2xl font-sans"
                    onClick={() => setIsOpen(false)}
                  >
                    Kontakt
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </nav>
  );
};
