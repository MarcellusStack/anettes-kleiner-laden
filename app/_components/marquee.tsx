import { motion } from "motion/react";

export const Marquee = ({ text1, text2 }: { text1: string; text2: string }) => {
  return (
    <div className="relative w-full md:w-[120%] md:-ml-[10%]">
      <div className="bg-white border-2 border-primary overflow-hidden whitespace-nowrap relative rotate-2 md:rotate-6 py-3 md:py-5">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="inline-block whitespace-nowrap transform will-change-transform"
        >
          <h2 className="font-sans text-xl md:text-2xl text-primary inline-block mr-[30px] md:mr-[50px]">{text2}</h2>
          <h2 className="font-sans text-xl md:text-2xl text-primary inline-block mr-[30px] md:mr-[50px]">{text2}</h2>
        </motion.div>
      </div>

      <div className="bg-primary overflow-hidden whitespace-nowrap relative mt-6 md:-mt-16 -rotate-2 md:-rotate-4 py-3 md:py-5">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="inline-block whitespace-nowrap transform will-change-transform"
        >
          <h2 className="font-sans text-xl md:text-2xl text-white inline-block mr-[30px] md:mr-[50px]">{text1}</h2>
          <h2 className="font-sans text-xl md:text-2xl text-white inline-block mr-[30px] md:mr-[50px]">{text1}</h2>
        </motion.div>
      </div>
    </div>
  );
};
