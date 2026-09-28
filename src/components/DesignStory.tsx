import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { storySlides } from "@/data/motorcycle";

export default function DesignStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section
      ref={ref}
      id="story"
      className="relative h-[300vh] bg-[#0a0a0a]"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-20 pt-24 md:pt-28">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] text-accent font-medium mb-4"
          >
            05 — DESIGN STORY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-off-white leading-[0.9]"
          >
            BUILT WITH INTENTION.
          </motion.h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-16 pl-[60vw] md:pl-[50vw] pr-6 md:pr-20">
          {storySlides.map((slide, i) => (
            <div
              key={slide.number}
              className="relative h-[55vh] md:h-[60vh] w-[80vw] md:w-[55vw] lg:w-[45vw] flex-shrink-0 overflow-hidden mt-32 md:mt-36"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-display text-5xl md:text-6xl text-accent leading-none">
                    {slide.number}
                  </span>
                  <span className="font-display text-3xl md:text-5xl text-off-white leading-none">
                    {slide.title}
                  </span>
                </div>
                <p className="text-base md:text-lg text-neutral-300 font-light max-w-sm">
                  {slide.description}
                </p>
              </div>

              <div className="absolute top-6 right-6 text-xs tracking-[0.3em] text-neutral-500">
                {String(i + 1).padStart(2, "0")} / {String(storySlides.length).padStart(2, "0")}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {storySlides.map((_, i) => (
            <div
              key={i}
              className="w-12 h-px bg-white/15"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
