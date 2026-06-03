import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio de Obras | DICSSA — 21+ Proyectos Nacionales",
  description:
    "21+ obras ejecutadas por DICSSA Infraestructura para SCT, Junta de Caminos, Gobierno de CDMX, PEMEX y CFE en Puebla, Guanajuato, Querétaro, Estado de México, Yucatán, Morelos, Guerrero, Veracruz y SLP.",
  alternates: { canonical: "/proyectos" },
  openGraph: {
    title: "Portafolio de Obras | DICSSA",
    description: "21+ proyectos de infraestructura vial en 11 estados de México.",
    url: "https://www.grupodicssa.mx/proyectos",
    images: [{ url: "/images/imagen2.jpeg", width: 1200, height: 630 }],
  },
};

export default function ProyectosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
