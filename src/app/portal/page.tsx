"use client";

/**
 * ÁREA DE CLIENTES (frontend con datos simulados).
 *
 * Esta página implementa el FRONT-END completo del portal de clientes con una
 * sesión simulada en localStorage. Para producción se debe sustituir por
 * autenticación real:
 *
 *   1. Auth:    NextAuth.js (Credentials/Email provider) + JWT.  Reemplazar
 *               `fakeLogin` y `useSession` por `signIn()` / `useSession()`.
 *   2. Datos:   Supabase (PostgreSQL).  Sustituir `mockProjects` por una
 *               consulta protegida por RLS al usuario autenticado.
 *   3. Tiempo real: suscripción de Supabase Realtime para avance de obra.
 *
 * Los puntos de integración están marcados con `// TODO(backend)`.
 */

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Lock, LogOut, FileText, TrendingUp, Calendar, CheckCircle2, Clock, User } from "lucide-react";

const SESSION_KEY = "dicssa_portal_demo_session";

// [DATOS DE EJEMPLO] — sustituir por consulta a Supabase del cliente autenticado.
const mockProjects = [
  {
    name: "Modernización Carretera Estatal 100",
    contract: "2015-22-CE-A-028-W-00-2015",
    progress: 78,
    status: "En ejecución",
    nextMilestone: "Tendido de carpeta asfáltica · Km 72+000",
    updated: "08 jun 2026",
    docs: ["Estimación #6 (PDF)", "Reporte de calidad asfáltica", "Bitácora electrónica semanal"],
  },
  {
    name: "PSV Paseo del Bajío",
    contract: "2016-11-CE-A-092-W-00-2016",
    progress: 100,
    status: "Concluido",
    nextMilestone: "Acta de entrega-recepción firmada",
    updated: "30 may 2026",
    docs: ["Acta de entrega-recepción", "Planos as-built", "Memoria de cálculo estructural"],
  },
  {
    name: "Terracerías Tren Maya · Calkiní–Izamal",
    contract: "TREN MAYA",
    progress: 45,
    status: "En ejecución",
    nextMilestone: "Compactación de terraplén · subtramo 3",
    updated: "07 jun 2026",
    docs: ["Avance fotográfico semanal", "Control volumétrico de terracerías"],
  },
];

export default function PortalPage() {
  const [user, setUser] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setUser(localStorage.getItem(SESSION_KEY));
    } catch {}
  }, []);

  const fakeLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO(backend): reemplazar por signIn("credentials", { email, password }) de NextAuth.
    if (!email || !pass) {
      setError("Ingrese su correo y contraseña.");
      return;
    }
    const name = email.split("@")[0];
    try {
      localStorage.setItem(SESSION_KEY, name);
    } catch {}
    setUser(name);
    setError("");
  };

  const logout = () => {
    // TODO(backend): reemplazar por signOut() de NextAuth.
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch {}
    setUser(null);
    setEmail("");
    setPass("");
  };

  /* ── Login ── */
  if (!user) {
    return (
      <main className="relative min-h-screen text-white overflow-hidden">
        <Header />
        <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md bg-dicssa-dark/80 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <div className="w-14 h-14 bg-dicssa-yellow/10 rounded-xl flex items-center justify-center text-dicssa-yellow mb-6 mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-display font-black uppercase tracking-widest text-center mb-1">Área de Clientes</h1>
            <p className="text-xs text-gray-400 text-center mb-8">Consulte el avance de sus proyectos en tiempo real.</p>

            <form onSubmit={fakeLogin} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-2">Correo</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="cliente@dependencia.mx"
                  className="w-full bg-dicssa-dark border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-dicssa-yellow outline-none transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-2">Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="••••••••"
                  className="w-full bg-dicssa-dark border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-dicssa-yellow outline-none transition-all" />
              </div>
              {error && <p className="text-[11px] text-red-400">{error}</p>}
              <button type="submit" className="w-full px-6 py-3 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black text-xs font-black uppercase tracking-widest rounded-lg transition-all">
                Iniciar Sesión
              </button>
            </form>
            <p className="text-[10px] font-mono text-gray-600 text-center mt-6">
              [Demo — sesión simulada. Cualquier correo/clave funciona. Conectar NextAuth + Supabase en producción.]
            </p>
          </motion.div>
        </section>
        <Footer />
      </main>
    );
  }

  /* ── Dashboard ── */
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <Header />
      <section className="px-6 pt-28 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-dicssa-yellow rounded-full flex items-center justify-center text-black">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">Bienvenido</p>
                <h1 className="text-xl font-display font-black uppercase tracking-wider capitalize">{user}</h1>
              </div>
            </div>
            <button onClick={logout} className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/15 hover:border-white/40 text-gray-300 hover:text-white text-[11px] font-black uppercase tracking-widest rounded-lg transition-all self-start">
              <LogOut className="w-4 h-4" /> Salir
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockProjects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-dicssa-dark border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h2 className="text-base font-sans font-black text-white leading-tight">{p.name}</h2>
                    <p className="text-[10px] font-mono text-dicssa-yellow mt-1">{p.contract}</p>
                  </div>
                  <span className={`shrink-0 inline-flex items-center gap-1 text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded ${p.progress === 100 ? "bg-green-500/15 text-green-400" : "bg-dicssa-yellow/15 text-dicssa-yellow"}`}>
                    {p.progress === 100 ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                    {p.status}
                  </span>
                </div>

                {/* Barra de avance */}
                <div className="mb-5">
                  <div className="flex justify-between text-[11px] font-mono mb-1.5">
                    <span className="text-gray-400 uppercase tracking-wider flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Avance</span>
                    <span className="text-dicssa-yellow font-bold">{p.progress}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-dicssa-yellow rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${p.progress}%` }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                    />
                  </div>
                </div>

                <div className="space-y-2 text-[11px] text-gray-400 mb-5">
                  <p className="flex items-start gap-2"><Calendar className="w-3.5 h-3.5 text-dicssa-yellow shrink-0 mt-0.5" /> Próximo hito: <span className="text-gray-300">{p.nextMilestone}</span></p>
                  <p className="font-mono text-gray-600">Actualizado: {p.updated}</p>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Documentos</p>
                  <div className="space-y-1.5">
                    {p.docs.map((d, j) => (
                      <button key={j} className="flex items-center gap-2 text-xs text-gray-300 hover:text-dicssa-yellow transition-colors w-full text-left">
                        <FileText className="w-3.5 h-3.5 text-dicssa-yellow shrink-0" /> {d}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[10px] font-mono text-gray-600 mt-8">
            [Datos de ejemplo — conectar a Supabase con RLS por cliente. Documentos servidos vía Storage firmado.]
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
