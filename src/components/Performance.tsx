import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { performanceStats } from "@/data/motorcycle";

export default function Performance() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], ["50%", "0%"]);

  return (
    <section
      ref={ref}
      className="relative bg-[#080808] py-24 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <motion.div style={{ y: headerY }} className="mb-16 md:mb-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.4em] text-accent font-medium mb-6"
        >
          04 — PERFORMANCE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-off-white leading-[0.9]"
        >
          NUMBERS<br />DON'T LIE.
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 md:gap-x-4">
        {performanceStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-display text-7xl md:text-8xl lg:text-9xl text-off-white leading-none">
                {stat.value}
              </span>
              {stat.unit && (
                <span className="font-display text-xl md:text-2xl text-accent leading-none">
                  {stat.unit}
                </span>
              )}
            </div>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-neutral-500 mt-3 md:mt-4 font-medium">
              {stat.label}
            </span>
            <div className="w-8 h-px bg-accent/40 mt-4" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
