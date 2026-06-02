"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HardHat, ChevronRight } from "lucide-react";
import Image from "next/image";

const heroImages = [
  "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1400", // Autopista
  "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1400", // Maquinaria pesada
  "https://images.unsplash.com/photo-1513826308569-42b781467475?q=80&w=1400", // Puente / Viaducto
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const titleText = "DICSSA INFRAESTRUCTURA";
  const subtitleText = "Construyendo los caminos y viaductos que conectan a México. Seguridad, certeza y calidad en cada kilómetro.";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30, skewX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      skewX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative w-full h-screen min-h-[620px] flex items-center justify-center overflow-hidden bg-black select-none">
      
      {/* Slider de Fotos de Respaldo Premium */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.5, scale: 1.0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={heroImages[currentSlide]}
              alt="DICSSA Construcción e Infraestructura"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Video de Fondo Overlay (Autoplay, Loop, Muted) */}
      <div className="absolute inset-0 w-full h-full z-10 opacity-30">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-highway-traffic-in-a-modern-city-at-night-42283-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Filtro overlay para mantener legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/75 z-20" />

      {/* SVG de Carril de Carretera que se Dibuja en Diagonal */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M -100,200 L 400,800 L 1500,1200"
          stroke="#F5C518"
          strokeWidth="3.5"
          fill="none"
          opacity="0.35"
          initial={{ pathLength: 0, strokeDasharray: "15, 20" }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, ease: "easeInOut" }}
          className="road-flow-line"
        />
        <motion.path
          d="M 500,-100 L 800,900 L 1200,1300"
          stroke="#F5C518"
          strokeWidth="2"
          fill="none"
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4.5, ease: "easeInOut" }}
          className="road-draw-line"
        />
      </svg>

      {/* Contenido Principal */}
      <div className="relative z-40 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Escudo / Logo Animado */}
        <motion.div
          className="mb-8 relative flex items-center justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute -inset-4 border border-dashed border-dicssa-yellow/40 rounded-full animate-spin" style={{ animationDuration: "35s" }} />
          
          <svg
            className="w-24 h-24 text-dicssa-yellow"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M 15 75 L 35 15 L 50 15 L 30 75 Z"
              fill="#F5C518"
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            />
            <motion.path
              d="M 53 15 L 68 15 L 85 75 L 70 75 Z"
              fill="#FFD700"
              initial={{ opacity: 0, x: 30, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            />
            <motion.path
              d="M 47 25 L 53 25 L 43 65 L 37 65 Z"
              fill="#000000"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </svg>
        </motion.div>

        {/* Insignia */}
        <motion.div
          className="mb-5 flex items-center space-x-2 bg-dicssa-yellow/15 border border-dicssa-yellow/30 px-3.5 py-1.5 rounded-full animate-pulse"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <HardHat className="w-4 h-4 text-dicssa-yellow" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            15+ Años de Certeza en Infraestructura
          </span>
        </motion.div>

        {/* Título */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-8xl font-display font-black tracking-widest text-white leading-tight uppercase mb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleText.split(" ").map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block mr-4 last:mr-0 white-space-nowrap">
              {word.split("").map((letter, letterIdx) => (
                <motion.span
                  key={letterIdx}
                  className={`inline-block ${wordIdx === 1 ? "text-dicssa-yellow" : "text-white"}`}
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-sm md:text-md lg:text-lg text-gray-300 font-sans font-medium max-w-2xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          {subtitleText}
        </motion.p>

        {/* Botones */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <a
            href="/proyectos"
            className="w-full sm:w-auto px-8 py-3.5 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black font-sans font-black text-xs uppercase tracking-widest rounded transition-all transform hover:scale-[1.02] shadow-lg shadow-dicssa-yellow/10 flex items-center justify-center"
          >
            <span>Ver Obras Realizadas</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
          <a
            href="/contacto"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/10 text-white font-sans font-black text-xs uppercase tracking-widest rounded border border-white/20 transition-all flex items-center justify-center"
          >
            Contacto Inmediato
          </a>
        </motion.div>
      </div>
    </section>
  );
}
