"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ClientLogo {
  id: number;
  abbreviation: string;
  name: string;
  bgColor: string; // Tailwind class
  textColor: string; // Tailwind class
  borderColor: string; // Tailwind class
}

const clients: ClientLogo[] = [
  {
    id: 1,
    abbreviation: "SCT",
    name: "Secretaría de Comunicaciones y Transportes",
    bgColor: "bg-dicssa-yellow",
    textColor: "text-black",
    borderColor: "border-black/10",
  },
  {
    id: 2,
    abbreviation: "CFE",
    name: "Comisión Federal de Electricidad",
    bgColor: "bg-dicssa-dark-gray",
    textColor: "text-white",
    borderColor: "border-white/10",
  },
  {
    id: 3,
    abbreviation: "INIFED",
    name: "Inst. Nacional de Infraestructura Física Educativa",
    bgColor: "bg-black",
    textColor: "text-dicssa-yellow",
    borderColor: "border-dicssa-yellow/30",
  },
  {
    id: 4,
    abbreviation: "IMIFE",
    name: "Inst. Mexiquense de Infraestructura Física Educativa",
    bgColor: "bg-dicssa-yellow",
    textColor: "text-black",
    borderColor: "border-black/10",
  },
  {
    id: 5,
    abbreviation: "CAEM",
    name: "Comisión del Agua del Estado de México",
    bgColor: "bg-dicssa-dark-gray",
    textColor: "text-white",
    borderColor: "border-white/10",
  },
  {
    id: 6,
    abbreviation: "JLC",
    name: "Junta Local de Caminos del Estado de México",
    bgColor: "bg-black",
    textColor: "text-dicssa-yellow",
    borderColor: "border-dicssa-yellow/30",
  },
  {
    id: 7,
    abbreviation: "CDMX",
    name: "Gobierno de la Ciudad de México",
    bgColor: "bg-dicssa-yellow",
    textColor: "text-black",
    borderColor: "border-black/10",
  },
  {
    id: 8,
    abbreviation: "PEMEX",
    name: "Petróleos Mexicanos",
    bgColor: "bg-dicssa-dark-gray",
    textColor: "text-white",
    borderColor: "border-white/10",
  },
  {
    id: 9,
    abbreviation: "CAPUFE",
    name: "Caminos y Puentes Federales",
    bgColor: "bg-black",
    textColor: "text-dicssa-yellow",
    borderColor: "border-dicssa-yellow/30",
  },
];

export default function Clients() {
  // Duplicar el array para crear el loop infinito sin saltos
  const marqueeItems = [...clients, ...clients, ...clients];

  return (
    <section
      id="clientes"
      className="relative py-24 bg-dicssa-dark-pure overflow-hidden select-none border-b border-white/5"
    >
      {/* Imagen 3 de Fondo - Textura Sutil */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06] overflow-hidden">
        <Image
          src="/images/imagen3.png"
          alt="Textura de Infraestructura"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            {"// CONFIANZA INSTITUCIONAL"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4">
            ALGUNOS DE NUESTROS CLIENTES
          </h2>
          <div className="w-16 h-1 bg-dicssa-yellow mx-auto"></div>
        </motion.div>

        {/* Carrusel Infinito Horizontal */}
        <div className="relative w-full overflow-hidden py-4 flex items-center">
          {/* Fade overlays en los bordes laterales del carrusel */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Animación del Marquee */}
          <div className="animate-marquee gap-8">
            {marqueeItems.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 shrink-0 px-6 py-4"
              >
                {/* Sello Circular Metálico */}
                <div
                  className={`w-20 h-20 rounded-full border-2 ${client.borderColor} ${client.bgColor} flex flex-col items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer relative group overflow-hidden`}
                >
                  {/* Glossy hover element */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <span className={`text-md font-display font-black tracking-widest ${client.textColor}`}>
                    {client.abbreviation}
                  </span>
                  
                  {/* Sello circular interno ornamental */}
                  <div className={`absolute inset-1.5 border border-dashed rounded-full ${
                    client.textColor === "text-black" ? "border-black/20" : "border-white/10"
                  } pointer-events-none`} />
                </div>

                {/* Nombre de la Dependencia */}
                <div className="flex flex-col max-w-[150px]">
                  <span className="text-[10px] font-sans font-black text-white uppercase tracking-wider leading-tight">
                    {client.abbreviation}
                  </span>
                  <span className="text-[8px] text-gray-500 font-mono tracking-wide leading-tight mt-1">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
