"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Barra de progreso de lectura, estilo línea de carretera amarilla. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-dicssa-yellow via-dicssa-yellow-bright to-dicssa-yellow origin-left z-[200] shadow-[0_0_10px_rgba(245,197,24,0.6)]"
    />
  );
}
