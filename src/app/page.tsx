"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, Landmark, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden">
      {/* Cabecera */}
      <Header />

      {/* Hero: Slider Híbrido + Líneas animadas */}
      <Hero />

      {/* Resumen Quiénes Somos */}
      <section className="py-24 px-6 relative z-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
              {"// CERTEZA Y CALIDAD"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-widest leading-none">
              DICSSA INFRAESTRUCTURA
            </h2>
            <div className="w-16 h-1 bg-dicssa-yellow"></div>
            <p className="text-sm text-gray-300 leading-relaxed font-sans">
              Somos una constructora mexicana sólida con más de 15 años de experiencia liderando proyectos viales de gran escala. Contamos con un parque de maquinaria moderna propia y personal altamente calificado para entregar carreteras, puentes y viaductos que impulsan el desarrollo nacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/quienes-somos"
                className="px-6 py-3 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black font-sans font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center space-x-2 transition-all w-full sm:w-auto"
              >
                <span>Conocer Más</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/quienes-somos#tecnologia"
                className="px-6 py-3 border border-white/10 hover:bg-white/10 text-white font-sans font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center transition-all w-full sm:w-auto"
              >
                Nuestra Maquinaria
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/images/imagen1.png"
              alt="DICSSA Obras"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
            <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-sm border border-white/10 p-3.5 rounded">
              <span className="block text-[18px] font-display font-black text-dicssa-yellow">15+ AÑOS</span>
              <span className="block text-[9px] font-mono text-white/70 uppercase tracking-widest mt-0.5">En el Sector Vial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Teaser */}
      <section className="py-24 px-6 relative z-10 bg-dicssa-dark-pure border-b border-white/5">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            {"// SOLUCIONES INTEGRALES"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-widest mt-2">
            NUESTRAS LÍNEAS DE TRABAJO
          </h2>
          <div className="w-16 h-1 bg-dicssa-yellow mx-auto mt-4"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-dicssa-dark border border-white/5 rounded-lg flex flex-col justify-between h-56 hover:border-dicssa-yellow/30 transition-colors">
            <div className="w-10 h-10 bg-dicssa-yellow/10 rounded flex items-center justify-center text-dicssa-yellow">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-sans font-black text-white uppercase tracking-wider mb-2">Modernización Vial</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed">Construcción y ensanchamiento de carreteras federales y caminos rurales.</p>
            </div>
          </div>

          <div className="p-6 bg-dicssa-dark border border-white/5 rounded-lg flex flex-col justify-between h-56 hover:border-dicssa-yellow/30 transition-colors">
            <div className="w-10 h-10 bg-dicssa-yellow/10 rounded flex items-center justify-center text-dicssa-yellow">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-sans font-black text-white uppercase tracking-wider">Viaductos y Puentes</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed">Diseño y edificación de pasos superiores vehiculares (PSV) y pasos deprimidos.</p>
            </div>
          </div>

          <div className="p-6 bg-dicssa-dark border border-white/5 rounded-lg flex flex-col justify-between h-56 hover:border-dicssa-yellow/30 transition-colors">
            <div className="w-10 h-10 bg-dicssa-yellow/10 rounded flex items-center justify-center text-dicssa-yellow">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-sans font-black text-white uppercase tracking-wider">Fresado y Mezclas</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed">Pavimentación de concreto asfáltico y recuperación profunda de pavimentos.</p>
            </div>
          </div>

          <div className="p-6 bg-dicssa-dark border border-white/5 rounded-lg flex flex-col justify-between h-56 hover:border-dicssa-yellow/30 transition-colors">
            <div className="w-10 h-10 bg-dicssa-yellow/10 rounded flex items-center justify-center text-dicssa-yellow">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-sans font-black text-white uppercase tracking-wider">Obra Hidráulica</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed">Sistemas pluviales de drenaje, agua potable y control de escurrimientos.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/servicios"
            className="inline-flex items-center space-x-2 text-xs font-sans font-black text-dicssa-yellow uppercase tracking-widest hover:text-white transition-colors"
          >
            <span>Ver Todos los Servicios (Multi-Pestaña)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Banner Call to Action Proyectos */}
      <section className="py-20 px-6 relative z-10 text-center bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-widest leading-tight">
            ¿Listo para Iniciar un Proyecto Vial con DICSSA?
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Consulte nuestro mapa interactivo de obras nacionales o contáctese de inmediato con nuestro departamento de licitaciones y contratos viales.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="/proyectos"
              className="px-8 py-3.5 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black font-sans font-black text-xs uppercase tracking-widest rounded transition-all w-full sm:w-auto"
            >
              Ver Portafolio de Obras
            </a>
            <a
              href="/contacto"
              className="px-8 py-3.5 bg-transparent border border-white/20 hover:bg-white/10 text-white font-sans font-black text-xs uppercase tracking-widest rounded transition-all w-full sm:w-auto"
            >
              Contactar un Ingeniero
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
