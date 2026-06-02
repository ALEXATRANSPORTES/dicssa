"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";

// Estructura de proyectos
interface ProjectLocation {
  id: number;
  title: string;
  contract: string;
  state: string;
  coords: [number, number];
  description: string;
}

const projects: ProjectLocation[] = [
  {
    id: 1,
    title: "Libramiento Serdán - Centro SCT Puebla",
    contract: "2015-22-CE-A-028-W-00-2015",
    state: "Puebla",
    coords: [18.9902, -97.4475],
    description: "Construcción de los entronques del libramiento Serdán a nivel en Km. 0+000 y Km. 5+897; y a desnivel Km. 5+488. Terracerías, drenaje y señalamiento.",
  },
  {
    id: 2,
    title: "PSV Paseo del Bajío - Centro SCT Guanajuato",
    contract: "2016-11-CE-A-092-W-00-2016",
    state: "Guanajuato",
    coords: [20.5218, -100.8140],
    description: "Construcción del Paso Superior Vehicular Paseo del Bajío en el Km 50+900 de la Carretera Federal no. 45, municipio de Celaya.",
  },
  {
    id: 3,
    title: "Carretera Estatal 100 - Centro SCT Querétaro",
    contract: "2015-22-CE-A-028-W-00-2015",
    state: "Querétaro",
    coords: [20.7381, -99.9403],
    description: "Ampliación de la carretera estatal 100 a la Sierra Gorda, tramo Bernal - Higuerillas. Terracerías, drenaje, concreto asfáltico y señalamiento.",
  },
  {
    id: 4,
    title: "Carr. México - Pachuca - Centro SCT México",
    contract: "2019-15-CB-A-019-W-00-2019",
    state: "Estado de México",
    coords: [19.6017, -99.0506],
    description: "Trabajos de conservación periódica mediante Fresado y Carpeta de 5.0 Cm. de espesor, tramo Ecatepec Límite Edos. Méx/Hgo.",
  },
  {
    id: 5,
    title: "Obra Isla - Estado de Veracruz",
    contract: "OBRA ISLA",
    state: "Veracruz",
    coords: [18.0267, -95.5278],
    description: "Supervisión, seguimiento y verificación de calidad de las obras de conservación de carreteras en la zona.",
  },
  {
    id: 6,
    title: "Barra Vieja - Gobierno de Guerrero",
    contract: "BARRA VIEJA",
    state: "Guerrero",
    coords: [16.7324, -99.7214],
    description: "Pavimentación de accesos a la playa en Barra Vieja, Acapulco de Juárez, impulsando el desarrollo vial y turístico de la región.",
  },
  {
    id: 7,
    title: "Camino San José del Rincón - Centro SCT México",
    contract: "3-0-CF-A-667-W-0-3",
    state: "Estado de México",
    coords: [19.6384, -100.1264],
    description: "Modernización mediante ampliación de terracerías, drenaje, pavimentación y señalamiento del camino: San José del Rincón - Concepción La Venta.",
  },
  {
    id: 8,
    title: "Carr. Chamapa-Lechería - Centro SCT México",
    contract: "2015-22-CE-A-028-W-00-2015",
    state: "Estado de México",
    coords: [19.4975, -99.2831],
    description: "Tratamiento superficial del Km 0+000 al Km 1+300 y zona de Plaza de Cobro Nopala y Atizapán, segunda etapa.",
  },
  {
    id: 9,
    title: "Camino Chalco-Tláhuac - Junta de Caminos Edoméx",
    contract: "SMOV-JC-CTR-21-APAD-009-C",
    state: "Estado de México",
    coords: [19.2618, -98.9248],
    description: "Rehabilitación, reconstrucción y modernización del camino Chalco-San Pedro Tláhuac, del Km 0+000 al Km 7+800.",
  },
  {
    id: 10,
    title: "Carr. La Pera - Cuautla - Centro SCT Morelos",
    contract: "2021-17-CE-D-020-W-00-2021",
    state: "Morelos",
    coords: [18.8958, -99.0621],
    description: "Trabajos de ampliación y modernización: terracerías, drenaje, estructuras, concreto asfáltico y tuneleo del tramo Km. 17+500 al Km. 20+700.",
  },
  {
    id: 11,
    title: "Obras Mexibus IV - Junta de Caminos Edoméx",
    contract: "SCEM-JC-CTR-19-APAD-048-C",
    state: "Estado de México",
    coords: [19.5752, -99.0345],
    description: "Obras de mejoramiento vial para la puesta en operación y optimización de carriles del Mexibus IV.",
  },
  {
    id: 12,
    title: "Tren Maya Tramo Calkiní-Izamal - Yucatán",
    contract: "TREN MAYA",
    state: "Yucatán",
    coords: [20.9314, -89.0178],
    description: "Construcción de terracerías al Tren Maya en el tramo Calkiní - Izamal, una de las obras ferroviarias más importantes del país.",
  },
  {
    id: 13,
    title: "Entronque LOGISTIK - Centro SCT San Luis Potosí",
    contract: "2018-24-CE-A-039-W-00-2018",
    state: "San Luis Potosí",
    coords: [22.0361, -100.7328],
    description: "Modernización Segunda Etapa del entronque LOGISTIK. Estructura del PSV rama 10, pavimentación de concreto asfáltico y alumbrado.",
  },
  {
    id: 14,
    title: "Mantenimiento Vialidades Primarias - Gobierno CDMX",
    contract: "DGOIV-AD-L-1-274-20",
    state: "Ciudad de México",
    coords: [19.4326, -99.1332],
    description: "Mantenimiento correctivo de la superficie de rodamiento a base de mapeo en vialidades primarias de la Ciudad de México. Paquete 2.",
  },
  {
    id: 15,
    title: "Autopista Mex-45D Entronque - Centro SCT Guanajuato",
    contract: "2017-11-CE-A-047-W-00-2017",
    state: "Guanajuato",
    coords: [20.5422, -100.6861],
    description: "Paso vehicular y gasas para entronque tipo trébol Km 12+000 sobre Autopista Mex-45D Querétaro - Irapuato. Estructura de 2 claros (40 y 46m) con trabes NU.",
  },
  {
    id: 16,
    title: "Entronque La Fragua - Centro SCT Puebla",
    contract: "2016-21-CE-A-518-W-00-2016",
    state: "Puebla",
    coords: [19.0182, -98.1189],
    description: "Modernización del entronque a nivel La Fragua. Estructuras, concreto hidráulico, ramas de incorporación, terracerías y señalamiento.",
  },
  {
    id: 17,
    title: "Distribuidor Blvd Aeropuerto - Centro SCT México",
    contract: "2014-15-CE-A-025-W-00-2014",
    state: "Estado de México",
    coords: [19.3094, -99.5701],
    description: "Construcción de los Ejes 110, 120, 210, 220 y 230 del Distribuidor Vial cruce Boulevard Aeropuerto y Carretera Toluca - Naucalpan.",
  },
  {
    id: 18,
    title: "Rehabilitación Av. Juárez - Centro SCT México",
    contract: "3-0-CF-A-606-W-0-3",
    state: "Estado de México",
    coords: [19.9839, -99.1672],
    description: "Rehabilitación de la Av. Juárez A entronque a Av. Industrial, municipio de Apaxco. Drenaje, pavimentación y señalamiento.",
  }
];

const cdmxCoords: [number, number] = [19.3621, -99.2625]; // Oficina corporativa en Lomas de Santa Fe

export default function MapInner() {
  const [pulseMarkerIcon, setPulseMarkerIcon] = useState<L.DivIcon | null>(null);
  const [hqIcon, setHqIcon] = useState<L.DivIcon | null>(null);

  useEffect(() => {
    // Configurar iconos personalizados sólo en el cliente
    setPulseMarkerIcon(
      L.divIcon({
        className: "custom-marker-icon",
        html: `
          <div class="relative flex items-center justify-center">
            <div class="absolute w-5 h-5 bg-dicssa-yellow rounded-full animate-ping opacity-60"></div>
            <div class="relative w-3 h-3 bg-dicssa-yellow rounded-full border border-black shadow-md"></div>
          </div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      })
    );

    setHqIcon(
      L.divIcon({
        className: "hq-marker-icon",
        html: `
          <div class="relative flex items-center justify-center">
            <div class="absolute w-8 h-8 bg-white rounded-full animate-pulse opacity-20"></div>
            <div class="relative w-4 h-4 bg-white rounded-full border-2 border-dicssa-yellow shadow-lg flex items-center justify-center">
              <div class="w-1.5 h-1.5 bg-black rounded-full"></div>
            </div>
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      })
    );
  }, []);

  if (!pulseMarkerIcon || !hqIcon) return null;

  return (
    <MapContainer
      center={[21.0, -99.5]} // Centrado en México
      zoom={5.8}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      {/* Capa de mapa oscuro de CartoDB */}
      <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {/* Marcador de Oficina DICSSA */}
      <Marker position={cdmxCoords} icon={hqIcon}>
        <Popup>
          <div className="p-1 font-sans text-xs">
            <h4 className="font-extrabold uppercase text-white mb-0.5">OFICINA CENTRAL DICSSA</h4>
            <p className="text-dicssa-yellow font-semibold mb-1">Álvaro Obregón, CDMX</p>
            <p className="text-[10px] text-gray-400">Paseo de la Reforma 627, Paseo de las Lomas</p>
          </div>
        </Popup>
      </Marker>

      {/* Marcadores e Hilos de Conexión de Proyectos */}
      {projects.map((proj) => (
        <div key={proj.id}>
          {/* Conexión vial animada */}
          <Polyline
            positions={[cdmxCoords, proj.coords]}
            pathOptions={{
              color: "#F5C518",
              weight: 1,
              opacity: 0.25,
              dashArray: "4, 6",
            }}
          />
          <Marker position={proj.coords} icon={pulseMarkerIcon}>
            <Popup>
              <div className="p-1 font-sans text-xs max-w-[220px]">
                <span className="text-[9px] uppercase tracking-wider font-mono text-dicssa-yellow bg-black/40 px-1.5 py-0.5 rounded">
                  {proj.contract}
                </span>
                <h4 className="font-bold text-white mt-1.5 mb-1 leading-snug">{proj.title}</h4>
                <p className="text-[10px] text-gray-300 leading-normal">{proj.description}</p>
                <div className="mt-2 flex justify-between items-center text-[9px] text-gray-500 font-bold border-t border-white/10 pt-1.5">
                  <span>ESTADO:</span>
                  <span className="text-white">{proj.state.toUpperCase()}</span>
                </div>
              </div>
            </Popup>
          </Marker>
        </div>
      ))}
    </MapContainer>
  );
}
