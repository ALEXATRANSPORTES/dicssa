import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import ProjectMap from "@/components/ProjectMap";

export default function ProyectosPage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <Header />

      {/* Hero */}
      <div className="relative pt-32 pb-12 bg-gradient-to-b from-dicssa-dark-gray/30 to-black text-center select-none border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            {"// EXPERIENCIA AUDITADA Y PROBADA"}
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4">
            NUESTRAS OBRAS
          </h1>
          <div className="w-16 h-1 bg-dicssa-yellow mx-auto mb-6"></div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed font-sans">
            Consulte las 21 principales obras ejecutadas para dependencias de comunicaciones y transportes, e interactúe con el mapa de cobertura nacional.
          </p>
        </div>
      </div>

      {/* Grid Masonry de Portafolio y Collage Flotante */}
      <Portfolio />

      {/* Mapa de Proyectos Nacional (A Pantalla Completa o Contenedor Amplio) */}
      <section className="py-24 px-6 bg-dicssa-dark-pure border-t border-white/5 relative z-10 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
              {"// GEOLOCALIZACIÓN DE INFRAESTRUCTURA"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4">
              MAPA NACIONAL DE PROYECTOS
            </h2>
            <div className="w-16 h-1 bg-dicssa-yellow mx-auto"></div>
          </div>

          {/* Contenedor del Mapa */}
          <div className="w-full h-[550px] relative">
            <ProjectMap />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
