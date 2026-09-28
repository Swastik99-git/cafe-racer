import { motion } from "framer-motion";
import { specifications } from "@/data/motorcycle";

export default function Specifications() {
  return (
    <section
      id="specs"
      className="relative bg-[#0a0a0a] py-24 md:py-40 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.4em] text-accent font-medium mb-6"
        >
          07 — SPECIFICATIONS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-off-white leading-[0.9] mb-16 md:mb-24"
        >
          THE DETAILS.
        </motion.h2>

        <div className="flex flex-col">
          {specifications.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group"
            >
              <div className="grid grid-cols-2 gap-4 py-5 md:py-7 border-t border-white/8 items-baseline transition-colors duration-300 hover:border-accent/30">
                <span className="text-xs md:text-sm tracking-[0.25em] text-neutral-500 font-medium uppercase group-hover:text-neutral-400 transition-colors">
                  {spec.label}
                </span>
                <span className="font-display text-2xl md:text-4xl text-off-white text-right group-hover:text-accent transition-colors duration-300">
                  {spec.value}
                </span>
              </div>
              {i === specifications.length - 1 && (
                <div className="border-t border-white/8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
