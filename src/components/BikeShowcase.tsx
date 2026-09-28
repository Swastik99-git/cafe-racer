import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { motorcycleImages, showcaseLabels } from "@/data/motorcycle";

export default function BikeShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={ref}
      className="relative h-[100vh] w-full overflow-hidden bg-black"
    >
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0"
      >
        <img
          src={motorcycleImages.fullShowcase}
          alt="Full-width cafe racer motorcycle showcase"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.4em] text-accent font-medium mb-4"
        >
          03 — ANATOMY
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-off-white leading-[0.9] max-w-2xl"
        >
          EVERY PART,<br />PURPOSED.
        </motion.h2>
      </div>

      {showcaseLabels.map((label, i) => (
        <motion.div
          key={label.text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
          className="absolute z-10 hidden md:flex items-center"
          style={{ top: label.top, left: label.left }}
        >
          {label.lineDirection === "left" && (
            <>
              <span className="text-[10px] tracking-[0.25em] text-off-white font-medium whitespace-nowrap pr-3">
                {label.text}
              </span>
              <div className="h-px bg-accent/70" style={{ width: label.lineLength }} />
              <div className="w-2 h-2 rounded-full bg-accent -ml-1" />
            </>
          )}
          {label.lineDirection === "right" && (
            <>
              <div className="w-2 h-2 rounded-full bg-accent -mr-1" />
              <div className="h-px bg-accent/70" style={{ width: label.lineLength }} />
              <span className="text-[10px] tracking-[0.25em] text-off-white font-medium whitespace-nowrap pl-3">
                {label.text}
              </span>
            </>
          )}
          {label.lineDirection === "up" && (
            <div className="flex flex-col items-center -translate-y-full">
              <span className="text-[10px] tracking-[0.25em] text-off-white font-medium whitespace-nowrap mb-2">
                {label.text}
              </span>
              <div className="w-px bg-accent/70" style={{ height: label.lineLength }} />
              <div className="w-2 h-2 rounded-full bg-accent -mt-1" />
            </div>
          )}
          {label.lineDirection === "down" && (
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-accent -mb-1" />
              <div className="w-px bg-accent/70" style={{ height: label.lineLength }} />
              <span className="text-[10px] tracking-[0.25em] text-off-white font-medium whitespace-nowrap mt-2">
                {label.text}
              </span>
            </div>
          )}
        </motion.div>
      ))}
    </section>
  );
}
