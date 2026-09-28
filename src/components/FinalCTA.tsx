import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { motorcycleImages } from "@/data/motorcycle";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

  const handleStartRide = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0 z-0"
      >
        <img
          src={motorcycleImages.finalCta}
          alt="Cafe racer motorcycle on the open road"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/60" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[20vw] md:text-[14vw] lg:text-[12rem] leading-[0.85] text-off-white"
        >
          MAKE SOME
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[20vw] md:text-[14vw] lg:text-[12rem] leading-[0.85] text-accent"
        >
          NOISE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-sm md:text-base text-neutral-400 font-light tracking-wide mt-6 mb-10 max-w-md"
        >
          Built for riders who don't need permission.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          onClick={handleStartRide}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-5 bg-accent text-white text-xs tracking-[0.3em] font-semibold hover:bg-accent-light transition-colors duration-300"
        >
          START YOUR RIDE
        </motion.button>
      </div>
    </section>
  );
}
