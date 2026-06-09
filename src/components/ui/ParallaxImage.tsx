"use client";

import { useRef, ReactNode } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Imagen con parallax profundo al hacer scroll: la imagen se desplaza más
 * lento que el contenedor, dando sensación de profundidad cinematográfica.
 */
export default function ParallaxImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  strength = 18,
  children,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  strength?: number;
  children?: ReactNode;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 h-[140%] -top-[20%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover ${imgClassName}`}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
      {children}
    </div>
  );
}
