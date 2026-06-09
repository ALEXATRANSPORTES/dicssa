import type { Metadata } from "next";
import { Montserrat, Bebas_Neue, Roboto_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import RoadBackground from "@/components/RoadBackground";
import DustParticles from "@/components/DustParticles";
import ScrollProgress from "@/components/ScrollProgress";
import CookieBanner from "@/components/CookieBanner";

// Configuración de fuentes
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-mono",
  display: "swap",
});

// Metadatos avanzados con SEO Geográfico (GEO SEO) para cobertura nacional en México
export const metadata: Metadata = {
  title: "DICSSA | Construcción de Carreteras e Infraestructura Vial en México",
  description:
    "Dicssa Infraestructura SA de CV es una constructora líder con más de 15 años de experiencia. Especialistas en carreteras, puentes, terracerías, drenaje y pavimentos de asfalto en Puebla, Guanajuato, Querétaro, Estado de México, Veracruz, Guerrero, Morelos, Yucatán y SLP.",
  keywords: [
    "Dicssa Infraestructura",
    "constructora de carreteras México",
    "obra pública México",
    "puentes y viaductos",
    "pavimentación de asfalto",
    "terracerías y drenaje",
    "señalamiento vial",
    "conservación de carreteras",
    "SCT Puebla",
    "SCT Querétaro",
    "SCT Guanajuato",
    "Junta de Caminos Estado de México",
    "licitaciones federales",
    "excavaciones",
  ],
  metadataBase: new URL("https://www.grupodicssa.mx"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "DICSSA | Infraestructura Vial y Obra Pública Nacional",
    description:
      "Construimos el camino del progreso en todo México. 15+ años ofreciendo seguridad, certeza y calidad en proyectos de infraestructura carretera de gran escala.",
    url: "https://www.grupodicssa.mx",
    siteName: "DICSSA Infraestructura",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/imagen1.png",
        width: 1200,
        height: 630,
        alt: "DICSSA Infraestructura Vial - Carreteras y Puentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DICSSA | Infraestructura Vial Nacional",
    description:
      "15+ años construyendo infraestructura vial en México: carreteras, puentes y terracerías.",
    images: ["/images/imagen1.png"],
  },
  other: {
    // Etiquetas de localización y cobertura geográfica avanzadas (GEO SEO)
    "geo.region": "MX-CDMX",
    "geo.placename": "Ciudad de México, México",
    "geo.position": "19.3621;-99.2625",
    ICBM: "19.3621, -99.2625",
    DC: "DICSSA Infraestructura SA de CV",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Esquema de Datos Estructurados JSON-LD Nacional
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentContractor",
    "name": "Dicssa Infraestructura SA de CV",
    "alternateName": "DICSSA",
    "url": "https://www.grupodicssa.mx",
    "logo": "https://www.grupodicssa.mx/logo.png",
    "image": "https://www.grupodicssa.mx/images/imagen1.png",
    "description": "Empresa constructora mexicana sólida con más de 15 años de experiencia en infraestructura vial, puentes, drenaje, concreto asfáltico y edificación a nivel nacional.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Prolongación Paseo de la Reforma Núm. 627-304, Col. Paseo de las Lomas, Delegación Álvaro Obregón",
      "addressLocality": "Ciudad de México",
      "addressRegion": "CDMX",
      "postalCode": "01330",
      "addressCountry": "MX"
    },
    "telephone": [
      "+52-55-2589-7307",
      "+52-55-8913-3785",
      "+52-55-8913-3786"
    ],
    "email": "contacto@grupodicssa.mx",
    "sameAs": [
      "https://www.facebook.com/Dicssa-Infraestructura-SA-de-CV",
      "https://www.instagram.com/dicssa_infraestructura",
      "https://www.linkedin.com/company/dicssa-infraestructura"
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "México" },
      { "@type": "AdministrativeArea", "name": "Puebla" },
      { "@type": "AdministrativeArea", "name": "Guanajuato" },
      { "@type": "AdministrativeArea", "name": "Querétaro" },
      { "@type": "AdministrativeArea", "name": "Estado de México" },
      { "@type": "AdministrativeArea", "name": "Veracruz" },
      { "@type": "AdministrativeArea", "name": "Guerrero" },
      { "@type": "AdministrativeArea", "name": "Morelos" },
      { "@type": "AdministrativeArea", "name": "Yucatán" },
      { "@type": "AdministrativeArea", "name": "San Luis Potosí" },
      { "@type": "AdministrativeArea", "name": "Ciudad de México" }
    ],
    "knowsAbout": [
      "Construcción y modernización de carreteras",
      "Caminos rurales",
      "Viaductos, puentes y deprimidos",
      "Mantenimiento de red carretera",
      "Pavimentación de concreto asfáltico",
      "Terracerías y drenaje",
      "Señalamiento vertical y horizontal",
      "Edificación"
    ]
  };

  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${bebasNeue.variable} ${robotoMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          {/* Barra de progreso de scroll */}
          <ScrollProgress />

          {/* Custom Cursor */}
          <CustomCursor />

          {/* Fondo premium: carretera animada que se ilumina con el mouse + polvo sutil */}
          <RoadBackground />
          <DustParticles />

          {children}

          {/* Banner de consentimiento de cookies (LFPDPPP) */}
          <CookieBanner />
        </SmoothScroll>
      </body>
    </html>
  );
}
