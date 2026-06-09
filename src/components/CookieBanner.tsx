"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "dicssa_cookie_consent_v1";

interface Consent {
  necesarias: true;
  analiticas: boolean;
  marketing: boolean;
  ts: number;
}

/**
 * Banner de consentimiento de cookies por categorías (LFPDPPP / buenas prácticas).
 * Persiste en localStorage. Cuando el usuario acepta analíticas/marketing es donde
 * se deben inicializar GA4/GTM/Meta Pixel (ver TODO más abajo).
 */
export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analiticas, setAnaliticas] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const persist = (consent: Consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {}
    // TODO(analytics): si consent.analiticas -> init GA4/GTM; si consent.marketing -> init Meta Pixel.
    setOpen(false);
  };

  const acceptAll = () => persist({ necesarias: true, analiticas: true, marketing: true, ts: Date.now() });
  const rejectAll = () => persist({ necesarias: true, analiticas: false, marketing: false, ts: Date.now() });
  const saveChoice = () => persist({ necesarias: true, analiticas, marketing, ts: Date.now() });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[300]"
          role="dialog"
          aria-label="Aviso de cookies"
        >
          <div className="bg-dicssa-dark border border-dicssa-yellow/30 rounded-2xl shadow-2xl shadow-black/60 p-5 backdrop-blur-md">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-dicssa-yellow/10 rounded-lg flex items-center justify-center text-dicssa-yellow shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-sans font-black text-white uppercase tracking-wide">Cookies y privacidad</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed mt-1.5">
                  Usamos cookies para mejorar su experiencia y analizar el tráfico. Puede aceptar todas o
                  elegir sus preferencias. Consulte el{" "}
                  <a href="/aviso-de-privacidad" className="text-dicssa-yellow underline">Aviso de Privacidad</a>.
                </p>
              </div>
              <button onClick={rejectAll} aria-label="Cerrar y rechazar" className="text-gray-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <AnimatePresence>
              {details && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mt-4 space-y-2"
                >
                  {[
                    { k: "necesarias", label: "Necesarias", desc: "Esenciales para el sitio.", val: true, fixed: true, set: () => {} },
                    { k: "analiticas", label: "Analíticas", desc: "Métricas de uso (GA4).", val: analiticas, fixed: false, set: () => setAnaliticas((v) => !v) },
                    { k: "marketing", label: "Marketing", desc: "Remarketing (Meta Pixel).", val: marketing, fixed: false, set: () => setMarketing((v) => !v) },
                  ].map((c) => (
                    <div key={c.k} className="flex items-center justify-between bg-dicssa-dark-gray/50 border border-white/5 rounded-lg px-3 py-2.5">
                      <div>
                        <span className="text-xs font-bold text-white">{c.label}</span>
                        <p className="text-[10px] text-gray-500">{c.desc}</p>
                      </div>
                      <button
                        onClick={c.set}
                        disabled={c.fixed}
                        aria-label={`Alternar ${c.label}`}
                        className={`w-10 h-5 rounded-full relative transition-all ${c.val ? "bg-dicssa-yellow" : "bg-white/15"} ${c.fixed ? "opacity-60 cursor-not-allowed" : ""}`}
                      >
                        <span className={`absolute top-0.5 w-4 h-4 bg-black rounded-full transition-all ${c.val ? "left-[22px]" : "left-0.5"}`} />
                      </button>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-wrap items-center gap-2 mt-4">
              <button onClick={acceptAll} className="flex-1 min-w-[120px] px-4 py-2.5 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black text-[11px] font-black uppercase tracking-widest rounded-lg transition-all">
                Aceptar todas
              </button>
              {details ? (
                <button onClick={saveChoice} className="flex-1 min-w-[120px] px-4 py-2.5 border border-white/15 hover:border-white/40 text-white text-[11px] font-black uppercase tracking-widest rounded-lg transition-all">
                  Guardar
                </button>
              ) : (
                <button onClick={() => setDetails(true)} className="flex-1 min-w-[120px] px-4 py-2.5 border border-white/15 hover:border-white/40 text-white text-[11px] font-black uppercase tracking-widest rounded-lg transition-all">
                  Personalizar
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
