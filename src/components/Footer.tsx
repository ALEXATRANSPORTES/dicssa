"use client";

import { ArrowUp, Milestone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dicssa-dark-pure text-white border-t border-white/5 py-16 overflow-hidden select-none">
      {/* Decorative safety lines at the top of the footer */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,#F5C518,#F5C518_10px,#000_10px,#000_20px)]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Columna 1: Info General (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col space-y-5">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-dicssa-yellow text-black font-black rounded flex items-center justify-center font-display text-lg">
              D
            </div>
            <span className="text-md font-display font-black tracking-widest text-white">
              DICSSA
            </span>
          </div>
          <p className="text-xs text-gray-400 font-sans leading-relaxed">
            Dicssa Infraestructura SA de CV es una empresa constructora mexicana sólida con más de 15 años de experiencia en pavimentos, viaductos y drenaje sanitario.
          </p>
          {/* Social Icons */}
          <div className="flex items-center space-x-3 pt-2">
            <a
              href="https://www.facebook.com/Dicssa-Infraestructura-SA-de-CV"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded border border-white/10 hover:border-dicssa-yellow hover:text-dicssa-yellow flex items-center justify-center text-gray-400 transition-all"
              aria-label="Facebook DICSSA"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dicssa_infraestructura"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded border border-white/10 hover:border-dicssa-yellow hover:text-dicssa-yellow flex items-center justify-center text-gray-400 transition-all"
              aria-label="Instagram DICSSA"
            >
              <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/dicssa-infraestructura"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded border border-white/10 hover:border-dicssa-yellow hover:text-dicssa-yellow flex items-center justify-center text-gray-400 transition-all"
              aria-label="LinkedIn DICSSA"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Columna 2: Mapa de Navegación (3 Cols) */}
        <div className="lg:col-span-3 flex flex-col space-y-4">
          <h3 className="text-xs font-sans font-black text-white uppercase tracking-widest">
            Secciones
          </h3>
          <div className="flex flex-col space-y-2 text-xs font-sans text-gray-400">
            <a href="#quienes-somos" className="hover:text-dicssa-yellow transition-colors">Quiénes Somos</a>
            <a href="#servicios" className="hover:text-dicssa-yellow transition-colors">Servicios Principales</a>
            <a href="#tecnologia" className="hover:text-dicssa-yellow transition-colors">Nuestra Tecnología</a>
            <a href="#responsabilidad" className="hover:text-dicssa-yellow transition-colors">Responsabilidad Social</a>
            <a href="#portafolio" className="hover:text-dicssa-yellow transition-colors">Proyectos Realizados</a>
            <a href="#clientes" className="hover:text-dicssa-yellow transition-colors">Nuestros Clientes</a>
            <a href="#contacto" className="hover:text-dicssa-yellow transition-colors">Contacto y Soporte</a>
          </div>
        </div>

        {/* Columna 3: Información Legal (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <h3 className="text-xs font-sans font-black text-white uppercase tracking-widest">
            Contacto Corporativo
          </h3>
          <div className="flex flex-col space-y-3 font-mono text-xs text-gray-400">
            <div className="flex items-start space-x-2">
              <span className="text-dicssa-yellow shrink-0">DIR:</span>
              <span className="leading-relaxed">
                Prolongación Paseo de la Reforma Núm. 627-304, Col. Paseo de las Lomas, Delegación Álvaro Obregón CP 01330, CDMX
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-dicssa-yellow shrink-0">TEL:</span>
              <span>(55) 2589 7307 | (55) 8913 3785</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-dicssa-yellow shrink-0">CORREO:</span>
              <a href="mailto:contacto@grupodicssa.mx" className="hover:text-dicssa-yellow transition-colors">contacto@grupodicssa.mx</a>
            </div>
          </div>
        </div>

      </div>

      {/* Barra Inferior de Derechos */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-gray-500">
        <div className="text-center sm:text-left space-y-1">
          <p>© {new Date().getFullYear()} DICSSA INFRAESTRUCTURA SA DE CV. TODOS LOS DERECHOS RESERVADOS.</p>
          <p className="tracking-wide">OBRA PÚBLICA Y CONSTRUCCIÓN CARRETERA REGISTRADA BAJO NORMATIVA MEXICANA.</p>
        </div>

        <button
          onClick={scrollToTop}
          className="mt-6 sm:mt-0 flex items-center space-x-1.5 text-dicssa-yellow border border-dicssa-yellow/20 px-3 py-1.5 rounded hover:bg-dicssa-yellow hover:text-black transition-all"
        >
          <span>SUBIR</span>
          <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </footer>
  );
}
