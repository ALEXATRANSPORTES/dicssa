import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import { Quote } from "lucide-react";

export default function ClientesPage() {
  const testimonials = [
    {
      quote: "DICSSA Infraestructura ha demostrado un alto compromiso técnico y puntualidad en la modernización de los entronques del libramiento Serdán. Los perfiles de rodadura cumplen con las normativas más estrictas.",
      author: "Ing. R. Domínguez",
      position: "Residencia General de Carreteras Alimentadoras - Puebla",
    },
    {
      quote: "El paso superior Paseo del Bajío en Celaya se entregó con altos estándares estructurales. La coordinación inducida de redes de CFE y el canal de CNA se resolvieron de forma impecable.",
      author: "Ing. M. Santillán",
      position: "Subdirección de Obras - Centro SCT Guanajuato",
    },
    {
      quote: "La conservación periódica por fresado y carpeta en la Autopista México-Pachuca destacó por su agilidad operativa, minimizando las demoras del tráfico pesado en una vía tan transitada.",
      author: "Ing. A. Gutiérrez",
      position: "Supervisión Externa - SCT Estado de México",
    },
  ];

  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden">
      <Header />

      {/* Hero */}
      <div className="relative pt-32 pb-12 bg-gradient-to-b from-dicssa-dark-gray/30 to-black text-center select-none border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            {"// CONFIANZA INSTITUCIONAL"}
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4">
            NUESTROS CLIENTES
          </h1>
          <div className="w-16 h-1 bg-dicssa-yellow mx-auto mb-6"></div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed font-sans">
            Colaboramos estrechamente con secretarías federales, institutos estatales de infraestructura y organismos descentralizados para edificar vialidades de primer nivel.
          </p>
        </div>
      </div>

      {/* Carrusel de Clientes */}
      <Clients />

      {/* Testimonios */}
      <section className="py-24 px-6 bg-black relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
              {"// TESTIMONIALES Y OPINIONES"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4">
              REFERENCIAS DE CALIDAD
            </h2>
            <div className="w-16 h-1 bg-dicssa-yellow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="p-8 bg-dicssa-dark border border-white/5 rounded-lg flex flex-col justify-between hover:border-dicssa-yellow/20 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-16 h-16 text-white" />
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-sans mb-6 relative z-10 italic">
                  &ldquo;{test.quote}&rdquo;
                </p>

                <div className="border-t border-white/5 pt-4">
                  <span className="block text-xs font-sans font-black text-white uppercase tracking-wider">
                    {test.author}
                  </span>
                  <span className="block text-[9px] text-dicssa-yellow font-mono mt-1">
                    {test.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
