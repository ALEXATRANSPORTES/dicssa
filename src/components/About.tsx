"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Gauge, ShieldCheck, TrendingUp, Cpu } from "lucide-react";

// Componente para los contadores con incremento al scroll
function AnimatedCounter({ target, duration = 2, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const totalMiliseconds = duration * 1000;
    const intervalTime = 30; // 30ms interval
    const totalSteps = totalMiliseconds / intervalTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-6xl font-black text-dicssa-yellow">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax profundo para la imagen de fondo (imagen1.png)
  const yBg = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

  return (
    <section
      id="quienes-somos"
      ref={containerRef}
      className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden bg-black select-none border-b border-white/5"
    >
      {/* Imagen 1 - Parallax profundo de fondo */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: yBg, scale: scaleBg }}
        >
          <Image
            src="/images/imagen1.png"
            alt="DICSSA Construcción Vial Maquinaria"
            fill
            className="object-cover opacity-[0.22] filter grayscale brightness-50"
            sizes="100vw"
            priority
          />
        </motion.div>
        {/* Capa de degrade negro para fusionar con las otras secciones */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        {/* Coordenadas GPS parpadeantes para estética de ingeniería */}
        <div className="absolute top-10 right-10 text-[9px] font-mono text-dicssa-yellow/30 select-none tracking-widest hidden md:block">
          GPS CDMX: 19.3621 N, 99.2625 W // ELEV 2,280M
        </div>
      </div>

      {/* Contenido en Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Lado Izquierdo: Textos */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
              {"// SOLIDEZ Y TRAYECTORIA"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4">
              ¿QUIÉNES SOMOS?
            </h2>
            <div className="w-16 h-1 bg-dicssa-yellow mb-6"></div>
          </motion.div>

          {/* Texto que se revela (efecto máscara / clip-path) */}
          <motion.div
            className="space-y-4 text-dicssa-gray-light font-sans text-sm md:text-md leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              <strong className="text-white">DICSSA INFRAESTRUCTURA</strong> es una empresa constructora mexicana sólida, respaldada por más de <strong className="text-dicssa-yellow">15 años de experiencia</strong> en el sector de la infraestructura vial. Ofrecemos seguridad, certeza y calidad en cada proyecto, adaptándonos con flexibilidad a las demandas técnicas y logísticas de nuestros clientes.
            </p>
            <p>
              Nos distinguimos por poseer un <strong className="text-white">moderno y robusto parque de maquinaria propia</strong> pesada y personal altamente capacitado. Esta integración de recursos nos permite garantizar la ejecución de proyectos gubernamentales y privados en plazos exigentes, asegurando una rodadura y durabilidad excepcionales.
            </p>
          </motion.div>

          {/* Puntos destacados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-start space-x-3 bg-dicssa-dark-gray/45 border border-white/5 p-4 rounded">
              <ShieldCheck className="w-5 h-5 text-dicssa-yellow flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-sans font-bold text-white uppercase tracking-wider">Seguridad y Certeza</h4>
                <p className="text-[11px] text-gray-400 mt-1">Cumplimiento irrestricto de las especificaciones y normativas SCT.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-dicssa-dark-gray/45 border border-white/5 p-4 rounded">
              <Cpu className="w-5 h-5 text-dicssa-yellow flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-sans font-bold text-white uppercase tracking-wider">Alta Tecnología</h4>
                <p className="text-[11px] text-gray-400 mt-1">Fresadoras y pavimentadoras de última generación CAT.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Contadores y Estadísticas */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-6 relative">
          {/* Decorative Road Marks background */}
          <div className="absolute inset-0 border border-dashed border-white/5 pointer-events-none -m-4 rounded-xl" />

          {/* Experiencia */}
          <motion.div
            className="flex flex-col items-center justify-center p-6 bg-dicssa-dark-gray/60 border border-white/5 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatedCounter target={15} suffix="+" />
            <span className="text-[10px] font-sans font-extrabold uppercase text-gray-400 tracking-widest mt-2">
              Años de Experiencia
            </span>
          </motion.div>

          {/* Kilómetros */}
          <motion.div
            className="flex flex-col items-center justify-center p-6 bg-dicssa-dark-gray/60 border border-white/5 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedCounter target={750} suffix="+" />
            <span className="text-[10px] font-sans font-extrabold uppercase text-gray-400 tracking-widest mt-2">
              KM Construidos
            </span>
          </motion.div>

          {/* Proyectos */}
          <motion.div
            className="flex flex-col items-center justify-center p-6 bg-dicssa-dark-gray/60 border border-white/5 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AnimatedCounter target={120} suffix="+" />
            <span className="text-[10px] font-sans font-extrabold uppercase text-gray-400 tracking-widest mt-2">
              Obras Completadas
            </span>
          </motion.div>

          {/* Maquinaria */}
          <motion.div
            className="flex flex-col items-center justify-center p-6 bg-dicssa-dark-gray/60 border border-white/5 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatedCounter target={50} suffix="+" />
            <span className="text-[10px] font-sans font-extrabold uppercase text-gray-400 tracking-widest mt-2">
              Unidades de Maquinaria
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
