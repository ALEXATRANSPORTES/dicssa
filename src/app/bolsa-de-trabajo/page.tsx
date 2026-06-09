import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Clock, Briefcase, ArrowRight, GraduationCap, HeartHandshake, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Bolsa de Trabajo | DICSSA Infraestructura",
  description:
    "Únete al equipo de DICSSA Infraestructura. Vacantes en ingeniería civil, operación de maquinaria, topografía y supervisión de obra en proyectos viales en todo México.",
  alternates: { canonical: "/bolsa-de-trabajo" },
  openGraph: {
    title: "Bolsa de Trabajo | DICSSA Infraestructura",
    description: "Vacantes en ingeniería civil, maquinaria y supervisión de obra vial.",
    url: "https://www.grupodicssa.mx/bolsa-de-trabajo",
  },
};

// [CONTENIDO DE EJEMPLO — REEMPLAZAR con vacantes reales / conectar a un ATS].
const jobs = [
  { title: "Ingeniero Residente de Obra", area: "Ingeniería", location: "Estado de México", type: "Tiempo completo", desc: "Responsable del control técnico, programa de obra y supervisión de calidad en proyectos carreteros." },
  { title: "Operador de Maquinaria Pesada", area: "Operación", location: "Puebla / Querétaro", type: "Por proyecto", desc: "Operación de pavimentadoras, fresadoras y motoconformadoras con certificación vigente." },
  { title: "Topógrafo", area: "Topografía", location: "CDMX", type: "Tiempo completo", desc: "Levantamientos, control de niveles y replanteo con estación total y GPS RTK." },
  { title: "Supervisor de Calidad de Asfalto", area: "Laboratorio", location: "Estado de México", type: "Tiempo completo", desc: "Pruebas Marshall, control volumétrico y verificación de mezcla asfáltica en campo." },
  { title: "Auxiliar Administrativo de Obra", area: "Administración", location: "CDMX", type: "Tiempo completo", desc: "Apoyo en estimaciones, bitácora electrónica y control documental de contratos." },
];

const benefits = [
  { icon: GraduationCap, t: "Desarrollo profesional", d: "Capacitación continua y crecimiento dentro de proyectos de gran escala." },
  { icon: HeartHandshake, t: "Prestaciones superiores", d: "Prestaciones de ley y adicionales conforme a normativa mexicana." },
  { icon: TrendingUp, t: "Proyectos de impacto", d: "Participa en obra pública que transforma la infraestructura nacional." },
];

export default function BolsaTrabajoPage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <Header />

      <div className="pt-28 pb-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Bolsa de Trabajo" }]} />
      </div>

      <section className="px-6 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">{"// ÚNETE AL EQUIPO"}</span>
          <h1 className="text-4xl sm:text-6xl font-display font-black uppercase tracking-widest mt-2 mb-4">BOLSA DE TRABAJO</h1>
          <div className="w-16 h-1 bg-dicssa-yellow mx-auto mb-6" />
          <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Construimos la infraestructura de México con el mejor talento. Si te apasiona la obra civil
            y la ingeniería vial, queremos conocerte.
          </p>
        </div>
      </section>

      {/* Beneficios */}
      <section className="px-6 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, t, d }, i) => (
            <div key={i} className="bg-dicssa-dark border border-white/5 rounded-xl p-6">
              <div className="w-11 h-11 bg-dicssa-yellow/10 rounded-lg flex items-center justify-center text-dicssa-yellow mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-sans font-black text-white uppercase tracking-wider mb-2">{t}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vacantes */}
      <section className="px-6 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-display font-black uppercase tracking-widest mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-dicssa-yellow" /> Vacantes Disponibles
          </h2>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <div key={i} className="group bg-dicssa-dark border border-white/5 rounded-xl p-6 hover:border-dicssa-yellow/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-black bg-dicssa-yellow px-2 py-0.5 rounded">{job.area}</span>
                  </div>
                  <h3 className="text-base font-sans font-black text-white group-hover:text-dicssa-yellow transition-colors">{job.title}</h3>
                  <p className="text-xs text-gray-400 mt-1.5 leading-relaxed max-w-2xl">{job.desc}</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-[11px] font-mono text-gray-500">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-dicssa-yellow" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-dicssa-yellow" /> {job.type}</span>
                  </div>
                </div>
                <a
                  href={`mailto:contacto@grupodicssa.mx?subject=${encodeURIComponent(`Postulación - ${job.title}`)}`}
                  className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 bg-dicssa-yellow/10 hover:bg-dicssa-yellow text-dicssa-yellow hover:text-black border border-dicssa-yellow/30 hover:border-dicssa-yellow rounded-lg text-[11px] font-black uppercase tracking-widest transition-all"
                >
                  Postular <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-dicssa-dark-gray/40 border border-white/5 rounded-xl p-6 text-center">
            <p className="text-sm text-gray-300">¿No encuentras tu posición ideal?</p>
            <p className="text-xs text-gray-500 mt-1 mb-4">Envíanos tu CV y te contactaremos cuando surja una vacante acorde a tu perfil.</p>
            <a href="mailto:contacto@grupodicssa.mx?subject=CV%20-%20Bolsa%20de%20Trabajo" className="inline-flex items-center gap-2 px-6 py-3 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black text-xs font-black uppercase tracking-widest rounded-lg transition-all">
              Enviar mi CV
            </a>
          </div>
          <p className="text-center text-[10px] font-mono text-gray-600 mt-6">[Vacantes de ejemplo — reemplazar con posiciones reales o conectar a un ATS]</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
