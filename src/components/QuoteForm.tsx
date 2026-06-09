"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Loader2, Send } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   Esquema de validación (Zod) — validación en tiempo real
─────────────────────────────────────────────────────────── */
const schema = z.object({
  // Paso 1 — Contacto
  nombre: z.string().min(3, "Ingrese su nombre completo"),
  empresa: z.string().min(2, "Indique su empresa o dependencia"),
  email: z.string().email("Correo electrónico no válido"),
  telefono: z.string().min(10, "Teléfono a 10 dígitos").regex(/^[0-9+\-\s()]+$/, "Solo números"),
  // Paso 2 — Proyecto
  tipoProyecto: z.string().min(1, "Seleccione un tipo de obra"),
  presupuesto: z.string().min(1, "Seleccione un rango"),
  // Paso 3 — Detalles
  estado: z.string().min(2, "Indique el estado"),
  plazo: z.string().min(1, "Seleccione un plazo"),
  descripcion: z.string().min(20, "Describa su proyecto (mín. 20 caracteres)"),
  privacidad: z.literal(true, { message: "Debe aceptar el aviso de privacidad" }),
});

type QuoteData = z.infer<typeof schema>;

const tiposProyecto = [
  "Construcción de carreteras", "Caminos rurales", "Viaductos / puentes / PSV",
  "Fresado y encarpetado", "Pavimentación de concreto asfáltico", "Terracerías y drenaje",
  "Señalamiento vial", "Distribuidores viales", "Mantenimiento de red carretera",
  "Obra hidráulica", "Edificación", "Otro / Consultoría",
];
const presupuestos = ["< $5 MDP", "$5 – $20 MDP", "$20 – $50 MDP", "$50 – $100 MDP", "> $100 MDP", "Por definir"];
const plazos = ["Inmediato (< 1 mes)", "Corto (1–3 meses)", "Medio (3–6 meses)", "Largo (> 6 meses)", "Por definir"];

const steps = [
  { id: 0, label: "Contacto", fields: ["nombre", "empresa", "email", "telefono"] as const },
  { id: 1, label: "Proyecto", fields: ["tipoProyecto", "presupuesto"] as const },
  { id: 2, label: "Detalles", fields: ["estado", "plazo", "descripcion", "privacidad"] as const },
  { id: 3, label: "Resumen", fields: [] as const },
];

const inputCls =
  "w-full bg-dicssa-dark border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-dicssa-yellow focus:ring-1 focus:ring-dicssa-yellow/50 outline-none transition-all";
const labelCls = "block text-[11px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-2";
const errCls = "text-[11px] text-red-400 mt-1.5 font-sans";

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);

  const {
    register, handleSubmit, trigger, watch, formState: { errors, isSubmitting },
  } = useForm<QuoteData>({ resolver: zodResolver(schema), mode: "onChange" });

  const values = watch();

  const next = async () => {
    const valid = await trigger(steps[step].fields as unknown as (keyof QuoteData)[]);
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (data: QuoteData) => {
    // TODO(backend): POST a /api/cotizacion → CRM / correo / Supabase.
    // Aquí se integraría reCAPTCHA v3 y rate limiting del lado del servidor.
    await new Promise((r) => setTimeout(r, 1200)); // simulación de envío
    console.log("Cotización enviada (simulada):", data);
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-dicssa-dark border border-dicssa-yellow/30 rounded-2xl p-10 text-center"
      >
        <div className="w-16 h-16 bg-dicssa-yellow rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-2xl font-display font-black text-white uppercase tracking-widest mb-3">Solicitud Recibida</h3>
        <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
          Gracias, <span className="text-dicssa-yellow font-semibold">{values.nombre}</span>. Nuestro equipo de
          ingeniería revisará su proyecto y le responderá en menos de 24 horas hábiles al correo{" "}
          <span className="text-white">{values.email}</span>.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-dicssa-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
      {/* Stepper */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                  i < step ? "bg-dicssa-yellow text-black" : i === step ? "bg-dicssa-yellow text-black ring-4 ring-dicssa-yellow/20" : "bg-dicssa-dark-gray text-gray-500 border border-white/10"
                }`}
              >
                {i < step ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span className={`text-[9px] font-mono uppercase tracking-wider mt-2 hidden sm:block ${i === step ? "text-dicssa-yellow" : "text-gray-500"}`}>
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`h-0.5 flex-1 mx-2 transition-all ${i < step ? "bg-dicssa-yellow" : "bg-white/10"}`} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            {/* PASO 1 — CONTACTO */}
            {step === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Nombre completo *</label>
                  <input {...register("nombre")} className={inputCls} placeholder="Ing. Juan Pérez" />
                  {errors.nombre && <p className={errCls}>{errors.nombre.message}</p>}
                </div>
                <div>
                  <label className={labelCls}>Empresa / Dependencia *</label>
                  <input {...register("empresa")} className={inputCls} placeholder="Gobierno del Estado..." />
                  {errors.empresa && <p className={errCls}>{errors.empresa.message}</p>}
                </div>
                <div>
                  <label className={labelCls}>Correo electrónico *</label>
                  <input {...register("email")} className={inputCls} placeholder="contacto@empresa.mx" />
                  {errors.email && <p className={errCls}>{errors.email.message}</p>}
                </div>
                <div>
                  <label className={labelCls}>Teléfono *</label>
                  <input {...register("telefono")} className={inputCls} placeholder="(55) 1234 5678" />
                  {errors.telefono && <p className={errCls}>{errors.telefono.message}</p>}
                </div>
              </div>
            )}

            {/* PASO 2 — PROYECTO */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label className={labelCls}>Tipo de obra *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tiposProyecto.map((t) => (
                      <label key={t} className={`flex items-center gap-2.5 px-4 py-3 rounded-lg border cursor-pointer text-xs transition-all ${values.tipoProyecto === t ? "border-dicssa-yellow bg-dicssa-yellow/10 text-white" : "border-white/10 text-gray-400 hover:border-white/25"}`}>
                        <input type="radio" value={t} {...register("tipoProyecto")} className="accent-dicssa-yellow" />
                        {t}
                      </label>
                    ))}
                  </div>
                  {errors.tipoProyecto && <p className={errCls}>{errors.tipoProyecto.message}</p>}
                </div>
                <div>
                  <label className={labelCls}>Presupuesto estimado *</label>
                  <div className="flex flex-wrap gap-2">
                    {presupuestos.map((p) => (
                      <label key={p} className={`px-4 py-2.5 rounded-lg border cursor-pointer text-xs font-mono transition-all ${values.presupuesto === p ? "border-dicssa-yellow bg-dicssa-yellow/10 text-white" : "border-white/10 text-gray-400 hover:border-white/25"}`}>
                        <input type="radio" value={p} {...register("presupuesto")} className="hidden" />
                        {p}
                      </label>
                    ))}
                  </div>
                  {errors.presupuesto && <p className={errCls}>{errors.presupuesto.message}</p>}
                </div>
              </div>
            )}

            {/* PASO 3 — DETALLES */}
            {step === 2 && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Estado / Ubicación *</label>
                    <input {...register("estado")} className={inputCls} placeholder="Puebla, Querétaro..." />
                    {errors.estado && <p className={errCls}>{errors.estado.message}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>Plazo deseado *</label>
                    <select {...register("plazo")} className={inputCls}>
                      <option value="">Seleccione...</option>
                      {plazos.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                    {errors.plazo && <p className={errCls}>{errors.plazo.message}</p>}
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Descripción del proyecto *</label>
                  <textarea {...register("descripcion")} rows={4} className={inputCls} placeholder="Describa el alcance, kilometraje, especificaciones técnicas..." />
                  {errors.descripcion && <p className={errCls}>{errors.descripcion.message}</p>}
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" {...register("privacidad")} className="mt-0.5 accent-dicssa-yellow w-4 h-4" />
                  <span className="text-[11px] text-gray-400 leading-relaxed">
                    Acepto el <a href="/aviso-de-privacidad" target="_blank" className="text-dicssa-yellow underline">Aviso de Privacidad</a> y el tratamiento de mis datos conforme a la LFPDPPP.
                  </span>
                </label>
                {errors.privacidad && <p className={errCls}>{errors.privacidad.message}</p>}
              </div>
            )}

            {/* PASO 4 — RESUMEN */}
            {step === 3 && (
              <div className="space-y-3">
                <h3 className="text-sm font-display font-black uppercase tracking-widest text-dicssa-yellow mb-4">Revise su solicitud</h3>
                {[
                  ["Nombre", values.nombre], ["Empresa", values.empresa], ["Correo", values.email],
                  ["Teléfono", values.telefono], ["Tipo de obra", values.tipoProyecto], ["Presupuesto", values.presupuesto],
                  ["Estado", values.estado], ["Plazo", values.plazo],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-2 border-b border-white/5 text-xs">
                    <span className="text-gray-500 font-mono uppercase tracking-wider">{k}</span>
                    <span className="text-white text-right font-semibold">{v || "—"}</span>
                  </div>
                ))}
                <div className="py-2 text-xs">
                  <span className="text-gray-500 font-mono uppercase tracking-wider block mb-1">Descripción</span>
                  <span className="text-gray-300">{values.descripcion}</span>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navegación */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Atrás
          </button>

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="group inline-flex items-center gap-1.5 px-7 py-3 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black text-xs font-black uppercase tracking-widest rounded-lg transition-all hover:scale-[1.03]"
            >
              Siguiente <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-7 py-3 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black text-xs font-black uppercase tracking-widest rounded-lg transition-all hover:scale-[1.03] disabled:opacity-60"
            >
              {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</> : <><Send className="w-4 h-4" /> Enviar Solicitud</>}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
