"use client";
// metadata se define en el server parent — este es un Client Component por useState

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Milestone,
  Compass,
  Navigation,
  Shuffle,
  GitBranch,
  Building,
  Droplet,
  TrendingDown,
  Layers,
  Wrench,
  Flame,
  Grid,
} from "lucide-react";

interface ServiceCard {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: any;
  specs: string[];
}

const servicesData: ServiceCard[] = [
  // Categoria: carreteras
  {
    id: 1,
    title: "Construcción y Modernización de Carreteras",
    category: "carreteras",
    description: "Construcción integral y ampliación de carreteras estatales y federales con estricto control de calidad y alineación.",
    icon: Milestone,
    specs: ["Subbase y base hidráulica", "Carpeta asfáltica", "Obras de arte", "Cortes y terraplenes"],
  },
  {
    id: 2,
    title: "Caminos Rurales",
    category: "carreteras",
    description: "Apertura y pavimentación de caminos rurales para mejorar la conectividad de comunidades aisladas.",
    icon: Compass,
    specs: ["Terracerías iniciales", "Estabilización de suelos", "Revestimientos", "Obras de drenaje menor"],
  },
  {
    id: 3,
    title: "Fresado y Encarpetado",
    category: "carreteras",
    description: "Remoción de carpeta asfáltica deteriorada y tendido inmediato de mezcla asfáltica caliente de alta resistencia.",
    icon: Flame,
    specs: ["Fresado en frío de 5cm a 10cm", "Reciclado de pavimentos", "Riego de liga asfáltica", "Carpeta de rodadura fina"],
  },
  {
    id: 4,
    title: "Pavimentación de Concreto Asfáltico",
    category: "carreteras",
    description: "Aplicación y compactación de asfalto caliente elaborado con agregados certificados bajo normas SCT.",
    icon: Grid,
    specs: ["Pavimentadora Caterpillar con sensor", "Compactación neumática", "Control de temperatura", "Laboratorio Marshall"],
  },
  {
    id: 5,
    title: "Señalamiento Vertical y Horizontal",
    category: "carreteras",
    description: "Equipamiento de seguridad vial, pintura termoplástica de alta visibilidad y señalamientos reflectantes.",
    icon: Navigation,
    specs: ["Pintura termoplástica reflectante", "Botones y vialetas", "Señalamiento tipo bandera", "Letreros restrictivos y preventivos"],
  },
  
  // Categoria: estructuras
  {
    id: 6,
    title: "Viaductos, Puentes y Deprimidos",
    category: "estructuras",
    description: "Construcción de pasos superiores vehiculares (PSV), pasos peatonales elevados y cruces deprimidos.",
    icon: Shuffle,
    specs: ["Trabes NU y AASHTO tipo VI", "Cimentaciones profundas", "Zapatas y apoyos de neopreno", "Losas de concreto reforzado"],
  },
  {
    id: 7,
    title: "Distribuidores Viales y Pasos a Desnivel",
    category: "estructuras",
    description: "Soluciones complejas de ingeniería vial para intersecciones masivas y gasas de aceleración y desaceleración.",
    icon: GitBranch,
    specs: ["Muros mecánicamente estabilizados", "Estructuras de desvío vial", "Gasas tipo trébol", "Rectificación de canales pluviales"],
  },

  // Categoria: hidraulica
  {
    id: 8,
    title: "Obras de Drenaje y Agua Potable",
    category: "hidraulica",
    description: "Instalación de tuberías pluviales subterráneas, colectores sanitarios y cruces pluviales viales.",
    icon: Droplet,
    specs: ["Colectores de concreto reforzado", "Redes de agua potable", "Cajas de válvula y registros", "Drenes y lavaderos de carretera"],
  },
  {
    id: 9,
    title: "Terracerías y Movimientos de Tierra",
    category: "hidraulica",
    description: "Desmonte, excavación de cajones, cortes de cerros y compactación masiva de terraplenes para tendidos de pavimentos.",
    icon: TrendingDown,
    specs: ["Despalme y desmonte", "Excavación en roca o suelo común", "Tendido de terraplén", "Mediciones con estaciones totales"],
  },

  // Categoria: consultoria
  {
    id: 10,
    title: "Seguimiento y Control de Proyectos",
    category: "consultoria",
    description: "Supervisión técnica, verificación de calidad de materiales, auditorías de obra vial y control topográfico.",
    icon: Layers,
    specs: ["Pruebas de laboratorio asfáltico", "Control volumétrico", "Topografía por GPS", "Bitácora técnica de obra"],
  },
  {
    id: 11,
    title: "Mantenimiento Mayor y Menor a la Red",
    category: "consultoria",
    description: "Bacheo profundo, sellado de grietas, deshierbe de acotamientos y conservación rutinaria de caminos.",
    icon: Wrench,
    specs: ["Bacheo superficial y profundo", "Sellado de grietas con emulsión", "Limpieza de cunetas", "Atención a derrumbes e incidencias"],
  },
  {
    id: 12,
    title: "Edificación y Naves",
    category: "consultoria",
    description: "Construcción de casetas de cobro, naves de almacenamiento, edificios administrativos y cimentaciones pesadas.",
    icon: Building,
    specs: ["Casetas de cobro de peaje", "Cimentaciones de silos y naves", "Estructuras metálicas", "Instalaciones electromecánicas"],
  },
];

const tabCategories = [
  { id: "carreteras", label: "Carreteras y Vías" },
  { id: "estructuras", label: "Puentes e Intersecciones" },
  { id: "hidraulica", label: "Hidráulica y Terracerías" },
  { id: "consultoria", label: "Mantenimiento y Edificación" },
];

export default function Servicios() {
  const [activeTab, setActiveTab] = useState("carreteras");

  const filteredServices = servicesData.filter((s) => s.category === activeTab);

  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden">
      <Header />

      {/* Hero */}
      <div className="relative pt-32 pb-12 bg-gradient-to-b from-dicssa-dark-gray/30 to-black text-center select-none border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.span
            className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {"// PORTAFOLIO DE CAPACIDADES"}
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            NUESTROS SERVICIOS
          </motion.h1>
          <div className="w-16 h-1 bg-dicssa-yellow mx-auto mb-6"></div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed font-sans">
            Contamos con especialización técnica e infraestructura propia para ejecutar 12 tipos principales de obras civiles en México.
          </p>
        </div>
      </div>

      {/* Menú Multi-Pestaña */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Navegación de Pestañas */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16 border-b border-white/10 pb-6">
            {tabCategories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded text-[11px] font-sans font-black uppercase tracking-widest border transition-all ${
                  activeTab === tab.id
                    ? "bg-dicssa-yellow border-dicssa-yellow text-black shadow-lg"
                    : "bg-dicssa-dark border-white/5 text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid de servicios filtrados */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    layout
                    key={service.id}
                    className="p-8 bg-dicssa-dark border border-white/5 hover:border-dicssa-yellow/30 rounded-lg flex flex-col justify-between min-h-[280px] relative overflow-hidden group transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Background indicator */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.015] to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-dicssa-yellow transition-all duration-350" />

                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 bg-dicssa-dark-gray border border-white/10 rounded flex items-center justify-center text-dicssa-yellow mb-5 group-hover:border-dicssa-yellow/45 group-hover:bg-dicssa-yellow group-hover:text-black transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Content */}
                      <h3 className="text-md font-sans font-black text-white uppercase tracking-wider mb-3 leading-snug group-hover:text-dicssa-yellow transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed font-sans mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Especificaciones técnicas */}
                    <div className="border-t border-white/5 pt-4">
                      <span className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest block mb-2">
                        Especificaciones:
                      </span>
                      <ul className="grid grid-cols-2 gap-2 text-[10px] font-sans text-gray-300">
                        {service.specs.map((spec, specIdx) => (
                          <li key={specIdx} className="flex items-center space-x-1.5">
                            <span className="w-1 h-1 bg-dicssa-yellow rounded-full" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
