import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { motorcycleImages } from "@/data/motorcycle";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0.85]);

  const scrollToMachine = () => {
    document.querySelector("#machine")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSpecs = () => {
    document.querySelector("#specs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black grain-overlay"
    >
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={motorcycleImages.hero}
          alt="Cafe Racer motorcycle in cinematic studio"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col justify-end h-full pb-24 md:pb-32 px-6 md:px-12 lg:px-20"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xs tracking-[0.4em] text-accent font-medium mb-6 md:mb-8"
        >
          VANTA MOTORCYCLES — VANTAGE 850
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[18vw] md:text-[12vw] lg:text-[10rem] leading-[0.85] text-off-white"
          >
            CUSTOM
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[18vw] md:text-[12vw] lg:text-[10rem] leading-[0.85] text-off-white"
          >
            BUILT
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[18vw] md:text-[12vw] lg:text-[10rem] leading-[0.85] text-accent"
          >
            TO RIDE.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col md:flex-row md:items-end justify-between mt-8 md:mt-12 gap-6"
        >
          <p className="text-sm tracking-[0.3em] text-neutral-400 font-light max-w-xs">
            PURE MECHANICAL CHARACTER.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToMachine}
              className="px-8 py-4 bg-accent text-white text-xs tracking-[0.2em] font-semibold hover:bg-accent-light transition-colors duration-300"
            >
              EXPLORE THE MACHINE
            </button>
            <button
              onClick={scrollToSpecs}
              className="px-8 py-4 border border-white/20 text-off-white text-xs tracking-[0.2em] font-semibold hover:border-accent hover:text-accent transition-colors duration-300"
            >
              VIEW SPECS
            </button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-neutral-500">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-neutral-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
