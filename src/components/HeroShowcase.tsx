"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

const slides = [
  { src: "/images/d5.png", tag: "Pavimentación", title: "Vialidad urbana terminada", loc: "Estado de México" },
  { src: "/images/d2.png", tag: "Modernización Vial", title: "Carretera con alumbrado", loc: "Red federal" },
  { src: "/images/d4.png", tag: "Terracerías y Drenaje", title: "Tramo en montaña", loc: "Morelos" },
  { src: "/images/d1.png", tag: "Fresado y Encarpetado", title: "Maquinaria en operación", loc: "Carretera México–Pachuca" },
  { src: "/images/d7.png", tag: "Excavación", title: "Movimiento de terracerías", loc: "Equipo CAT" },
];

const DURATION = 4200;

export default function HeroShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), DURATION);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <div className="relative w-full">
      {/* Marco flotante con vidrio esmerilado */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/60 bg-dicssa-dark"
        style={{ perspective: 1000 }}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.12 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Degradado de legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20 pointer-events-none" />

          {/* Etiqueta superior */}
          <div className="absolute top-4 left-4">
            <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-widest text-black bg-dicssa-yellow px-2.5 py-1 rounded">
              {slide.tag}
            </span>
          </div>

          {/* Caption inferior */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`caption-${index}`}
              className="absolute bottom-4 left-4 right-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-base sm:text-lg font-sans font-black text-white leading-tight">{slide.title}</h3>
              <div className="flex items-center gap-1.5 mt-1 text-[11px] font-mono text-dicssa-yellow">
                <MapPin className="w-3 h-3" />
                <span className="uppercase tracking-wider">{slide.loc}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Barra de progreso de la diapositiva actual */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <motion.div
            key={`bar-${index}`}
            className="h-full bg-dicssa-yellow"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: DURATION / 1000, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Indicadores / dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ver imagen ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-dicssa-yellow" : "w-1.5 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Tarjeta de stat flotante decorativa */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden sm:block absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-md border border-dicssa-yellow/30 rounded-xl px-5 py-3 shadow-xl"
      >
        <span className="block text-2xl font-display font-black text-dicssa-yellow leading-none">+750 KM</span>
        <span className="block text-[9px] font-mono text-white/70 uppercase tracking-widest mt-1">Construidos</span>
      </motion.div>
    </div>
  );
}
