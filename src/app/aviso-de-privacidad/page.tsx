import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | DICSSA Infraestructura",
  description:
    "Aviso de Privacidad de Dicssa Infraestructura SA de CV conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
  alternates: { canonical: "/aviso-de-privacidad" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    h: "1. Identidad y domicilio del responsable",
    p: [
      "Dicssa Infraestructura SA de CV (en adelante \"DICSSA\"), con domicilio en Prolongación Paseo de la Reforma Núm. 627-304, Col. Paseo de las Lomas, Delegación Álvaro Obregón, C.P. 01330, Ciudad de México, es responsable del tratamiento y protección de sus datos personales.",
    ],
  },
  {
    h: "2. Datos personales recabados",
    p: [
      "Para las finalidades señaladas en el presente aviso, podemos recabar: nombre, empresa o dependencia, correo electrónico, número telefónico, así como información relativa a los proyectos sobre los que solicita información o cotización.",
    ],
  },
  {
    h: "3. Finalidades del tratamiento",
    p: [
      "Finalidades primarias: atender solicitudes de cotización y contacto, elaborar propuestas técnicas y económicas, dar seguimiento a proyectos y cumplir obligaciones contractuales.",
      "Finalidades secundarias: envío de información comercial, boletines y comunicaciones institucionales. Usted puede oponerse a estas finalidades enviando un correo a contacto@grupodicssa.mx.",
    ],
  },
  {
    h: "4. Derechos ARCO",
    p: [
      "Usted tiene derecho a Acceder, Rectificar y Cancelar sus datos personales, así como a Oponerse a su tratamiento o revocar el consentimiento otorgado. Para ejercer cualquiera de estos derechos, envíe su solicitud al correo contacto@grupodicssa.mx indicando su nombre, los datos involucrados y la descripción clara de su petición.",
    ],
  },
  {
    h: "5. Transferencia de datos",
    p: [
      "DICSSA no transferirá sus datos personales a terceros sin su consentimiento, salvo las excepciones previstas en el artículo 37 de la LFPDPPP o cuando sea requerido por autoridad competente.",
    ],
  },
  {
    h: "6. Uso de cookies",
    p: [
      "Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia y obtener estadísticas de uso. Usted puede configurar sus preferencias mediante el banner de cookies o desde la configuración de su navegador.",
    ],
  },
  {
    h: "7. Cambios al aviso de privacidad",
    p: [
      "El presente aviso puede sufrir modificaciones. Cualquier cambio será publicado en esta misma página. [CONTENIDO DE EJEMPLO — REVISAR CON ASESOR LEGAL ANTES DE PUBLICAR].",
    ],
  },
];

export default function AvisoPrivacidadPage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <Header />

      <div className="pt-28 pb-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Aviso de Privacidad" }]} />
      </div>

      <section className="px-6 pb-24 relative z-10">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">{"// LEGAL"}</span>
          <h1 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-widest mt-2 mb-2">Aviso de Privacidad</h1>
          <div className="w-16 h-1 bg-dicssa-yellow mb-4" />
          <p className="text-[11px] font-mono text-gray-500 mb-10">Última actualización: junio 2026 · Conforme a la LFPDPPP</p>

          <div className="space-y-8 bg-dicssa-dark/60 border border-white/5 rounded-2xl p-6 sm:p-10">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-sm font-sans font-black text-dicssa-yellow uppercase tracking-wider mb-3">{s.h}</h2>
                {s.p.map((para, j) => (
                  <p key={j} className="text-sm text-gray-300 leading-relaxed mb-2">{para}</p>
                ))}
              </div>
            ))}
            <div className="pt-4 border-t border-white/5">
              <p className="text-xs text-gray-500">
                Para cualquier duda sobre este aviso, contacte a:{" "}
                <a href="mailto:contacto@grupodicssa.mx" className="text-dicssa-yellow hover:underline">contacto@grupodicssa.mx</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
