"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hoveredType, setHoveredType] = useState<string | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setHoveredType("interactive");
      } else if (target.closest("[data-cursor-view]")) {
        setHoveredType("view");
      } else {
        setHoveredType(null);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="custom-cursor fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-dicssa-yellow flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hoveredType === "interactive" ? 2 : hoveredType === "view" ? 2.5 : 1,
          backgroundColor:
            hoveredType === "interactive"
              ? "rgba(245, 197, 24, 0.15)"
              : hoveredType === "view"
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(0, 0, 0, 0)",
          borderColor: hoveredType === "view" ? "#ffffff" : "#F5C518",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      >
        {hoveredType === "view" && (
          <span className="text-[9px] font-sans font-extrabold uppercase text-white tracking-widest">
            Ver
          </span>
        )}
      </motion.div>

      {/* Inner dot / machinery crosshair */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-dicssa-yellow rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hoveredType === "interactive" ? 0.5 : hoveredType === "view" ? 0 : 1,
          backgroundColor: hoveredType === "view" ? "#ffffff" : "#F5C518",
        }}
      />

      {/* Subtle diagonal lane dashes in custom cursor (construction indicator) */}
      {hoveredType === "interactive" && (
        <motion.div
          className="fixed top-0 left-0 w-12 h-12 border-2 border-dashed border-dicssa-yellow rounded-full opacity-30 animate-spin"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
            animationDuration: "8s",
          }}
        />
      )}
    </div>
  );
}
