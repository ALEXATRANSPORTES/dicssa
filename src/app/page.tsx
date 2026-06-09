import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { ArrowRight, ShieldCheck, Cpu, Landmark, Briefcase, Award, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "DICSSA Infraestructura | Constructora de Carreteras y Vías en México",
  description:
    "DICSSA Infraestructura SA de CV — más de 15 años construyendo carreteras, puentes, viaductos y pavimentos para SCT, CFE, PEMEX y gobiernos estatales en toda la República Mexicana.",
  alternates: { canonical: "/" },
};

const specialties = [
  { icon: Cpu, title: "Modernización Vial", desc: "Construcción y ensanchamiento de carreteras federales, caminos rurales y vialidades urbanas." },
  { icon: ShieldCheck, title: "Viaductos y Puentes", desc: "Pasos superiores vehiculares (PSV), deprimidos y distribuidores viales de alta ingeniería." },
  { icon: Landmark, title: "Fresado y Mezclas", desc: "Pavimentación de concreto asfáltico y recuperación profunda de pavimentos deteriorados." },
  { icon: Briefcase, title: "Obra Hidráulica", desc: "Sistemas pluviales de drenaje, agua potable y control de escurrimientos viales." },
];

const counters = [
  { to: 15, suffix: "+", label: "Años de trayectoria" },
  { to: 21, suffix: "+", label: "Obras entregadas" },
  { to: 11, suffix: "", label: "Estados cubiertos" },
  { to: 50, suffix: "+", label: "Unidades de maquinaria" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <Header />
      <Hero />

      {/* ─── Quiénes Somos ─── */}
      <section id="quienes-somos" className="py-28 px-6 relative z-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="right">
              <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
                {"// CERTEZA Y CALIDAD"}
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-widest leading-none mt-2">
                DICSSA INFRAESTRUCTURA
              </h2>
              <div className="w-16 h-1 bg-dicssa-yellow mt-4" />
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed font-sans">
                Somos una constructora mexicana sólida con más de 15 años de experiencia liderando proyectos viales de gran escala. Contamos con un parque de maquinaria moderno y personal altamente calificado para entregar carreteras, puentes y viaductos que impulsan el desarrollo nacional.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
                {counters.map((c, i) => (
                  <div key={i} className="flex flex-col border-l-2 border-dicssa-yellow pl-4">
                    <Counter to={c.to} suffix={c.suffix} className="text-2xl sm:text-3xl font-display font-black text-dicssa-yellow" />
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-1 leading-tight">{c.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/quienes-somos" className="group px-6 py-3 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black font-sans font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center space-x-2 transition-all hover:scale-[1.03]">
                  <span>Conocer Más</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/quienes-somos#tecnologia" className="px-6 py-3 border border-white/15 hover:border-white/40 hover:bg-white/5 text-white font-sans font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center transition-all">
                  Nuestra Maquinaria
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.15} className="lg:col-span-5">
            <ParallaxImage
              src="/images/imagen1.png"
              alt="DICSSA — Obras de infraestructura vial"
              className="h-80 sm:h-[440px] rounded-xl border border-white/10 shadow-2xl shadow-black/50"
              imgClassName="opacity-90"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-md border border-dicssa-yellow/20 p-4 rounded-lg">
                <span className="block text-2xl font-display font-black text-dicssa-yellow leading-none">15+ AÑOS</span>
                <span className="block text-[9px] font-mono text-white/70 uppercase tracking-widest mt-1">En el Sector Vial</span>
              </div>
            </ParallaxImage>
          </Reveal>
        </div>
      </section>

      {/* ─── Especialidades ─── */}
      <section id="especialidades" className="py-28 px-6 relative z-10 bg-dicssa-dark-pure/70 backdrop-blur-sm border-b border-white/5">
        <Reveal className="max-w-6xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            {"// SOLUCIONES INTEGRALES"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-widest mt-2">
            NUESTRAS LÍNEAS DE TRABAJO
          </h2>
          <div className="w-16 h-1 bg-dicssa-yellow mx-auto mt-4" />
        </Reveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={i} direction="up" delay={i * 0.1}>
              <div className="relative p-7 bg-dicssa-dark border border-white/5 rounded-xl flex flex-col justify-between h-60 overflow-hidden group hover:border-dicssa-yellow/40 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:shadow-dicssa-yellow/5">
                <div className="absolute top-0 left-0 w-full h-1 bg-dicssa-yellow scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <div className="w-11 h-11 bg-dicssa-yellow/10 rounded-lg flex items-center justify-center text-dicssa-yellow group-hover:bg-dicssa-yellow group-hover:text-black transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-sans font-black text-white uppercase tracking-wider mb-2 group-hover:text-dicssa-yellow transition-colors">{title}</h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <a href="/servicios" className="group inline-flex items-center space-x-2 text-xs font-sans font-black text-dicssa-yellow uppercase tracking-widest hover:text-white transition-colors">
            <span>Ver Todos los Servicios</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Reveal>
      </section>

      {/* ─── Clientes (marquee infinito) ─── */}
      <Clients />

      {/* ─── Proyectos Destacados preview ─── */}
      <section className="py-28 px-6 relative z-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <Reveal direction="right">
              <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
                {"// PORTAFOLIO DE OBRAS"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-widest leading-tight mt-2">
                21+ PROYECTOS EN TODA LA REPÚBLICA
              </h2>
              <div className="w-16 h-1 bg-dicssa-yellow mt-4" />
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Hemos ejecutado obras para la SCT, Junta de Caminos del Estado de México, Gobierno de CDMX, PEMEX y más. Nuestro portafolio abarca carreteras, puentes, distribuidores viales y terracerías en 11 estados.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
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
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <a href="/proyectos" className="group inline-flex items-center space-x-2 px-8 py-3.5 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black font-sans font-black text-xs uppercase tracking-widest rounded transition-all hover:scale-[1.03]">
                <span>Ver Portafolio Completo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.15}>
            <ParallaxImage
              src="/images/imagen2.jpeg"
              alt="DICSSA — Proyectos de infraestructura"
              className="h-80 sm:h-[460px] rounded-xl border border-white/10 shadow-2xl shadow-black/50"
              imgClassName="opacity-85"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/70 backdrop-blur-md border border-dicssa-yellow/20 p-4 rounded-lg">
                <span className="block text-[9px] font-mono text-dicssa-yellow uppercase tracking-widest">Proyecto Destacado</span>
                <span className="block text-sm font-sans font-bold text-white mt-1">Tren Maya — Tramo Calkiní - Izamal, Yucatán</span>
              </div>
            </ParallaxImage>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA Contacto ─── */}
      <section className="py-24 px-6 relative z-10 text-center bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:22px_22px]">
        <Reveal className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            {"// ¿LISTO PARA CONSTRUIR?"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-widest leading-tight">
            INICIA TU PROYECTO VIAL CON DICSSA
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Contáctenos con los detalles de su proyecto. Nuestro equipo de ingenieros responde en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="/contacto" className="px-8 py-4 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black font-sans font-black text-xs uppercase tracking-widest rounded transition-all hover:scale-[1.03] w-full sm:w-auto">
              Enviar Solicitud
            </a>
            <a href="tel:5525897307" className="px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-sans font-black text-xs uppercase tracking-widest rounded transition-all w-full sm:w-auto">
              (55) 2589 7307
            </a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
