import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import { Clock, ShieldCheck, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Solicitar Cotización | DICSSA Infraestructura",
  description:
    "Solicite una cotización para su proyecto de infraestructura vial: carreteras, puentes, pavimentación, terracerías y más. Respuesta en menos de 24 horas.",
  alternates: { canonical: "/cotizacion" },
  openGraph: {
    title: "Solicitar Cotización | DICSSA Infraestructura",
    description: "Cotice su proyecto vial con DICSSA. Respuesta en menos de 24 horas.",
    url: "https://www.grupodicssa.mx/cotizacion",
  },
};

export default function CotizacionPage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <Header />

      <div className="pt-28 pb-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Cotización" }]} />
      </div>

      <section className="px-6 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info lateral */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
                {"// COTIZADOR EN LÍNEA"}
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-widest mt-2 leading-none">
                SOLICITE SU<br /><span className="text-dicssa-yellow">COTIZACIÓN</span>
              </h1>
              <div className="w-16 h-1 bg-dicssa-yellow mt-4" />
              <p className="text-sm text-gray-400 leading-relaxed mt-6">
                Complete el formulario en 4 sencillos pasos. Un ingeniero especialista analizará su
                proyecto y le enviará una propuesta técnica y económica.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Clock, t: "Respuesta en 24h", d: "Atención prioritaria a su solicitud." },
                { icon: ShieldCheck, t: "Datos protegidos", d: "Conforme a la LFPDPPP de México." },
                { icon: FileText, t: "Propuesta formal", d: "Cotización técnica detallada por escrito." },
              ].map(({ icon: Icon, t, d }, i) => (
                <div key={i} className="flex items-start gap-3 bg-dicssa-dark-gray/40 border border-white/5 p-4 rounded-lg">
                  <Icon className="w-5 h-5 text-dicssa-yellow shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-sans font-bold text-white uppercase tracking-wider">{t}</h3>
                    <p className="text-[11px] text-gray-400 mt-1">{d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-dicssa-dark border border-white/5 rounded-lg p-5">
              <p className="text-[11px] font-mono text-gray-500 uppercase tracking-widest mb-2">¿Prefiere llamar?</p>
              <a href="tel:5525897307" className="text-lg font-display font-black text-dicssa-yellow hover:text-white transition-colors">(55) 2589 7307</a>
              <p className="text-[11px] text-gray-500 mt-1">contacto@grupodicssa.mx</p>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
