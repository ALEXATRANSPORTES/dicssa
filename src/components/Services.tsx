"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Milestone,
  Shuffle,
  Wrench,
  Droplet,
  Layers,
  Flame,
  Grid,
  TrendingDown,
  Navigation,
  GitBranch,
  Building,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: any;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Carreteras y Autopistas",
    description: "Construcción y modernización de ejes carreteros de alta velocidad y autopistas federales bajo estándares SCT.",
    icon: Milestone,
  },
  {
    id: 2,
    title: "Caminos Rurales",
    description: "Apertura y pavimentación de caminos alimentadores que comunican comunidades rurales de difícil acceso.",
    icon: Compass,
  },
  {
    id: 3,
    title: "Viaductos y Puentes",
    description: "Diseño y edificación de pasos superiores vehiculares (PSV), puentes, deprimidos y estructuras complejas.",
    icon: Shuffle,
  },
  {
    id: 4,
    title: "Mantenimiento Carretero",
    description: "Conservación mayor y menor de la red nacional, bacheo profundo, sellado y mapeo de fallas de rodadura.",
    icon: Wrench,
  },
  {
    id: 5,
    title: "Drenaje y Agua Potable",
    description: "Instalación de tuberías pluviales, colectores de agua potable y obras hidráulicas críticas para vialidades.",
    icon: Droplet,
  },
  {
    id: 6,
    title: "Control de Obras",
    description: "Supervisión técnica, verificación de calidad de materiales, topografía y control de proyectos viales.",
    icon: Layers,
  },
  {
    id: 7,
    title: "Fresado y Encarpetado",
    description: "Remoción de carpeta asfáltica dañada y aplicación inmediata de carpeta asfáltica de alto espesor.",
    icon: Flame,
  },
  {
    id: 8,
    title: "Concreto Asfáltico",
    description: "Pavimentación con mezcla asfáltica en caliente elaborada con agregados seleccionados y aditivos de adherencia.",
    icon: Grid,
  },
  {
    id: 9,
    title: "Terracerías",
    description: "Movimientos de tierra a gran escala, desmontes, terraplenes y excavaciones para tendido de pavimentos.",
    icon: TrendingDown,
  },
  {
    id: 10,
    title: "Señalamiento Vial",
    description: "Equipamiento de seguridad: señalamiento horizontal termoplástico y vertical de alta reflectividad.",
    icon: Navigation,
  },
  {
    id: 11,
    title: "Distribuidores Viales",
    description: "Soluciones de ingeniería vial urbana para cruces vehiculares masivos a desnivel y gasas de incorporación.",
    icon: GitBranch,
  },
  {
    id: 12,
    title: "Edificación Corporativa",
    description: "Construcción de edificios, naves industriales e infraestructura física complementaria de concreto y acero.",
    icon: Building,
  },
];

export default function Services() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section
      id="servicios"
      className="relative min-h-screen py-24 bg-dicssa-dark-pure overflow-hidden flex flex-col justify-center select-none border-b border-white/5"
    >
      {/* Decorative road connector lines */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dicssa-yellow/15 to-transparent z-0 hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Header de sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
              {"// EXPERTOS EN OBRA VIAL"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4">
              ¿QUÉ HACEMOS?
            </h2>
            <div className="w-16 h-1 bg-dicssa-yellow"></div>
          </motion.div>

          {/* Botones de navegación del carril */}
          <div className="flex items-center space-x-4 mt-6 md:mt-0">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 border border-white/10 hover:border-dicssa-yellow hover:text-black hover:bg-dicssa-yellow rounded flex items-center justify-center text-white transition-all"
              aria-label="Carril Anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 border border-white/10 hover:border-dicssa-yellow hover:text-black hover:bg-dicssa-yellow rounded flex items-center justify-center text-white transition-all"
              aria-label="Carril Siguiente"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contenedor del Carril Snap Scroll */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-dicssa-dark border border-white/5 hover:border-dicssa-yellow/40 p-8 rounded-lg relative overflow-hidden group flex flex-col justify-between h-[360px] cursor-grab active:cursor-grabbing transition-colors"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                {/* Background highway markings inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.02] to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-transparent group-hover:bg-dicssa-yellow transition-all duration-300" />

                {/* 3D-rotating Icon Holder on hover */}
                <div className="perspective-500">
                  <motion.div
                    className="w-14 h-14 bg-dicssa-dark-gray border border-white/10 rounded flex items-center justify-center text-dicssa-yellow mb-6 shadow-md transition-all duration-500"
                    style={{ transformStyle: "preserve-3d" }}
                    whileHover={{
                      rotateY: 180,
                      rotateX: 15,
                      borderColor: "#F5C518",
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ transform: "translateZ(15px)" }} />
                  </motion.div>
                </div>

                {/* Content */}
                <div>
                  <span className="text-[10px] font-mono text-dicssa-yellow font-bold uppercase tracking-wider block mb-2">
                    CARRIL {String(service.id).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-sans font-bold text-white uppercase tracking-wider mb-3 leading-snug group-hover:text-dicssa-yellow transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
