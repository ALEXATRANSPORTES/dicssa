import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clientes Institucionales | DICSSA — SCT, CFE, PEMEX, CAPUFE",
  description:
    "DICSSA Infraestructura ha trabajado con las principales dependencias del gobierno mexicano: SCT, CFE, PEMEX, CAPUFE, INIFED, IMIFE, CAEM, Junta de Caminos del Estado de México y Gobierno de la Ciudad de México.",
  alternates: { canonical: "/clientes" },
  openGraph: {
    title: "Clientes | DICSSA Infraestructura",
    description: "SCT, CFE, PEMEX, CAPUFE y más dependencias confían en DICSSA.",
    url: "https://www.grupodicssa.mx/clientes",
    images: [{ url: "/images/imagen3.png", width: 1200, height: 630 }],
  },
};

export default function ClientesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
