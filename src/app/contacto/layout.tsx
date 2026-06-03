import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | DICSSA Infraestructura — Ciudad de México",
  description:
    "Comunícate con DICSSA Infraestructura SA de CV. Prolongación Paseo de la Reforma 627-304, Col. Paseo de las Lomas, CDMX. Tel: (55) 2589 7307 | contacto@grupodicssa.mx",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | DICSSA Infraestructura",
    description: "Contáctanos para tu proyecto vial. Tel: (55) 2589 7307.",
    url: "https://www.grupodicssa.mx/contacto",
    images: [{ url: "/images/imagen1.png", width: 1200, height: 630 }],
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
