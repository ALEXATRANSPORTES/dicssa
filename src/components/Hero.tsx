"use client";

import { motion } from "framer-motion";
import { HardHat, ChevronRight } from "lucide-react";

const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "21+", label: "Proyectos nacionales" },
  { value: "11", label: "Estados cubiertos" },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden select-none">
      {/* El fondo es la carretera animada global (RoadBackground). Sólo añadimos
          un velo de legibilidad y degradado inferior. */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center space-x-2 bg-dicssa-yellow/10 border border-dicssa-yellow/30 px-4 py-1.5 rounded-full backdrop-blur-sm"
          >
            <HardHat className="w-3.5 h-3.5 text-dicssa-yellow" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
              15+ Años · Infraestructura Vial Nacional
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-widest text-white leading-[0.92] uppercase mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
          >
            CONSTRUIMOS<br />
            EL <span className="text-dicssa-yellow">CAMINO</span><br />
            DE MÉXICO
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-base md:text-lg text-gray-300 font-sans max-w-xl leading-relaxed mb-10"
          >
            Carreteras, puentes y viaductos de gran escala. Más de 15 años entregando
            <span className="text-white font-semibold"> seguridad, certeza y calidad</span> en cada kilómetro.
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="/proyectos"
              className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black font-sans font-black text-xs uppercase tracking-widest rounded transition-all hover:scale-[1.02] shadow-lg shadow-dicssa-yellow/20"
            >
              <span>Ver Obras Realizadas</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-sans font-black text-xs uppercase tracking-widest rounded transition-all backdrop-blur-sm"
            >
              Contacto Inmediato
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="flex items-center gap-8 sm:gap-12"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-display font-black text-dicssa-yellow leading-none">{s.value}</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-1">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Desliza</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-1.5 bg-dicssa-yellow rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
