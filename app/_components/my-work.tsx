import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "motion/react";
import { IconPencil } from "@tabler/icons-react";

export const MyWork = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    mass: 0.2,
    restSpeed: 0.5,
    restDelta: 0.01,
  });

  // Snappier spring settings for shapes
  const shapeSpringConfig = {
    stiffness: 100,
    damping: 15,
    mass: 0.1,
    restSpeed: 0.5,
    restDelta: 0.01,
  };

  // Create spring animations for each shape
  const shape1Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["-50px", "50px"]),
    shapeSpringConfig
  );

  const shape2Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["50px", "-50px"]),
    shapeSpringConfig
  );

  const shape3Y = useSpring(
    useTransform(smoothProgress, [0, 1], ["-30px", "30px"]),
    shapeSpringConfig
  );

  // Split texts
  const title = "Meine Arbeit";
  const titleLetters = title.split("");

  const paragraph =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi sapiente ducimus incidunt ex, sed quibusdam ullam provident. A, ipsum ipsa pariatur consectetur, nam fuga inventore quo id aperiam nesciunt earum! Magnam atque deleniti beatae molestiae dolore deserunt provident velit doloribus iste blanditiis nisi repellat explicabo, repudiandae distinctio. Ipsum id culpa consequuntur, dolore, sit fuga voluptatum et velit iure ipsam ratione aliquid laboriosam deserunt ea similique inventore dignissimos nisi cumque veritatis eligendi magnam neque! Blanditiis at vero quos porro doloremque, nisi ea fugit tempore? Neque dolore quidem illo magnam et dolores dignissimos at quibusdam praesentium, odio debitis fuga quis adipisci!";
  const paragraphLetters = paragraph.split("");

  const yTransform = useTransform(smoothProgress, [0, 1], ["50px", "0px"]);

  const pathRef = useRef(null);
  const progressX = useMotionValue(0);
  const progressY = useMotionValue(0);

  // Create smooth spring animation for the underline
  const pathLength = useSpring(
    useTransform(smoothProgress, [0.2, 0.4], [0, 1]),
    {
      stiffness: 100,
      damping: 20,
      mass: 0.5,
    }
  );

  // Update pen position based on path progress with clamping
  useEffect(() => {
    const pathElement = pathRef.current;
    if (!pathElement) return;

    const totalLength = pathElement.getTotalLength();

    const unsubscribe = pathLength.onChange((latest) => {
      // Clamp the value between 0 and 1
      const clampedLatest = Math.min(Math.max(latest, 0), 1);
      const point = pathElement.getPointAtLength(clampedLatest * totalLength);
      progressX.set(point.x);
      progressY.set(point.y);
    });

    return unsubscribe;
  }, [pathLength, progressX, progressY]);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center gap-5 md:gap-10 container mx-auto px-4 md:px-10 min-h-[50vh] md:min-h-screen overflow-hidden pb-10"
    >
      {/* Decorative background shapes with enhanced animations */}
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

      <motion.div
        className="relative flex flex-col items-center gap-5 md:gap-10 w-full max-w-4xl"
        style={{ y: yTransform, zIndex: 1 }}
      >
        <motion.div
          className="relative w-full bg-white rounded-lg shadow-lg p-4 md:p-8 transform rotate-1"
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
          {/* Folder holes */}
          <div className="absolute left-8 top-1/3 w-6 h-6 rounded-full bg-gray-100 shadow-inner border border-gray-200" />
          <div className="absolute left-8 top-2/3 w-6 h-6 rounded-full bg-gray-100 shadow-inner border border-gray-200" />

          {/* Title with underline animation */}
          <div className="relative mb-4 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-hand text-primary flex flex-wrap justify-center">
              {titleLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block relative"
                  style={{
                    opacity: useTransform(
                      smoothProgress,
                      [0, 0.1 + index * 0.01, 0.2 + index * 0.01],
                      [0, 0, 1]
                    ),
                    rotate: useTransform(
                      smoothProgress,
                      [0, 0.1 + index * 0.01, 0.2 + index * 0.01],
                      [-20, -20, 0]
                    ),
                    y: useTransform(
                      smoothProgress,
                      [0, 0.1 + index * 0.01, 0.2 + index * 0.01],
                      ["20px", "20px", "0px"]
                    ),
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h2>

            {/* Animated underline with pen */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="10"
              width="100%"
            >
              <motion.path
                ref={pathRef}
                d="M 0 5 L 1000 5"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary"
                fill="none"
                strokeLinecap="round"
                style={{
                  pathLength,
                }}
              />
            </svg>

            {/* Pen following the underline */}
            <motion.div
              className="absolute text-primary"
              style={{
                x: progressX,
                y: progressY,
                translateY: -24,
                translateX: 0,
                opacity: useTransform(
                  pathLength,
                  [0, 0.01, 0.99, 1],
                  [0, 1, 1, 0]
                ), // Fade pen at start/end
              }}
            >
              <IconPencil size={24} />
            </motion.div>
          </div>

          {/* Paragraph with adjusted letter animations */}
          <div className="text-center text-soft-black font-hand text-lg md:text-2xl leading-[2] md:leading-[2.5] flex flex-wrap justify-center">
            {paragraphLetters.map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                style={{
                  opacity: useTransform(
                    smoothProgress,
                    [0.2 + index * 0.0003, 0.3 + index * 0.0003],
                    [0, 1]
                  ),
                  rotate: useTransform(
                    smoothProgress,
                    [0.2 + index * 0.0003, 0.3 + index * 0.0003],
                    [-10, 0]
                  ),
                  y: useTransform(
                    smoothProgress,
                    [0.2 + index * 0.0003, 0.3 + index * 0.0003],
                    ["15px", "0px"]
                  ),
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
