"use client";

import dynamic from "next/dynamic";
import { Hammer } from "lucide-react";

// Cargar dinámicamente MapInner evitando problemas de SSR con Leaflet
const MapInner = dynamic(() => import("./MapInner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] bg-dicssa-dark flex flex-col items-center justify-center border border-dashed border-dicssa-yellow/30 rounded-lg relative overflow-hidden">
      {/* Background road texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      {/* Loading Construction Icon */}
      <div className="relative z-10 flex flex-col items-center text-center p-6">
        <div className="relative mb-4">
          <div className="absolute inset-0 rounded-full border border-dashed border-dicssa-yellow/40 animate-spin" style={{ animationDuration: "12s" }}></div>
          <div className="w-14 h-14 bg-dicssa-dark-gray border border-dicssa-yellow/60 rounded-full flex items-center justify-center text-dicssa-yellow animate-pulse">
            <Hammer className="w-6 h-6 animate-bounce" />
          </div>
        </div>
        <h4 className="text-sm font-sans font-extrabold uppercase text-white tracking-widest mb-1">
          Trazando Rutas Nacionales
        </h4>
        <p className="text-[10px] font-mono text-dicssa-yellow animate-pulse tracking-wide">
          CARGANDO MAPA DE INFRAESTRUCTURA...
        </p>
      </div>
    </div>
  ),
});

export default function ProjectMap() {
  return (
    <div className="w-full h-full relative border border-white/10 rounded-lg overflow-hidden shadow-2xl min-h-[450px]">
      <MapInner />
    </div>
  );
}
