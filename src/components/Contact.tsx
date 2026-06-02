"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle } from "lucide-react";
import ProjectMap from "./ProjectMap";
import { useState } from "react";

// Esquema de validación con Zod
const contactSchema = z.object({
  nombre: z.string().min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
  correo: z.string().email({ message: "Ingresa un correo electrónico válido." }),
  telefono: z.string().regex(/^\d{10}$/, { message: "El teléfono debe tener exactamente 10 dígitos numéricos." }),
  asunto: z.string().min(3, { message: "El asunto es requerido." }),
  mensaje: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simular envío de datos a base de datos o correo
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Datos de contacto:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contacto"
      className="relative py-24 bg-black select-none border-b border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            {"// CANALES DE ATENCIÓN"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4">
            PÓNGASE EN CONTACTO
          </h2>
          <div className="w-16 h-1 bg-dicssa-yellow mx-auto"></div>
        </motion.div>

        {/* Layout en Dos Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda: Info de contacto y Formulario (7 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Tarjetas de contacto corporativo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-dicssa-dark-gray/30 border border-white/5 rounded-lg flex items-start space-x-4">
                <Phone className="w-5 h-5 text-dicssa-yellow shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-sans font-black text-white uppercase tracking-wider">Teléfonos</span>
                  <a href="tel:5525897307" className="text-xs text-gray-400 font-mono mt-1 hover:text-dicssa-yellow transition-colors">(55) 2589 7307</a>
                  <a href="tel:5589133785" className="text-xs text-gray-400 font-mono hover:text-dicssa-yellow transition-colors">(55) 8913 3785</a>
                </div>
              </div>

              <div className="p-5 bg-dicssa-dark-gray/30 border border-white/5 rounded-lg flex items-start space-x-4">
                <Mail className="w-5 h-5 text-dicssa-yellow shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-sans font-black text-white uppercase tracking-wider">Correo Electrónico</span>
                  <a href="mailto:contacto@grupodicssa.mx" className="text-xs text-gray-400 font-mono mt-1 hover:text-dicssa-yellow transition-colors">contacto@grupodicssa.mx</a>
                  <span className="text-[9px] text-gray-500 font-sans mt-0.5">Respuestas en menos de 24 hrs.</span>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto Vial-Glow */}
            <div className="p-8 bg-dicssa-dark-gray/25 border border-white/5 rounded-lg relative overflow-hidden">
              {/* Señalamiento de peligro decorativo amarillo/negro en la esquina */}
              <div className="absolute top-0 right-0 w-16 h-1.5 bg-gradient-to-r from-dicssa-yellow via-black to-dicssa-yellow" />

              <h3 className="text-sm font-sans font-black text-white uppercase tracking-widest mb-6">
                ENVIAR PROPUESTA / SOLICITUD de cotización
              </h3>

              {submitted ? (
                <motion.div
                  className="bg-dicssa-yellow/10 border border-dicssa-yellow/30 p-6 rounded text-center flex flex-col items-center justify-center space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <CheckCircle className="w-10 h-10 text-dicssa-yellow animate-bounce" />
                  <h4 className="text-sm font-sans font-black text-white uppercase tracking-wider">¡Envío Exitoso!</h4>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                    Hemos recibido sus datos de contacto. Un ingeniero de nuestro departamento de proyectos viales se comunicará a la brevedad.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Nombre */}
                  <div className="flex flex-col">
                    <label className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      {...register("nombre")}
                      className={`px-4 py-3 bg-black border text-xs text-white rounded font-sans focus:outline-none focus:border-dicssa-yellow focus:shadow-[0_0_8px_rgba(245,197,24,0.35)] transition-all ${
                        errors.nombre ? "border-red-500/50" : "border-white/10"
                      }`}
                      placeholder="Ing. Carlos Mendoza"
                    />
                    {errors.nombre && (
                      <span className="text-[10px] text-red-500 mt-1 font-mono">{errors.nombre.message}</span>
                    )}
                  </div>

                  {/* Correo y Teléfono en fila */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                        Correo Institucional
                      </label>
                      <input
                        type="email"
                        {...register("correo")}
                        className={`px-4 py-3 bg-black border text-xs text-white rounded font-sans focus:outline-none focus:border-dicssa-yellow focus:shadow-[0_0_8px_rgba(245,197,24,0.35)] transition-all ${
                          errors.correo ? "border-red-500/50" : "border-white/10"
                        }`}
                        placeholder="carlos.mendoza@empresa.mx"
                      />
                      {errors.correo && (
                        <span className="text-[10px] text-red-500 mt-1 font-mono">{errors.correo.message}</span>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                        Teléfono (10 dígitos)
                      </label>
                      <input
                        type="text"
                        {...register("telefono")}
                        className={`px-4 py-3 bg-black border text-xs text-white rounded font-mono focus:outline-none focus:border-dicssa-yellow focus:shadow-[0_0_8px_rgba(245,197,24,0.35)] transition-all ${
                          errors.telefono ? "border-red-500/50" : "border-white/10"
                        }`}
                        placeholder="5512345678"
                      />
                      {errors.telefono && (
                        <span className="text-[10px] text-red-500 mt-1 font-mono">{errors.telefono.message}</span>
                      )}
                    </div>
                  </div>

                  {/* Asunto */}
                  <div className="flex flex-col">
                    <label className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      Asunto de Consulta
                    </label>
                    <input
                      type="text"
                      {...register("asunto")}
                      className={`px-4 py-3 bg-black border text-xs text-white rounded font-sans focus:outline-none focus:border-dicssa-yellow focus:shadow-[0_0_8px_rgba(245,197,24,0.35)] transition-all ${
                        errors.asunto ? "border-red-500/50" : "border-white/10"
                      }`}
                      placeholder="Licitación / Bacheo / Pavimentación"
                    />
                    {errors.asunto && (
                      <span className="text-[10px] text-red-500 mt-1 font-mono">{errors.asunto.message}</span>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div className="flex flex-col">
                    <label className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      Especificaciones técnicas del Proyecto
                    </label>
                    <textarea
                      rows={4}
                      {...register("mensaje")}
                      className={`px-4 py-3 bg-black border text-xs text-white rounded font-sans focus:outline-none focus:border-dicssa-yellow focus:shadow-[0_0_8px_rgba(245,197,24,0.35)] transition-all resize-none ${
                        errors.mensaje ? "border-red-500/50" : "border-white/10"
                      }`}
                      placeholder="Favor de detallar tramo vial, estado de la República, requerimientos de fresado y carpeta..."
                    />
                    {errors.mensaje && (
                      <span className="text-[10px] text-red-500 mt-1 font-mono">{errors.mensaje.message}</span>
                    )}
                  </div>

                  {/* Botón de Envío */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-dicssa-yellow hover:bg-dicssa-yellow-bright text-black font-sans font-black text-xs uppercase tracking-widest rounded flex items-center justify-center space-x-2 transition-all active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Proyecto</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Columna Derecha: Mapa Interactivo de Proyectos (5 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-5 bg-dicssa-dark-gray/30 border border-white/5 rounded-lg flex items-start space-x-4">
              <MapPin className="w-5 h-5 text-dicssa-yellow shrink-0 mt-1" />
              <div className="flex flex-col">
                <span className="text-[10px] font-sans font-black text-white uppercase tracking-wider">Dirección Fiscal</span>
                <p className="text-xs text-gray-400 leading-relaxed font-mono mt-1">
                  Prolongación Paseo de la Reforma Núm. 627-304, Col. Paseo de las Lomas, Delegación Álvaro Obregón CP 01330, Ciudad de México, CDMX
                </p>
              </div>
            </div>

            {/* Mapa Interactivo Leaflet */}
            <div className="w-full relative h-[450px]">
              <ProjectMap />
            </div>

            <div className="text-center md:text-left flex items-start space-x-2.5 text-[9px] text-gray-500 font-mono leading-relaxed px-2">
              <HelpCircle className="w-4 h-4 text-dicssa-yellow shrink-0" />
              <span>
                El mapa muestra la central corporativa en CDMX e hilos viales amarillos conectados a las posiciones aproximadas de nuestras obras viales auditadas. Haga clic en los marcadores para ver detalles y contrato.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
