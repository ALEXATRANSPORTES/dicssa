"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HardHat, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

const heroSlides = [
  { src: "/images/imagen1.png", alt: "DICSSA — Infraestructura carretera" },
  { src: "/images/imagen2.jpeg", alt: "DICSSA — Maquinaria pesada en obra" },
  { src: "/images/imagen3.png", alt: "DICSSA — Puentes y viaductos" },
];

const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "21+", label: "Proyectos nacionales" },
  { value: "11", label: "Estados cubiertos" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[640px] flex items-end justify-center overflow-hidden bg-black select-none">

      {/* Slider de imágenes locales */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <Image
              src={heroSlides[current].src}
              alt={heroSlides[current].alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradiente overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-black/30" />

      {/* Líneas SVG de carril animadas */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="0" y1="100%" x2="60%" y2="0"
          stroke="#F5C518" strokeWidth="1.5" opacity="0.25"
          strokeDasharray="12 18"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <motion.line
          x1="20%" y1="100%" x2="80%" y2="0"
          stroke="#F5C518" strokeWidth="1" opacity="0.12"
          strokeDasharray="8 20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "easeOut", delay: 0.5 }}
        />
      </svg>

      {/* Contenido */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 pb-20 lg:pb-28">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            className="mb-6 inline-flex items-center space-x-2 bg-dicssa-yellow/10 border border-dicssa-yellow/30 px-4 py-1.5 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <HardHat className="w-3.5 h-3.5 text-dicssa-yellow" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
              15+ Años · Infraestructura Vial Nacional
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-widest text-white leading-[0.92] uppercase mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            DICSSA<br />
            <span className="text-dicssa-yellow">INFRAES</span>TRUCTURA
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="text-sm md:text-base text-gray-300 font-sans font-medium max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            Construimos las carreteras, puentes y viaductos que conectan a México. Seguridad, certeza y calidad en cada kilómetro entregado.
          </motion.p>

          {/* Botones */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <a
              href="/proyectos"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black font-sans font-black text-xs uppercase tracking-widest rounded transition-all hover:scale-[1.02] shadow-lg shadow-dicssa-yellow/15"
            >
              <span>Ver Obras Realizadas</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-sans font-black text-xs uppercase tracking-widest rounded transition-all"
            >
              Contacto Inmediato
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex items-center gap-8 sm:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-display font-black text-dicssa-yellow leading-none">{s.value}</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-1">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Indicadores de slide */}
      <div className="absolute bottom-8 right-8 z-30 flex items-center space-x-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-8 h-2 bg-dicssa-yellow" : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
