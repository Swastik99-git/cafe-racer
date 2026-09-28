import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { motorcycleImages } from "@/data/motorcycle";

export default function MachineSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const clipReveal = useTransform(scrollYProgress, [0, 0.5], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);
  const textReveal = useTransform(scrollYProgress, [0.2, 0.5], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

  return (
    <section
      ref={ref}
      id="machine"
      className="relative min-h-screen bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] text-accent font-medium mb-6"
          >
            02 — THE MACHINE
          </motion.p>

          <div className="overflow-hidden">
            <motion.h2
              style={{ clipPath: textReveal }}
              className="font-display text-[16vw] md:text-[8vw] lg:text-[7rem] leading-[0.85] text-off-white"
            >
              RAW
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              style={{ clipPath: textReveal }}
              className="font-display text-[16vw] md:text-[8vw] lg:text-[7rem] leading-[0.85] text-off-white"
            >
              MECHANICS.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-base md:text-lg text-neutral-400 font-light leading-relaxed max-w-md"
          >
            Designed around simplicity, balance and mechanical character.
            Every component exists for a reason.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-px bg-accent mt-10"
          />
        </div>

        <motion.div
          style={{ clipPath: clipReveal }}
          className="relative h-[60vh] lg:h-[80vh] overflow-hidden"
        >
          <motion.img
            src={motorcycleImages.machineDetail}
            alt="Cafe racer motorcycle detail"
            style={{ y: imageY }}
            className="absolute inset-0 w-full h-[120%] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
