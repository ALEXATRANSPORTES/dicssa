"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

/**
 * Testimonios institucionales.
 * [CONTENIDO DE EJEMPLO — REEMPLAZAR con testimonios reales autorizados por el cliente].
 */
const testimonials = [
  {
    quote: "DICSSA entregó el tramo carretero en tiempo y forma, con un control de calidad del concreto asfáltico impecable. Su parque de maquinaria propia marcó la diferencia en los plazos.",
    name: "Coordinación de Obra",
    role: "Dependencia estatal de infraestructura",
  },
  {
    quote: "La supervisión técnica y la transparencia en bitácora fueron sobresalientes. Cumplieron con la normativa SCT en cada etapa del proyecto vial.",
    name: "Residencia de Obra",
    role: "Centro SCT",
  },
  {
    quote: "Equipo profesional y altamente capacitado. La pavimentación y el señalamiento superaron las especificaciones contratadas.",
    name: "Dirección de Proyectos",
    role: "Gobierno municipal",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 z-10 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">{"// LO QUE DICEN DE NOSOTROS"}</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-widest mt-2">TESTIMONIOS</h2>
          <div className="w-16 h-1 bg-dicssa-yellow mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="relative bg-dicssa-dark border border-white/5 rounded-2xl p-7 hover:border-dicssa-yellow/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Quote className="w-8 h-8 text-dicssa-yellow/30 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-dicssa-yellow text-dicssa-yellow" />
                ))}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t border-white/5 pt-4">
                <p className="text-xs font-sans font-black text-white uppercase tracking-wider">{t.name}</p>
                <p className="text-[11px] font-mono text-gray-500 mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[10px] font-mono text-gray-600 mt-8">
          [Contenido de ejemplo — reemplazar con testimonios reales autorizados]
        </p>
      </div>
    </section>
  );
}
