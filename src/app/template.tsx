"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Transición de entrada entre páginas (App Router re-monta template.tsx en
 * cada navegación). Fade + leve desplazamiento, sensación de "cambio de carril".
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
