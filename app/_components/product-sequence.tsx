import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "motion/react";
import { Image } from "@imagekit/next";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { EffectCards, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

export const ProductSequence = () => {
  const containerRef = useRef(null);
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
    restSpeed: 0.5,
    restDelta: 0.01,
  });

  // Snappier spring settings for shapes like in my-work.tsx
  const shapeSpringConfig = {
    stiffness: 100,
    damping: 15,
    mass: 0.1,
    restSpeed: 0.5,
    restDelta: 0.01,
  };

  // Create spring animations for each shape matching my-work.tsx visibility
  const shape1Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["200px", "-100px"]),
    shapeSpringConfig
  );

  const shape2Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["150px", "-80px"]),
    shapeSpringConfig
  );

  const shape3Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["180px", "-120px"]),
    shapeSpringConfig
  );

  // Animation configs
  const loadingDots = {
    animate: {
      opacity: [0, 1, 1, 0],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as const,
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
        repeatType: "loop" as const,
      },
    },
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (hasLoaded) return;
    setProgressWidth(latest * 100);
    if (latest >= 0.75) {
      setHasLoaded(true);
    }
  });

  const features = [
    {
      title: "Handgefertigt",
      description:
        "Ich fertige mit viel Liebe zum Detail handgemachte Dekorationen aus Keraflott - einem hochwertigen Gießpulver, das sich perfekt für feine, individuelle Bastelarbeiten eignet.",
      className: "col-span-12 lg:col-span-4",
      imageHeight: "h-[400px]",
      bgColor: "bg-[#E6E0F4]",
      images: [
        "20250524_150539.jpg",
        "20250524_150533.jpg",
        "20250607_141422.jpg",
        "20250524_124501.jpg",
        "20250427_145439.jpg",
        "20250508_183615.jpg",
        "20250412_130827.jpg",
        "20250412_133825.jpg",
        "20241229_140129.jpg",
        "20250331_181230.jpg",
        "20240908_154009.jpg",
      ],
    },
    {
      title: "Dekorationen",
      description:
        "Jedes Stück ist ein Unikat und entsteht in liebevoller Handarbeit. Ob schlichte Eleganz, rustikaler Charme oder verspielte Details.",
      className: "col-span-12 lg:col-span-8",
      imageHeight: "h-[500px]",
      bgColor: "bg-[#FFB5C2]",
      images: [
        "20250524_150444.jpg",
        "IMG-20250222-WA0009.jpg",
        "20250525_162939.jpg",
        "20250510_195025.jpg",
        "20250502_122418.jpg",
        "20250420_184835.jpg",
        "20250427_135747.jpg",
        "20250413_132406.jpg",
        "20250420_182446.jpg",
        "20250208_151844.jpg",
        "20240924_104534.jpg",
        "20240924_104417.jpg",
      ],
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full" id="my-creations">
      <h2 className="relative text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans text-center mb-8">
        <span className="text-soft-black font-sans">
          Meine <span className="text-primary">Kreationen</span>
        </span>
      </h2>
      {/* Decorative background shapes with enhanced scroll animations */}
      <motion.div
        className="absolute top-20 left-[10%] w-[200px] h-[200px] rounded-full bg-primary/30 blur-3xl"
        style={{
          y: shape1Y,
          scale: useTransform(smoothProgress, [0, 0.5], [0.8, 1.2]),
          opacity: useTransform(smoothProgress, [0, 0.4], [0.2, 1]),
        }}
      />
      <motion.div
        className="absolute bottom-40 right-[15%] w-[180px] h-[180px] rounded-lg bg-primary/40 blur-3xl rotate-12"
        style={{
          y: shape2Y,
          scale: useTransform(smoothProgress, [0.2, 0.7], [0.8, 1.2]),
          opacity: useTransform(smoothProgress, [0.2, 0.6], [0.2, 1]),
        }}
      />
      <motion.div
        className="absolute top-1/2 left-[5%] w-[250px] h-[250px] rounded-full bg-primary/20 blur-3xl"
        style={{
          y: shape3Y,
          scale: useTransform(smoothProgress, [0.4, 0.9], [0.8, 1.2]),
          opacity: useTransform(smoothProgress, [0.4, 0.8], [0.2, 1]),
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

              <div className="w-full h-2 bg-primary/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${progressWidth}%` }}
                />
              </div>
            </div>
            <p className="text-primary text-lg flex items-center font-sans">
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
            {/* Restored Bento Grid Layout */}
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${feature.className} p-6 rounded-3xl transform ${
                    index % 2 === 0 ? "-rotate-1" : "rotate-1"
                  }`}
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
                  {/* Paper holes */}
                  <div className="absolute left-8 top-1/3 w-6 h-6 rounded-full bg-gray-100 shadow-inner border border-gray-200" />
                  <div className="absolute left-8 top-2/3 w-6 h-6 rounded-full bg-gray-100 shadow-inner border border-gray-200" />

                  <h2 className="text-primary text-3xl font-medium mb-4 font-hand">
                    {feature.title}
                  </h2>

                  {/* Swiper Cards Container for Images */}
                  <div
                    className={`relative ${feature.imageHeight} rounded-2xl overflow-hidden mb-4`}
                  >
                    <Swiper
                      effect={"cards"}
                      grabCursor={true}
                      modules={[EffectCards, Autoplay]}
                      autoplay={{
                        delay: 3000 + index * 500, // Stagger the autoplay timing
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      cardsEffect={{
                        rotate: true,
                        perSlideRotate: 6,
                        perSlideOffset: 6,
                        slideShadows: true,
                      }}
                      className="w-full h-full image-swiper"
                    >
                      {feature.images.map((image, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <div className="relative w-full h-full p-2 bg-white rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
                            <div className="relative w-full h-full rounded-lg overflow-hidden border-[6px] border-white shadow-inner">
                              <Image
                                urlEndpoint={
                                  process.env.NEXT_PUBLIC_IMAGEKIT_URL
                                }
                                src={image}
                                alt={`${feature.title} example ${imgIndex + 1}`}
                                transformation={[
                                  {
                                    width: index == 0 ? 400 : 1200,
                                    height: index == 0 ? 375 : 720,
                                  },
                                ]}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill={true}
                                className="object-fit"
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <p className="text-soft-black font-hand text-lg sm:text-xl">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <style jsx global>{`
        .image-swiper {
          border-radius: 16px;
        }

        .image-swiper .swiper-slide {
          background: transparent;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .image-swiper .swiper-slide-shadow-cards {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.05) 0%,
            rgba(0, 0, 0, 0.2) 100%
          );
          border-radius: 16px;
        }
      `}</style>
    </section>
  );
};
