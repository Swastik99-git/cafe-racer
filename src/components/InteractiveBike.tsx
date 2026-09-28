import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { motorcycleImages } from "@/data/motorcycle";

export default function InteractiveBike() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;
    setRotation({
      y: deltaX * 12,
      x: -deltaY * 8,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging) {
      setRotation({ x: 0, y: 0 });
    }
  }, [isDragging]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const deltaX = (touch.clientX - dragStart.current.x) / rect.width;
    const deltaY = (touch.clientY - dragStart.current.y) / rect.height;
    setRotation({
      y: dragStart.current.rotY + deltaX * 30,
      x: dragStart.current.rotX - deltaY * 15,
    });
  }, [isDragging]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    dragStart.current = {
      x: touch.clientX,
      y: touch.clientY,
      rotX: rotation.x,
      rotY: rotation.y,
    };
    setIsDragging(true);
  }, [rotation]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#060606] py-24 md:py-32 overflow-hidden grain-overlay">
      <div className="text-center px-6 mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.4em] text-accent font-medium mb-4"
        >
          06 — INTERACTIVE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-off-white leading-[0.9]"
        >
          MEET THE MACHINE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xs tracking-[0.3em] text-neutral-500 mt-4"
        >
          DRAG TO EXPLORE
        </motion.p>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative flex items-center justify-center h-[55vh] md:h-[65vh] perspective-[1200px]"
        style={{ perspective: "1200px" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-accent/5 blur-[80px]" />
        </div>

        <motion.div
          animate={{
            rotateX: rotation.x,
            rotateY: rotation.y,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="relative w-[90%] max-w-4xl h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: "translateZ(40px)" }}
          >
            <img
              src={motorcycleImages.interactiveMain}
              alt="Interactive cafe racer motorcycle"
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
              loading="lazy"
              draggable={false}
            />
          </div>

          <div
            className="absolute top-[15%] left-[10%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-accent/10 blur-[40px]"
            style={{ transform: "translateZ(60px)" }}
          />
          <div
            className="absolute bottom-[20%] right-[15%] w-24 h-24 md:w-36 md:h-36 rounded-full bg-blue-500/5 blur-[30px]"
            style={{ transform: "translateZ(30px)" }}
          />

          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-neutral-600"
            style={{ transform: "translateZ(50px)" }}
          >
            VANTAGE 850
          </div>
        </motion.div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 md:hidden">
          <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] text-neutral-600">TOUCH & DRAG</span>
        </div>
      </div>
    </section>
  );
}
