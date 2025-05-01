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
        className="relative w-full max-w-2xl bg-white"
      >
        <div className="border border-gray-300 rounded-lg  p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-soft-black font-sans">
              Anettes kleiner Laden
            </h2>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-12 rounded-full hover:bg-soft-black/80 bg-soft-black flex flex-col items-center justify-center"
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
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                      mass: 0.8,
                      delay: 0.1,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={300}
                      height={300}
                      viewBox="0 0 700 700"
                      className="absolute -top-20 -right-20"
                    >
                      <path
                        fill="var(--color-primary)"
                        d="M675.526 445.583c4.225 31.521-38.048 52.867-62.029 73.756-22.215 19.352-54.3 27.156-75.562 47.55-22.438 21.518-22.371 77.569-53.46 77.57-67.696.003-48.785-171.726-116.423-168.903-31.985 1.335-26.282 60.858-48.208 84.183-25.38 27-59.178 74.892-93.813 61.716-31.312-11.913-26.72-64.56-26.28-98.059.43-32.666 48.718-69.548 28.134-94.917-41.788-51.5-178.238 78.733-200.317 16.196C9.096 392.355 165.875 405.48 166.512 350c.594-51.817-138.643-40.722-127.708-91.375 9.17-42.473 96.753 3.335 129.155-25.616 17.583-15.71 13.686-45.9 21.672-68.084 10.634-29.54 15.837-63.81 35.545-88.25 19.51-24.195 48.436-62.738 77.92-52.905 63.768 21.268-.487 183.509 66.106 192.676 71.09 9.786 51.896-174.57 123.52-178.965 32.154-1.973 58.306 41.417 64.859 72.958 9.502 45.745-23.664 92.528-44.14 134.524-12.362 25.355-55.05 43.815-47.577 71.016 6.919 25.186 48.857 20.937 71.462 34.021 47.991 27.779 130.834 40.623 138.2 95.583Z"
                      />
                    </svg>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                      mass: 0.8,
                      delay: 0.2,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={200}
                      height={200}
                      viewBox="0 0 700 700"
                      className="absolute -top-40 left-20"
                    >
                      <path
                        fill="var(--color-primary)"
                        d="M675.526 445.583c4.225 31.521-38.048 52.867-62.029 73.756-22.215 19.352-54.3 27.156-75.562 47.55-22.438 21.518-22.371 77.569-53.46 77.57-67.696.003-48.785-171.726-116.423-168.903-31.985 1.335-26.282 60.858-48.208 84.183-25.38 27-59.178 74.892-93.813 61.716-31.312-11.913-26.72-64.56-26.28-98.059.43-32.666 48.718-69.548 28.134-94.917-41.788-51.5-178.238 78.733-200.317 16.196C9.096 392.355 165.875 405.48 166.512 350c.594-51.817-138.643-40.722-127.708-91.375 9.17-42.473 96.753 3.335 129.155-25.616 17.583-15.71 13.686-45.9 21.672-68.084 10.634-29.54 15.837-63.81 35.545-88.25 19.51-24.195 48.436-62.738 77.92-52.905 63.768 21.268-.487 183.509 66.106 192.676 71.09 9.786 51.896-174.57 123.52-178.965 32.154-1.973 58.306 41.417 64.859 72.958 9.502 45.745-23.664 92.528-44.14 134.524-12.362 25.355-55.05 43.815-47.577 71.016 6.919 25.186 48.857 20.937 71.462 34.021 47.991 27.779 130.834 40.623 138.2 95.583Z"
                      />
                    </svg>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                      mass: 0.8,
                      delay: 0.3,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={150}
                      height={150}
                      viewBox="0 0 700 700"
                      className="absolute top-20 -left-20 "
                    >
                      <path
                        fill="var(--color-primary)"
                        d="M675.526 445.583c4.225 31.521-38.048 52.867-62.029 73.756-22.215 19.352-54.3 27.156-75.562 47.55-22.438 21.518-22.371 77.569-53.46 77.57-67.696.003-48.785-171.726-116.423-168.903-31.985 1.335-26.282 60.858-48.208 84.183-25.38 27-59.178 74.892-93.813 61.716-31.312-11.913-26.72-64.56-26.28-98.059.43-32.666 48.718-69.548 28.134-94.917-41.788-51.5-178.238 78.733-200.317 16.196C9.096 392.355 165.875 405.48 166.512 350c.594-51.817-138.643-40.722-127.708-91.375 9.17-42.473 96.753 3.335 129.155-25.616 17.583-15.71 13.686-45.9 21.672-68.084 10.634-29.54 15.837-63.81 35.545-88.25 19.51-24.195 48.436-62.738 77.92-52.905 63.768 21.268-.487 183.509 66.106 192.676 71.09 9.786 51.896-174.57 123.52-178.965 32.154-1.973 58.306 41.417 64.859 72.958 9.502 45.745-23.664 92.528-44.14 134.524-12.362 25.355-55.05 43.815-47.577 71.016 6.919 25.186 48.857 20.937 71.462 34.021 47.991 27.779 130.834 40.623 138.2 95.583Z"
                      />
                    </svg>
                  </motion.div>
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
                      Produkte
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
