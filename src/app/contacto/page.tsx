import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactoPage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <Header />

      {/* Hero */}
      <div className="relative pt-32 pb-12 bg-gradient-to-b from-dicssa-dark-gray/30 to-black text-center select-none border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            {"// ATENCIÓN PERSONALIZADA"}
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4">
            CONTACTO Y OFICINAS
          </h1>
          <div className="w-16 h-1 bg-dicssa-yellow mx-auto mb-6"></div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed font-sans">
            Comuníquese directamente con nuestras oficinas centrales en Ciudad de México para solicitudes de licitaciones, cotizaciones o alianzas estratégicas.
          </p>
        </div>
      </div>

      {/* Formulario y Mapa Interactivo */}
      <Contact />

      <Footer />
    </main>
  );
}
