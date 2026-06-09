"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface Photo {
  src: string;
  cat: string;
  caption: string;
}

const categories = ["Todas", "Pavimentación", "Terracerías", "Maquinaria", "Conservación"] as const;

// Galería de obra. Combina las mejores fotos (d1–d7) con el archivo de obra.
const photos: Photo[] = [
  { src: "/images/d5.png", cat: "Pavimentación", caption: "Vialidad urbana terminada" },
  { src: "/images/d2.png", cat: "Pavimentación", caption: "Carretera con alumbrado" },
  { src: "/images/d1.png", cat: "Maquinaria", caption: "Fresado y encarpetado" },
  { src: "/images/d6.png", cat: "Maquinaria", caption: "Fresadora Wirtgen en operación" },
  { src: "/images/d3.png", cat: "Terracerías", caption: "Modernización en montaña" },
  { src: "/images/d4.png", cat: "Terracerías", caption: "Tramo de terracerías" },
  { src: "/images/d7.png", cat: "Maquinaria", caption: "Excavadora CAT" },
  ...Array.from({ length: 17 }, (_, i) => {
    const n = i + 1;
    const cats = ["Pavimentación", "Terracerías", "Conservación", "Maquinaria"];
    return {
      src: `/images/proyectos/foto${n}.jpeg`,
      cat: cats[i % cats.length],
      caption: `Obra vial DICSSA · Registro ${String(n).padStart(2, "0")}`,
    };
  }),
];

export default function Gallery() {
  const [filter, setFilter] = useState<string>("Todas");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = photos.filter((p) => filter === "Todas" || p.cat === filter);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)), [visible.length]);
  const next = useCallback(() => setLightbox((i) => (i === null ? i : (i + 1) % visible.length)), [visible.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-5 py-2.5 rounded-full text-[11px] font-sans font-black uppercase tracking-widest border transition-all ${
              filter === c
                ? "bg-dicssa-yellow border-dicssa-yellow text-black"
                : "bg-dicssa-dark border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry (columnas CSS) */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        <AnimatePresence>
          {visible.map((p, i) => (
            <motion.button
              layout
              key={p.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightbox(i)}
              className="group relative mb-4 w-full break-inside-avoid rounded-xl overflow-hidden border border-white/10 block"
            >
              <Image
                src={p.src}
                alt={p.caption}
                width={500}
                height={375}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[9px] font-mono uppercase tracking-widest text-dicssa-yellow">{p.cat}</span>
                <span className="text-sm font-sans font-bold text-white leading-tight">{p.caption}</span>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-black/60 backdrop-blur rounded-full flex items-center justify-center text-dicssa-yellow opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
          >
            <button onClick={close} aria-label="Cerrar" className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-dicssa-yellow hover:text-black text-white flex items-center justify-center transition-all z-10">
              <X className="w-5 h-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Anterior" className="absolute left-3 sm:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-dicssa-yellow hover:text-black text-white flex items-center justify-center transition-all z-10">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Siguiente" className="absolute right-3 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-dicssa-yellow hover:text-black text-white flex items-center justify-center transition-all z-10">
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={visible[lightbox].src}
                alt={visible[lightbox].caption}
                width={1400}
                height={1000}
                className="w-full h-auto max-h-[82vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-dicssa-yellow">{visible[lightbox].cat}</span>
                <p className="text-sm font-sans font-bold text-white mt-1">{visible[lightbox].caption}</p>
                <p className="text-[11px] font-mono text-gray-500 mt-1">{lightbox + 1} / {visible.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
