import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Construcción Vial | DICSSA Infraestructura",
  description:
    "DICSSA ofrece 12 especialidades de obra civil: carreteras, puentes, viaductos, fresado, pavimentación, terracerías, drenaje, señalamiento vial y edificación en toda la República Mexicana.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios | DICSSA Infraestructura",
    description: "12 especialidades de construcción vial y obra pública en México.",
    url: "https://www.grupodicssa.mx/servicios",
    images: [{ url: "/images/imagen2.jpeg", width: 1200, height: 630 }],
  },
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
