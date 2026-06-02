"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Terminal, Calendar } from "lucide-react";

interface Project {
  id: number;
  title: string;
  contract: string;
  state: string;
  client: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Construcción de Entronques Libramiento Serdán",
    contract: "2015-22-CE-A-028-W-00-2015",
    state: "Puebla",
    client: "CENTRO SCT PUEBLA",
    description: "Entronques a nivel Km 0+000 y Km 5+897, y desnivel Km 5+488. Terracerías, obras de drenaje, pavimentos, estructuras y señalamiento.",
  },
  {
    id: 2,
    title: "PSV Paseo del Bajío en Celaya",
    contract: "2016-11-CE-A-092-W-00-2016",
    state: "Guanajuato",
    client: "CENTRO SCT GUANAJUATO",
    description: "Paso Superior Vehicular en el Km 50+900 de la Carretera Federal no. 45, municipio de Celaya.",
  },
  {
    id: 3,
    title: "Ampliación Carretera Estatal 100 Bernal-Higuerillas",
    contract: "2015-22-CE-A-028-W-00-2015",
    state: "Querétaro",
    client: "CENTRO SCT QUERÉTARO",
    description: "Ampliación de corona de 12 m, terracerías, drenaje, concreto asfáltico del Km 67+000 al Km 79+000, municipio de Cadereyta.",
  },
  {
    id: 4,
    title: "Fresado y Carpeta Carretera México-Pachuca",
    contract: "2019-15-CB-A-019-W-00-2019",
    state: "Estado de México",
    client: "CENTRO SCT MÉXICO",
    description: "Conservación periódica con carpeta de 5 cm de espesor del Km 43+000 al Km 49+300, meta de 6.3 Km.",
  },
  {
    id: 5,
    title: "Supervisión de Obras de Conservación Isla",
    contract: "OBRA ISLA",
    state: "Veracruz",
    client: "ESTADO DE VERACRUZ",
    description: "Supervisión técnica, control de obra y verificación de calidad física de pavimentación.",
  },
  {
    id: 6,
    title: "Pavimentación Accesos a Playa Barra Vieja",
    contract: "GOBIERNO GUERRERO",
    state: "Guerrero",
    client: "GOBIERNO DEL ESTADO DE GUERRERO",
    description: "Pavimentación e infraestructura vial en los accesos de la playa turística de Barra Vieja, Acapulco.",
  },
  {
    id: 7,
    title: "Ampliación Camino San José del Rincón",
    contract: "3-0-CF-A-667-W-0-3",
    state: "Estado de México",
    client: "CENTRO SCT MÉXICO",
    description: "Ampliación de terracerías, obras de drenaje, pavimentación y señalamiento del Km. 2+500 al 4+500.",
  },
  {
    id: 8,
    title: "Tratamiento Superficial Carretera Chamapa-Lechería",
    contract: "2015-22-CE-A-028-W-00-2015",
    state: "Estado de México",
    client: "CENTRO SCT MÉXICO",
    description: "Mantenimiento superficial y adecuación de la plaza de cobro Nopala y Atizapán, segunda etapa.",
  },
  {
    id: 9,
    title: "Modernización Camino Chalco-San Pedro Tláhuac",
    contract: "SMOV-JC-CTR-21-APAD-009-C",
    state: "Estado de México",
    client: "JUNTA DE CAMINOS DEL ESTADO DE MÉXICO",
    description: "Rehabilitación, reconstrucción y modernización del Km 0+000 al Km 7+800.",
  },
  {
    id: 10,
    title: "Ampliación Carretera La Pera - Cuautla",
    contract: "2021-17-CE-D-020-W-00-2021",
    state: "Morelos",
    client: "CENTRO SCT MORELOS",
    description: "Modernización con terracerías, drenaje, concreto asfáltico y obras de tuneleo del Km 17+500 al Km 20+700 Cuerpo B.",
  },
  {
    id: 11,
    title: "Mejoramiento Vial Mexibus IV",
    contract: "SCEM-JC-CTR-19-APAD-048-C",
    state: "Estado de México",
    client: "JUNTA DE CAMINOS DEL ESTADO DE MÉXICO",
    description: "Adecuación y mejoramiento vial de carriles confinados para el Mexibus IV.",
  },
  {
    id: 12,
    title: "Terracerías Tren Maya Tramo Calkiní-Izamal",
    contract: "TREN MAYA",
    state: "Yucatán",
    client: "ESTADO DE YUCATÁN",
    description: "Construcción y nivelación de terracerías ferroviarias para el megaproyecto federal del Tren Maya.",
  },
  {
    id: 13,
    title: "Reencarpetado Paseo Tollocan",
    contract: "TOLLOCAN-TOLUCA",
    state: "Estado de México",
    client: "ESTADO DE MÉXICO",
    description: "Reencarpetado correctivo de la avenida principal Paseo Tollocan en Toluca.",
  },
  {
    id: 14,
    title: "Conservación Rutinaria Toluca - Naucalpan",
    contract: "TOLUCA-NAUCALPAN",
    state: "Estado de México",
    client: "ESTADO DE MÉXICO",
    description: "Servicios de mantenimiento y conservación rutinaria asfáltica.",
  },
  {
    id: 15,
    title: "Pavimentación de Vialidades Huixquilucan",
    contract: "VIALIDADES HUIX",
    state: "Estado de México",
    client: "ESTADO DE MÉXICO",
    description: "Bacheo y pavimentación con concreto asfáltico en vialidades del municipio de Huixquilucan.",
  },
  {
    id: 16,
    title: "Mantenimiento Vialidades Principales CDMX",
    contract: "DGOIV-AD-L-1-274-20",
    state: "Ciudad de México",
    client: "GOBIERNO DE CDMX",
    description: "Trabajos correctivos en rodaduras a base de mapeo en vialidades primarias del Paquete 2.",
  },
  {
    id: 17,
    title: "Entronque Autopista Mex-45D Querétaro-Irapuato",
    contract: "2017-11-CE-A-047-W-00-2017",
    state: "Guanajuato",
    client: "CENTRO SCT GUANAJUATO",
    description: "Paso vehicular tipo trébol Km 12+000. Claros de 40 y 46m con trabes NU y AASHTO VI. Terracerías, muros mecánicamente estabilizados y obras inducidas.",
  },
  {
    id: 18,
    title: "Modernización Entronque La Fragua",
    contract: "2016-21-CE-A-518-W-00-2016",
    state: "Puebla",
    client: "CENTRO SCT PUEBLA",
    description: "Entronque a desnivel Km 24+940 con estructuras, concreto hidráulico y ramas de incorporación.",
  },
  {
    id: 19,
    title: "Entronque LOGISTIK Segunda Etapa",
    contract: "2018-24-CE-A-039-W-00-2018",
    state: "San Luis Potosí",
    client: "CENTRO SCT SAN LUIS POTOSÍ",
    description: "Construcción de estructura PSV rama 10, concreto asfáltico y alumbrado en Villa de Zaragoza.",
  },
  {
    id: 20,
    title: "Distribuidor Blvd Aeropuerto y Toluca-Naucalpan",
    contract: "2014-15-CE-A-025-W-00-2014",
    state: "Estado de México",
    client: "CENTRO SCT MÉXICO",
    description: "Construcción de Ejes viales 110, 120, 210, 220 y 230 en la intersección Boulevard Aeropuerto, primera etapa.",
  },
  {
    id: 21,
    title: "Rehabilitación Av. Juárez a Entronque Apaxco",
    contract: "3-0-CF-A-606-W-0-3",
    state: "Estado de México",
    client: "CENTRO SCT MÉXICO",
    description: "Nivelación de terracerías, drenaje y señalamiento en Colonia Centro y La Estación.",
  }
];

const states = [
  "Todos",
  "Estado de México",
  "Puebla",
  "Guanajuato",
  "Querétaro",
  "San Luis Potosí",
  "Ciudad de México",
  "Yucatán",
  "Guerrero",
  "Morelos",
];

// Componente para simular efecto terminal typewriter al hover
function TerminalCode({ code, active }: { code: string; active: boolean }) {
  if (!active) {
    return <span className="font-mono text-[10px] text-dicssa-yellow/60">{code.substring(0, 10)}...</span>;
  }

  return (
    <motion.span
      className="font-mono text-[10px] text-dicssa-yellow flex items-center"
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      transition={{ duration: 0.4 }}
    >
      <Terminal className="w-3.5 h-3.5 mr-1 text-dicssa-yellow inline" />
      {code}
    </motion.span>
  );
}

export default function Portfolio() {
  const [selectedState, setSelectedState] = useState("Todos");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedState === "Todos") return true;
    return project.state === selectedState;
  });

  return (
    <section
      id="portafolio"
      className="relative min-h-screen py-24 bg-black overflow-hidden select-none border-b border-white/5"
    >
      {/* Imagen 2 de Fondo - Asfalto Mojado / Shader Blur */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/imagen2.jpeg"
          alt="Reflejo Asfalto Mojado"
          fill
          className="object-cover opacity-[0.12] filter blur-[8px]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      {/* Collage de fotos flotantes de proyectos en baja opacidad */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
        {/* Renderizar 6 fotos distribuidas aleatoriamente flotando */}
        {[1, 5, 9, 12, 15, 17].map((num, index) => {
          const rotation = (index * 15) - 30; // Rotaciones variadas
          const top = 10 + (index * 15);      // Repartidos verticalmente
          const left = index % 2 === 0 ? 5 + (index * 2) : 80 - (index * 2); // Izquierda y derecha
          
          return (
            <motion.div
              key={index}
              className="absolute w-44 h-56 bg-dicssa-dark-gray border-4 border-white/5 rounded p-2 shadow-2xl opacity-[0.08]"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                rotate: `${rotation}deg`,
              }}
              animate={{
                y: [0, -18, 0],
                rotate: [rotation, rotation + 3, rotation],
              }}
              transition={{
                repeat: Infinity,
                duration: 8 + (index * 2),
                ease: "easeInOut",
              }}
            >
              <div className="relative w-full h-[80%] bg-black/40">
                <Image
                  src={`/images/proyectos/foto${num}.jpeg`}
                  alt="Proyecto flotante"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="h-[20%] flex items-center justify-center">
                <span className="text-[8px] font-mono text-white/50 tracking-widest uppercase">
                  OBRA VIAL DICSSA
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-mono font-bold tracking-widest text-dicssa-yellow uppercase">
            {"// OBRAS REALIZADAS"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-widest mt-2 mb-4">
            PORTAFOLIO DE PROYECTOS
          </h2>
          <div className="w-16 h-1 bg-dicssa-yellow mx-auto mb-6"></div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explora nuestro historial de obras viales, viaductos y caminos ejecutados para dependencias federales como SCT y estatales a lo largo de México.
          </p>
        </motion.div>

        {/* Filtros por Estado de la República */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {states.map((state) => (
            <button
              key={state}
              onClick={() => setSelectedState(state)}
              className={`px-4 py-2 rounded text-[10px] font-sans font-extrabold uppercase tracking-wider border transition-all duration-200 ${
                selectedState === state
                  ? "bg-dicssa-yellow border-dicssa-yellow text-black"
                  : "bg-dicssa-dark-gray/30 border-white/5 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {state}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos (Masonry y Filtrable) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              // Asignar una foto de forma consistente de la carpeta de fotos
              const photoNum = (project.id % 17) + 1;
              const isHovered = hoveredId === project.id;

              return (
                <motion.div
                  layout
                  key={project.id}
                  className="bg-dicssa-dark-gray/40 border border-white/5 rounded-lg overflow-hidden group hover:border-dicssa-yellow/40 transition-colors flex flex-col justify-between"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Foto de Proyecto con Zoom al Hover */}
                  <div className="relative h-52 w-full overflow-hidden bg-black/40">
                    <Image
                      src={`/images/proyectos/foto${photoNum}.jpeg`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Badge de Estado */}
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-dicssa-yellow" />
                      <span className="text-[9px] font-sans font-extrabold uppercase text-white tracking-widest">
                        {project.state}
                      </span>
                    </div>
                  </div>

                  {/* Cuerpo de la Card */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Cliente / Código de Contrato */}
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="text-[9px] font-mono font-bold text-gray-500 uppercase">
                          {project.client}
                        </span>
                        <TerminalCode code={project.contract} active={isHovered} />
                      </div>

                      {/* Título de la obra */}
                      <h3 className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-3 leading-snug group-hover:text-dicssa-yellow transition-colors">
                        {project.title}
                      </h3>

                      {/* Descripción */}
                      <p className="text-[11px] text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Metadata Inferior */}
                    <div className="mt-5 pt-3 border-t border-white/5 flex justify-between items-center text-[9px] text-gray-500 font-bold uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Fórmula SCT</span>
                      </div>
                      <span className="text-dicssa-yellow font-mono">OK // VERIFICADO</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
