import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Cpu, Landmark, Briefcase, Award, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "DICSSA Infraestructura | Constructora de Carreteras y Vías en México",
  description:
    "DICSSA Infraestructura SA de CV — más de 15 años construyendo carreteras, puentes, viaductos y pavimentos para SCT, CFE, PEMEX y gobiernos estatales en toda la República Mexicana.",
  alternates: { canonical: "/" },
};

const specialties = [
  {
    icon: Cpu,
    title: "Modernización Vial",
    desc: "Construcción y ensanchamiento de carreteras federales, caminos rurales y vialidades urbanas.",
  },
  {
    icon: ShieldCheck,
    title: "Viaductos y Puentes",
    desc: "Pasos superiores vehiculares (PSV), deprimidos y distribuidores viales de alta ingeniería.",
  },
  {
    icon: Landmark,
    title: "Fresado y Mezclas",
    desc: "Pavimentación de concreto asfáltico y recuperación profunda de pavimentos deteriorados.",
  },
  {
    icon: Briefcase,
    title: "Obra Hidráulica",
    desc: "Sistemas pluviales de drenaje, agua potable y control de escurrimientos viales.",
  },
];

const clients = [
  "SCT", "CFE", "PEMEX", "CAPUFE", "INIFED", "IMIFE", "CAEM", "Gobierno CDMX",
];

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden">
      <Header />
      <Hero />

      {/* ─── Quiénes Somos ─── */}
      <section id="quienes-somos" className="py-24 px-6 relative z-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
              {"// CERTEZA Y CALIDAD"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-widest leading-none">
              DICSSA INFRAESTRUCTURA
            </h2>
            <div className="w-16 h-1 bg-dicssa-yellow" />
            <p className="text-sm text-gray-300 leading-relaxed font-sans">
              Somos una constructora mexicana sólida con más de 15 años de experiencia liderando proyectos viales de gran escala. Contamos con un parque de maquinaria moderno y personal altamente calificado para entregar carreteras, puentes y viaductos que impulsan el desarrollo nacional.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { n: "15+", l: "Años de trayectoria" },
                { n: "21+", l: "Obras entregadas" },
                { n: "11", l: "Estados cubiertos" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col border-l-2 border-dicssa-yellow pl-4">
                  <span className="text-2xl font-display font-black text-dicssa-yellow">{s.n}</span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-1">{s.l}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/quienes-somos"
                className="px-6 py-3 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black font-sans font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center space-x-2 transition-all"
              >
                <span>Conocer Más</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/quienes-somos#tecnologia"
                className="px-6 py-3 border border-white/10 hover:bg-white/10 text-white font-sans font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center transition-all"
              >
                Nuestra Maquinaria
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/images/imagen1.png"
              alt="DICSSA — Obras de infraestructura vial"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-sm border border-white/10 p-3.5 rounded">
              <span className="block text-lg font-display font-black text-dicssa-yellow">15+ AÑOS</span>
              <span className="block text-[9px] font-mono text-white/70 uppercase tracking-widest mt-0.5">En el Sector Vial</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Especialidades ─── */}
      <section id="especialidades" className="py-24 px-6 relative z-10 bg-dicssa-dark-pure border-b border-white/5">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            {"// SOLUCIONES INTEGRALES"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-widest mt-2">
            NUESTRAS LÍNEAS DE TRABAJO
          </h2>
          <div className="w-16 h-1 bg-dicssa-yellow mx-auto mt-4" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="p-6 bg-dicssa-dark border border-white/5 rounded-lg flex flex-col justify-between h-56 hover:border-dicssa-yellow/40 hover:bg-dicssa-dark-gray transition-all group"
            >
              <div className="w-10 h-10 bg-dicssa-yellow/10 rounded flex items-center justify-center text-dicssa-yellow group-hover:bg-dicssa-yellow group-hover:text-black transition-all">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-sans font-black text-white uppercase tracking-wider mb-2 group-hover:text-dicssa-yellow transition-colors">{title}</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/servicios"
            className="inline-flex items-center space-x-2 text-xs font-sans font-black text-dicssa-yellow uppercase tracking-widest hover:text-white transition-colors"
          >
            <span>Ver Todos los Servicios</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ─── Clientes destacados ─── */}
      <section className="py-20 px-6 border-b border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
              {"// CONFÍAN EN NOSOTROS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-widest mt-2">
              CLIENTES INSTITUCIONALES
            </h2>
            <div className="w-16 h-1 bg-dicssa-yellow mx-auto mt-4" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {clients.map((c, i) => (
              <div
                key={i}
                className="px-5 py-3 bg-dicssa-dark border border-white/10 rounded-lg text-xs font-mono font-bold text-gray-300 hover:border-dicssa-yellow/40 hover:text-dicssa-yellow transition-all"
              >
                {c}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/clientes" className="inline-flex items-center space-x-2 text-xs font-sans font-black text-dicssa-yellow uppercase tracking-widest hover:text-white transition-colors">
              <span>Ver Todos los Clientes</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Proyectos Destacados preview ─── */}
      <section className="py-24 px-6 relative z-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
                {"// PORTAFOLIO DE OBRAS"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-widest leading-tight">
                21+ PROYECTOS EN TODA LA REPÚBLICA
              </h2>
              <div className="w-16 h-1 bg-dicssa-yellow" />
              <p className="text-sm text-gray-300 leading-relaxed">
                Hemos ejecutado obras para la SCT, Junta de Caminos del Estado de México, Gobierno de CDMX, PEMEX y más. Nuestro portafolio abarca carreteras, puentes, distribuidores viales y terracerías en 11 estados.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: MapPin, text: "Puebla, Guanajuato, Querétaro" },
                  { icon: Award, text: "SCT, CFE, PEMEX, CAPUFE" },
                  { icon: Users, text: "Personal altamente capacitado" },
                  { icon: ShieldCheck, text: "Normativa SCT certificada" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start space-x-2 text-[11px] text-gray-400">
                    <Icon className="w-3.5 h-3.5 text-dicssa-yellow shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <a
                href="/proyectos"
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black font-sans font-black text-xs uppercase tracking-widest rounded transition-all"
              >
                <span>Ver Portafolio Completo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="relative h-80 sm:h-[420px] rounded-lg overflow-hidden border border-white/10">
              <Image
                src="/images/imagen2.jpeg"
                alt="DICSSA — Proyectos de infraestructura"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/70 backdrop-blur-sm border border-white/10 p-4 rounded">
                <span className="block text-[9px] font-mono text-dicssa-yellow uppercase tracking-widest">Proyecto Destacado</span>
                <span className="block text-sm font-sans font-bold text-white mt-1">Tren Maya — Tramo Calkiní - Izamal, Yucatán</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Contacto ─── */}
      <section className="py-20 px-6 relative z-10 text-center bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            {"// ¿LISTO PARA CONSTRUIR?"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-widest leading-tight">
            INICIA TU PROYECTO VIAL CON DICSSA
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Contáctenos con los detalles de su proyecto. Nuestro equipo de ingenieros responde en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="/contacto"
              className="px-8 py-4 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black font-sans font-black text-xs uppercase tracking-widest rounded transition-all w-full sm:w-auto"
            >
              Enviar Solicitud
            </a>
            <a
              href="tel:5525897307"
              className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-sans font-black text-xs uppercase tracking-widest rounded transition-all w-full sm:w-auto"
            >
              (55) 2589 7307
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
