import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import TechSocial from "@/components/TechSocial";

export const metadata: Metadata = {
  title: "Quiénes Somos | DICSSA Infraestructura — 15 Años en Obra Vial",
  description:
    "Conoce la historia, misión y capacidad técnica de DICSSA Infraestructura SA de CV. Constructora mexicana especializada en carreteras, puentes y pavimentos con más de 15 años de experiencia y maquinaria propia.",
  alternates: { canonical: "/quienes-somos" },
  openGraph: {
    title: "Quiénes Somos | DICSSA Infraestructura",
    description: "15+ años construyendo infraestructura vial en México con maquinaria propia y personal calificado.",
    url: "https://www.grupodicssa.mx/quienes-somos",
    images: [{ url: "/images/imagen1.png", width: 1200, height: 630 }],
  },
};

export default function QuienesSomos() {
  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden">
      <Header />

      {/* Hero de Subpágina */}
      <div className="relative pt-32 pb-16 bg-gradient-to-b from-dicssa-dark-gray/30 to-black text-center select-none border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            {"// CONÓCENOS MÁS"}
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4">
            QUIÉNES SOMOS
          </h1>
          <div className="w-16 h-1 bg-dicssa-yellow mx-auto"></div>
        </div>
      </div>

      {/* Componente About (Trayectoria, counters e imagen1.png) */}
      <About />

      {/* Componente TechSocial (Tecnología de Maquinaria y Responsabilidad Social) */}
      <TechSocial />

      <Footer />
    </main>
  );
}
