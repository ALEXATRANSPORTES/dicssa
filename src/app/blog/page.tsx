import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, blogCategories } from "@/lib/blog-data";
import Image from "next/image";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog de Infraestructura Vial | DICSSA",
  description:
    "Artículos técnicos sobre construcción de carreteras, pavimentación, puentes, licitaciones de obra pública y mantenimiento vial en México. Por los ingenieros de DICSSA Infraestructura.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog de Infraestructura Vial | DICSSA",
    description:
      "Artículos técnicos sobre carreteras, puentes, asfalto y obra pública en México.",
    url: "https://www.grupodicssa.mx/blog",
    images: [{ url: "/images/imagen1.png", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden">
      <Header />

      {/* Hero */}
      <div className="relative pt-32 pb-16 bg-gradient-to-b from-dicssa-dark-gray/30 to-black text-center select-none border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            {"// CONOCIMIENTO TÉCNICO"}
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4">
            BLOG DE INFRAESTRUCTURA
          </h1>
          <div className="w-16 h-1 bg-dicssa-yellow mx-auto mb-6" />
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed font-sans">
            Artículos técnicos sobre construcción vial, pavimentación, puentes, licitaciones y conservación de carreteras en México.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Artículo destacado */}
        <section className="mb-20">
          <a href={`/blog/${featured.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 rounded-xl overflow-hidden hover:border-dicssa-yellow/30 transition-all">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 lg:bg-gradient-to-b" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-dicssa-yellow text-black text-[9px] font-mono font-black uppercase tracking-widest rounded">
                    Destacado
                  </span>
                </div>
              </div>
              <div className="p-8 bg-dicssa-dark flex flex-col justify-center space-y-4">
                <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono text-dicssa-yellow uppercase tracking-widest">
                  <Tag className="w-3 h-3" />
                  <span>{featured.category}</span>
                </span>
                <h2 className="text-xl md:text-2xl font-sans font-black text-white leading-tight group-hover:text-dicssa-yellow transition-colors">
                  {featured.title}
                </h2>
                <p className="text-xs text-gray-400 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center space-x-4 text-[10px] font-mono text-gray-500 pt-2">
                  <span className="flex items-center space-x-1"><Calendar className="w-3 h-3" /><span>{featured.date}</span></span>
                  <span className="flex items-center space-x-1"><Clock className="w-3 h-3" /><span>{featured.readTime} min lectura</span></span>
                </div>
                <span className="inline-flex items-center space-x-2 text-xs font-sans font-black text-dicssa-yellow uppercase tracking-widest group-hover:text-white transition-colors pt-2">
                  <span>Leer Artículo</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </a>
        </section>

        {/* Grid de artículos */}
        <section>
          <h2 className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase mb-8">
            {"// TODOS LOS ARTÍCULOS"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col border border-white/8 rounded-lg overflow-hidden hover:border-dicssa-yellow/30 bg-dicssa-dark transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dicssa-dark to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-0.5 bg-black/70 border border-white/10 text-dicssa-yellow text-[9px] font-mono uppercase tracking-widest rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow space-y-3">
                  <h3 className="text-sm font-sans font-black text-white leading-snug group-hover:text-dicssa-yellow transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 pt-2 border-t border-white/5">
                    <span className="flex items-center space-x-1"><Calendar className="w-3 h-3" /><span>{post.date}</span></span>
                    <span className="flex items-center space-x-1"><Clock className="w-3 h-3" /><span>{post.readTime} min</span></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 border border-white/10 rounded-xl p-10 text-center bg-dicssa-dark">
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            {"// ¿PROYECTO VIAL EN MENTE?"}
          </span>
          <h3 className="text-2xl font-display font-black uppercase tracking-widest text-white mt-3 mb-4">
            HABLA CON NUESTROS INGENIEROS
          </h3>
          <p className="text-xs text-gray-400 max-w-lg mx-auto mb-6 leading-relaxed">
            Nuestro equipo puede orientarte en la selección del tipo de obra, normativa aplicable y presupuesto referencial sin costo.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black font-sans font-black text-xs uppercase tracking-widest rounded transition-all"
          >
            <span>Contactar un Ingeniero</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
