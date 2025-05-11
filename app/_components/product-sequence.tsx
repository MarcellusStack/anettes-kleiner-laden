import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";

export const ProductSequence = () => {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    mass: 0.2,
  });

  const shape1Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["-50px", "50px"]),
    { stiffness: 100, damping: 15 }
  );

  const shape2Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["50px", "-50px"]),
    { stiffness: 100, damping: 15 }
  );

  const shape3Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["-30px", "30px"]),
    { stiffness: 100, damping: 15 }
  );

  const images = ["/header-3.webp", "/header-4.avif", "/header-5.avif"];

  // Animation configs
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
    if (hasLoaded) return;
    setProgressWidth(latest * 100);
    if (latest >= 0.75) {
      setIsLoaded(true);
      setHasLoaded(true);
    }
  });

  useEffect(() => {
    if (!isLoaded) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [isLoaded]);

  const features = [
    // Row 1
    {
      title: "Handgefertigt",
      description:
        "Jedes Keraflott wird mit Liebe von Hand gefertigt und ist ein echtes Unikat",
      className: "col-span-12 lg:col-span-4",
      imageHeight: "h-[400px]",
      bgColor: "bg-[#E6E0F4]",
    },
    {
      title: "Holzschleifen",
      description:
        "Edle Holzschleifen und handgeknüpfte Bänder verleihen jedem Stück einen besonderen Charme",
      className: "col-span-12 lg:col-span-8",
      imageHeight: "h-[500px]",
      bgColor: "bg-[#FFB5C2]",
    },
    // Row 2
    {
      title: "Dekorationen",
      description:
        "Hochwertige Verzierungen aus natürlichen Materialien wie Trockenblumen und Naturperlen",
      className: "col-span-12 lg:col-span-6",
      imageHeight: "h-[600px]",
      bgColor: "bg-[#C8E6C1]",
    },
    {
      title: "Personalisierung",
      description:
        "Individuelle Gestaltung nach Ihren Wünschen - von der Farbwahl bis zum Design",
      className: "col-span-12 lg:col-span-6",
      imageHeight: "h-[600px]",
      bgColor: "bg-[#FFE5A3]",
    },
    // Row 3
    {
      title: "Qualität",
      description:
        "Erstklassige Materialien und sorgfältige Verarbeitung für langanhaltende Freude",
      className: "col-span-12",
      imageHeight: "h-[400px]",
      bgColor: "bg-[#B5D8E6]",
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-primary">
      <motion.div
        className="absolute top-20 left-[20%] w-64 h-64 rounded-full bg-primary/30 blur-3xl"
        style={{
          y: shape1Y,
          scale: useTransform(smoothProgress, [0, 0.5], [0.8, 1]),
          opacity: useTransform(smoothProgress, [0, 0.2], [0, 1]),
        }}
      />
      <motion.div
        className="absolute bottom-40 right-[15%] w-72 h-72 rounded-lg bg-primary/40 blur-3xl rotate-12"
        style={{
          y: shape2Y,
          scale: useTransform(smoothProgress, [0.2, 0.7], [0.8, 1]),
          opacity: useTransform(smoothProgress, [0.2, 0.4], [0, 1]),
        }}
      />
      <motion.div
        className="absolute top-1/2 left-[10%] w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        style={{
          y: shape3Y,
          scale: useTransform(smoothProgress, [0.4, 0.9], [0.8, 1]),
          opacity: useTransform(smoothProgress, [0.4, 0.6], [0, 1]),
        }}
      />

      <div className="min-h-screen grid place-items-center">
        {!hasLoaded ? (
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-64">
              <motion.div
                className="absolute -top-8 flex items-center gap-2"
                style={{
                  left: `${progressWidth}%`,
                  transform: "translateX(-50%)",
                }}
              >
                {/* Scissors SVG */}
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

                {/* Hot Glue Gun SVG */}
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
                  {/* ... keep all existing glue gun paths ... */}
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
                transition={{ ...loadingDots.transition, delay: 0.5 }}
              >
                .
              </motion.span>
              <motion.span
                {...loadingDots}
                className="inline-block"
                transition={{ ...loadingDots.transition, delay: 1 }}
              >
                .
              </motion.span>
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-16 w-full"
          >
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${feature.className} ${feature.bgColor} p-6 rounded-3xl transform rotate-1`}
                  style={{
                    backgroundImage: `
                      linear-gradient(#e5e7eb 1px, transparent 1px),
                      linear-gradient(to right, #e5e7eb 1px, transparent 1px)
                    `,
                    backgroundSize: "25px 25px",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <div className="absolute left-8 top-1/3 w-6 h-6 rounded-full bg-gray-100 shadow-inner border border-gray-200" />
                  <div className="absolute left-8 top-2/3 w-6 h-6 rounded-full bg-gray-100 shadow-inner border border-gray-200" />

                  <h2 className="text-soft-black text-3xl font-medium mb-4 font-hand">
                    {feature.title}
                  </h2>
                  <div
                    className={`relative ${feature.imageHeight} rounded-2xl overflow-hidden`}
                  >
                    <div className="relative w-full h-full p-2 bg-white rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
                      <div className="relative w-full h-full rounded-lg overflow-hidden border-[6px] border-white shadow-inner">
                        <Image
                          src={
                            images[(currentImageIndex + index) % images.length]
                          }
                          alt={`${feature.title} example`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-soft-black mt-4 font-hand text-lg">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
