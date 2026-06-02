"use client";

import { motion } from "framer-motion";
import { Cpu, Shield, Zap, Earth, HeartHandshake, TreePine } from "lucide-react";

export default function TechSocial() {
  return (
    <section className="relative py-24 bg-black select-none border-b border-white/5 overflow-hidden">
      {/* Background SVG Grid and coordinate lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* Lado Izquierdo: Nuestra Tecnología */}
        <div id="tecnologia" className="space-y-8 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
              {"// MAQUINARIA DE ÚLTIMA GENERACIÓN"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4">
              NUESTRA TECNOLOGÍA
            </h2>
            <div className="w-16 h-1 bg-dicssa-yellow"></div>
          </motion.div>

          <motion.p
            className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Contamos con un parque de maquinaria moderna que nos permite ejecutar proyectos viales con precisión milimétrica. Nos enfocamos en automatización de pavimentación y control de asfalto caliente para garantizar caminos duraderos.
          </motion.p>

          {/* Cards de Tecnología */}
          <div className="space-y-4">
            <motion.div
              className="flex items-start space-x-4 p-5 bg-dicssa-dark-gray/50 border border-white/5 rounded-lg hover:border-dicssa-yellow/30 transition-all group"
              whileHover={{ x: 8 }}
            >
              <div className="w-10 h-10 bg-dicssa-yellow/10 border border-dicssa-yellow/20 rounded flex items-center justify-center text-dicssa-yellow group-hover:bg-dicssa-yellow group-hover:text-black transition-all">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-sans font-black text-white uppercase tracking-wider">
                  Pavimentación Guiada por GPS
                </h3>
                <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Sistemas topográficos integrados a nivel de motoniveladora y terminadora de asfalto para un bombeo y peraltado exactos.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4 p-5 bg-dicssa-dark-gray/50 border border-white/5 rounded-lg hover:border-dicssa-yellow/30 transition-all group"
              whileHover={{ x: 8 }}
            >
              <div className="w-10 h-10 bg-dicssa-yellow/10 border border-dicssa-yellow/20 rounded flex items-center justify-center text-dicssa-yellow group-hover:bg-dicssa-yellow group-hover:text-black transition-all">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-sans font-black text-white uppercase tracking-wider">
                  Fresadoras de Asfalto Inteligentes
                </h3>
                <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Remoción inteligente de carpeta deteriorada mediante rodillos trituradores ajustables de alta velocidad.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4 p-5 bg-dicssa-dark-gray/50 border border-white/5 rounded-lg hover:border-dicssa-yellow/30 transition-all group"
              whileHover={{ x: 8 }}
            >
              <div className="w-10 h-10 bg-dicssa-yellow/10 border border-dicssa-yellow/20 rounded flex items-center justify-center text-dicssa-yellow group-hover:bg-dicssa-yellow group-hover:text-black transition-all">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-sans font-black text-white uppercase tracking-wider">
                  Control Químico en Laboratorio
                </h3>
                <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Ensayos de viscosidad, penetración y estabilidad Marshall para cada mezcla asfáltica producida.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Lado Derecho: Responsabilidad Social */}
        <div id="responsabilidad" className="space-y-8 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
              {"// SOSTENIBILIDAD Y COMUNIDAD"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4">
              RESPONSABILIDAD SOCIAL
            </h2>
            <div className="w-16 h-1 bg-dicssa-yellow"></div>
          </motion.div>

          <motion.p
            className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Buscamos mitigar el impacto ambiental de las obras viales mediante el reciclado de asfalto y el cuidado de los ecosistemas fluviales en drenajes sanitarios y agua potable.
          </motion.p>

          {/* Cards de Responsabilidad Social */}
          <div className="space-y-4">
            <motion.div
              className="flex items-start space-x-4 p-5 bg-dicssa-dark-gray/50 border border-white/5 rounded-lg hover:border-dicssa-yellow/30 transition-all group"
              whileHover={{ x: 8 }}
            >
              <div className="w-10 h-10 bg-dicssa-yellow/10 border border-dicssa-yellow/20 rounded flex items-center justify-center text-dicssa-yellow group-hover:bg-dicssa-yellow group-hover:text-black transition-all">
                <TreePine className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-sans font-black text-white uppercase tracking-wider">
                  Reciclado de Asfalto (RAP)
                </h3>
                <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Reutilización del pavimento fresado para nuevas capas de subbase, reduciendo la explotación de canteras pétreas.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4 p-5 bg-dicssa-dark-gray/50 border border-white/5 rounded-lg hover:border-dicssa-yellow/30 transition-all group"
              whileHover={{ x: 8 }}
            >
              <div className="w-10 h-10 bg-dicssa-yellow/10 border border-dicssa-yellow/20 rounded flex items-center justify-center text-dicssa-yellow group-hover:bg-dicssa-yellow group-hover:text-black transition-all">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-sans font-black text-white uppercase tracking-wider">
                  Empleo Local y Capacitación
                </h3>
                <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Contratación y formación de mano de obra local en cada estado del país, impulsando el bienestar regional.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4 p-5 bg-dicssa-dark-gray/50 border border-white/5 rounded-lg hover:border-dicssa-yellow/30 transition-all group"
              whileHover={{ x: 8 }}
            >
              <div className="w-10 h-10 bg-dicssa-yellow/10 border border-dicssa-yellow/20 rounded flex items-center justify-center text-dicssa-yellow group-hover:bg-dicssa-yellow group-hover:text-black transition-all">
                <Earth className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-sans font-black text-white uppercase tracking-wider">
                  Mitigación Hidrológica
                </h3>
                <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Diseño de alcantarillas y ductos de agua que respetan los cauces naturales y evitan inundaciones en poblados rurales.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
