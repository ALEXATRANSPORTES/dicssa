export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
  image: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "que-es-el-fresado-y-encarpetado-de-carreteras",
    title: "¿Qué es el Fresado y Encarpetado de Carreteras? Proceso y Ventajas",
    excerpt:
      "El fresado y encarpetado es la técnica más eficiente para rehabilitar pavimentos deteriorados sin reconstruir la base completa. Conoce el proceso paso a paso que aplica DICSSA en sus obras.",
    date: "2025-10-14",
    author: "Ing. Equipo DICSSA",
    category: "Técnica Vial",
    readTime: 6,
    image: "/images/imagen2.jpeg",
    tags: ["fresado", "pavimentación", "asfalto", "mantenimiento carretero", "SCT"],
    content: `
## ¿En qué consiste el fresado de pavimentos?

El **fresado en frío** es la remoción mecánica de la capa de rodamiento deteriorada (carpeta asfáltica) mediante una máquina fresadora que tritura el material a la profundidad requerida, generalmente entre 5 y 10 centímetros.

Este proceso permite recuperar el perfil transversal de la carretera, eliminar baches, grietas y deformaciones, y preparar una superficie uniforme para recibir la nueva carpeta.

## Proceso de fresado y encarpetado

### 1. Inspección y diagnóstico
Antes de iniciar cualquier trabajo, los ingenieros de DICSSA realizan un estudio de la condición del pavimento mediante:
- **Pruebas de deflectometría** para determinar la capacidad estructural
- **Análisis de núcleos** extraídos a diferentes profundidades
- **Medición de la regularidad superficial (IRI)**

### 2. Fresado en frío
La máquina fresadora Wirtgen avanza sobre el carril a rehabilitar y remueve la capa especificada. El material fresado (RAP — Reclaimed Asphalt Pavement) se recupera en camiones de volteo para su posible reciclaje.

### 3. Limpieza y riego de liga
Sobre la superficie fresada se aplica una **emulsión asfáltica de rompimiento rápido** que garantiza la adherencia entre la base existente y la nueva carpeta. Este paso es crítico para evitar deslizamientos entre capas.

### 4. Tendido de la nueva carpeta
Se tiende la **mezcla asfáltica caliente** mediante una pavimentadora equipada con sensores de nivelación automática. DICSSA utiliza mezclas tipo **A**, **B** y **SMA** según las especificaciones del proyecto.

### 5. Compactación
El material se compacta en dos pasadas: primero con rodillo vibratorio de acero y luego con rodillo neumático para lograr una densidad mínima del 95% de la densidad Marshall.

## Ventajas frente a la reconstrucción total

| Criterio | Fresado + Encarpetado | Reconstrucción total |
|---|---|---|
| Costo | 40–60% menor | Base de comparación |
| Tiempo de ejecución | 2–4 semanas | 3–6 meses |
| Interrupción de tráfico | Parcial | Total |
| Aprovechamiento de material | RAP reutilizable | Desperdicio a relleno |
| Durabilidad | 8–12 años | 15–20 años |

## Proyectos de DICSSA con esta técnica

DICSSA ha ejecutado trabajos de fresado y encarpetado en:
- **Carretera México–Pachuca**, tramo Ecatepec–Límite Edo. Méx/Hgo (6.3 km)
- **Tratamiento superficial Chamapa–Lechería**, zona de plaza de cobro Nopala y Atizapán
- **Paseo Tollocan, Toluca** — reencarpetado de vialidad principal
- **Vialidades HUIX**, Estado de México

## Normativa aplicable

Todos los trabajos se ejecutan bajo las **Normas SCT** para construcción y conservación de carreteras, específicamente la **N·CMT·4·05·001** (Mezclas Asfálticas en Caliente) y las especificaciones de cada centro SCT contratante.

---

¿Tienes una carretera o vialidad que requiere rehabilitación? [Contáctanos](/contacto) y nuestro equipo de ingenieros elaborará una propuesta técnica sin costo.
    `.trim(),
  },
  {
    slug: "tipos-de-pavimento-en-mexico-asfaltico-vs-hidraulico",
    title: "Tipos de Pavimento en México: Asfáltico vs Hidráulico — ¿Cuál Elegir?",
    excerpt:
      "La elección del tipo de pavimento impacta directamente en el costo de construcción, vida útil y mantenimiento de una carretera. Analizamos las diferencias técnicas y económicas.",
    date: "2025-09-22",
    author: "Ing. Equipo DICSSA",
    category: "Ingeniería Vial",
    readTime: 7,
    image: "/images/imagen1.png",
    tags: ["pavimento asfáltico", "concreto hidráulico", "carreteras México", "ingeniería vial", "SCT"],
    content: `
## Pavimento Asfáltico (Flexible)

El pavimento asfáltico o **flexible** se compone de capas de mezcla bituminosa compactada sobre una base y subbase granular. Su comportamiento es "flexible" porque distribuye las cargas verticales de los vehículos gradualmente hacia las capas inferiores.

### Composición típica
- **Carpeta de rodadura**: 5–10 cm de mezcla asfáltica
- **Base hidráulica**: 15–30 cm
- **Subbase**: 20–40 cm de material granular
- **Terracería**: subrasante compactada

### Ventajas
- **Menor costo inicial** de construcción (30–40% menos que hidráulico)
- Apertura al tráfico rápida (12–24 horas)
- Reparaciones parciales económicas
- Mejor confort de rodamiento (menor ruido)

### Desventajas
- Mayor frecuencia de mantenimiento (cada 5–8 años)
- Susceptible a deformaciones con altas temperaturas
- No recomendable para tráfico pesado intensivo sin diseño especial

---

## Pavimento Hidráulico (Rígido)

El pavimento de **concreto hidráulico** consiste en losas de concreto reforzado o simple, apoyadas directamente sobre la subbase. Su rigidez distribuye las cargas sobre una mayor superficie.

### Composición típica
- **Losa de concreto**: 20–30 cm de f'c 300–350 kg/cm²
- **Subbase**: 15–20 cm estabilizada
- **Terracería**: subrasante compactada

### Ventajas
- **Mayor vida útil**: 20–30 años con mantenimiento mínimo
- Soporta tráfico pesado (carreteras de alta intensidad)
- Menor costo de mantenimiento a largo plazo
- Resistente a combustibles y aceites

### Desventajas
- **Mayor costo inicial** de construcción
- Requiere juntas de dilatación cada 4–6 metros
- Mayor ruido de rodamiento
- Reparaciones más costosas y complejas

---

## Comparativa técnico-económica

| Factor | Asfáltico | Hidráulico |
|---|---|---|
| Costo inicial ($/m²) | $600–$900 | $900–$1,400 |
| Vida útil | 10–15 años | 20–30 años |
| Costo de mantenimiento | Alto | Bajo |
| Tiempo de construcción | Rápido | Lento (curado 28 días) |
| Aplicación ideal | Vialidades urbanas, caminos rurales | Carreteras federales, aeropuertos, zonas industriales |

---

## ¿Qué usa DICSSA?

DICSSA cuenta con capacidad para ejecutar **ambos tipos de pavimento**. En nuestro portafolio encontramos:

- **Asfáltico**: Modernización carretera Bernal–Higuerillas (Querétaro), Paseo Tollocan, México–Pachuca
- **Hidráulico**: Entronque La Fragua (Puebla), Distribuidores viales en Estado de México

La selección depende del **TPDA** (Tránsito Promedio Diario Anual), las condiciones del suelo, el presupuesto disponible y los lineamientos de la SCT o dependencia contratante.

[Solicita una consulta técnica sin costo](/contacto) para tu proyecto vial.
    `.trim(),
  },
  {
    slug: "como-funciona-una-licitacion-de-obra-publica-en-mexico",
    title: "¿Cómo Funciona una Licitación de Obra Pública en México? Guía 2025",
    excerpt:
      "Las licitaciones federales y estatales de obra pública en México siguen un proceso regulado por la Ley de Obras Públicas. Te explicamos cada etapa y cómo prepararse para participar.",
    date: "2025-08-30",
    author: "Ing. Equipo DICSSA",
    category: "Obra Pública",
    readTime: 8,
    image: "/images/imagen3.png",
    tags: ["licitación obra pública", "SCT", "Ley de Obras Públicas", "contratación federal", "DICSSA"],
    content: `
## Marco legal

Las licitaciones de obra pública en México se rigen principalmente por la **Ley de Obras Públicas y Servicios Relacionados con las Mismas (LOPSRM)** y su Reglamento, así como por los lineamientos específicos de cada dependencia (SCT, IMSS, SEP, gobiernos estatales).

## Modalidades de contratación

### 1. Licitación Pública
La modalidad más común. Convoca a todos los interesados mediante publicación en **CompraNet** y en el Diario Oficial de la Federación (DOF). Aplica cuando el monto supera los umbrales establecidos anualmente.

### 2. Invitación a Cuando Menos Tres Personas
Se invita directamente a un mínimo de tres contratistas. Se utiliza para montos medios o cuando las condiciones del mercado lo justifican.

### 3. Adjudicación Directa
Para montos menores o situaciones de emergencia debidamente justificadas.

---

## Etapas del proceso licitatorio

### Etapa 1: Publicación de convocatoria
La dependencia publica la convocatoria en CompraNet con:
- Número de licitación y descripción de la obra
- Monto estimado
- Plazos de ejecución
- Requisitos de capacidad técnica y financiera

### Etapa 2: Junta de aclaraciones
Los participantes presentan preguntas técnicas por escrito. La dependencia responde mediante un **Acta de Junta de Aclaraciones** que forma parte integral de las bases.

### Etapa 3: Visita al sitio de los trabajos
Obligatoria en la mayoría de los casos. Permite conocer las condiciones reales del terreno, accesos y restricciones que afectan el costo de la obra.

### Etapa 4: Presentación y apertura de proposiciones
Se presentan simultáneamente la **proposición técnica** y la **proposición económica** en sobre cerrado o mediante CompraNet. Se verifica que cumplan los requisitos formales.

### Etapa 5: Evaluación técnica y económica
La dependencia evalúa:
- **Técnico**: experiencia en obras similares, plantilla de personal, maquinaria disponible, programa de trabajo
- **Económico**: precio total, desglose de conceptos de obra, análisis de precios unitarios

### Etapa 6: Fallo
Se notifica al licitante ganador y se levanta el Acta de Fallo. Los demás participantes tienen derecho a conocer los resultados y presentar inconformidades.

### Etapa 7: Formalización del contrato
El contrato se firma dentro de los plazos establecidos en las bases. Incluye el programa de ejecución, calendario de ministraciones y garantías (generalmente 10% del monto contratado).

---

## Documentos típicamente requeridos

- Acta constitutiva y poder notarial del representante legal
- Alta en el SAT y opinión de cumplimiento fiscal
- Registro en el Directorio de Contratistas de la dependencia
- Estados financieros dictaminados
- Currículum de obras similares con contratos
- Plantilla de maquinaria propia
- Programa detallado de obra (CPM/PERT)
- Análisis de precios unitarios

---

## La experiencia de DICSSA en licitaciones

DICSSA cuenta con experiencia acreditada en licitaciones ante:
- Centros SCT de Puebla, Guanajuato, Querétaro, México, Morelos y SLP
- Junta de Caminos del Estado de México
- Gobierno de la Ciudad de México
- PEMEX y CFE

Todos nuestros contratos se encuentran registrados en CompraNet y disponibles para consulta pública.

¿Buscas un socio técnico confiable para una licitación? [Contáctanos](/contacto).
    `.trim(),
  },
  {
    slug: "senalamiento-vial-horizontal-vertical-normas-sct",
    title: "Señalamiento Vial Horizontal y Vertical: Normas SCT y Mejores Prácticas",
    excerpt:
      "El señalamiento vial correcto reduce los accidentes hasta un 30%. Conoce los tipos, materiales y normas aplicables en México que DICSSA cumple en cada proyecto.",
    date: "2025-07-18",
    author: "Ing. Equipo DICSSA",
    category: "Seguridad Vial",
    readTime: 5,
    image: "/images/imagen1.png",
    tags: ["señalamiento vial", "seguridad vial", "normas SCT", "pintura termoplástica", "señales de tránsito México"],
    content: `
## ¿Por qué es crítico el señalamiento vial?

Según datos de la **Secretaría de Infraestructura, Comunicaciones y Transportes (SICT)**, una carretera con señalamiento completo y en buen estado reduce los accidentes en un 25–35%. El señalamiento vial no es solo un requisito legal — es una herramienta de ingeniería que salva vidas.

## Clasificación del señalamiento

### Señalamiento Horizontal
Marcas pintadas sobre la superficie de rodamiento:
- **Rayas de carril**: dividen los carriles de circulación
- **Rayas de borde**: delimitan la calzada
- **Líneas centrales**: en carreteras bidireccionales
- **Palabras y símbolos**: "ALTO", flechas direccionales, cruces peatonales
- **Vialetas y botones**: elementos retroreflectivos tridimensionales

### Señalamiento Vertical
Dispositivos montados en postes a la orilla de la carretera:
- **Restrictivas** (fondo blanco, borde rojo): ALTO, velocidad máxima, no rebase
- **Preventivas** (fondo amarillo): curva peligrosa, puente angosto, ganado en carretera
- **Informativas** (fondo verde o azul): nombre de localidades, distancias, servicios
- **Obras** (fondo naranja): señalamiento temporal durante construcción

## Materiales y normas

### Pintura termoplástica retroreflectiva
Es el estándar actual en México para señalamiento horizontal de alta durabilidad. Características:
- **Espesor**: 1.5–3 mm aplicada en caliente a 200°C
- **Microesferas de vidrio**: embebidas para retroreflexión nocturna
- **Duración**: 4–6 años en carreteras de tráfico medio
- **Norma**: N·CSV·CAR·2·01·007 de la SCT

### Señales verticales retroreflectivas
- **Lámina galvanizada** calibre 14 con tratamiento anticorrosivo
- **Películas retroreflectivas**: Tipo III (alta intensidad) o Tipo IX (diamante) para carreteras de alta velocidad
- **Norma**: N·CSV·CAR·2·01·003 de la SCT

## Proceso de aplicación en DICSSA

1. **Levantamiento topográfico** del proyecto de señalamiento
2. **Diseño** conforme al Manual de Dispositivos para el Control del Tránsito (MDCCT)
3. **Granallado** de la superficie para garantizar adherencia
4. **Aplicación termoplástica** con máquina autopropulsada de control computarizado
5. **Colocación de vialetas** y botones reflectivos
6. **Instalación de postes** con cimentación adecuada
7. **Inspección nocturna** de retroreflexión

## Proyectos ejecutados por DICSSA

- **Libramiento Serdán, Puebla**: señalamiento completo de entronques a nivel y a desnivel
- **PSV Paseo del Bajío, Guanajuato**: señalamiento de paso superior vehicular
- **Mexibus IV, Estado de México**: señalamiento de carril exclusivo de autobús rápido
- **Mantenimiento de Vialidades Principales CDMX**: señalamiento correctivo en primarias

¿Necesitas señalamiento para tu obra vial? [Solicita cotización](/contacto).
    `.trim(),
  },
  {
    slug: "tren-maya-impacto-infraestructura-carretera-mexico",
    title: "Tren Maya: Impacto en la Infraestructura Vial del Sureste Mexicano",
    excerpt:
      "El Tren Maya no solo es un proyecto ferroviario — transformó completamente la red de caminos, accesos y terracerías del sureste. DICSSA participó en la construcción del tramo Calkiní–Izamal.",
    date: "2025-06-05",
    author: "Ing. Equipo DICSSA",
    category: "Grandes Proyectos",
    readTime: 6,
    image: "/images/imagen2.jpeg",
    tags: ["Tren Maya", "infraestructura sureste", "terracerías", "Yucatán", "DICSSA", "Calkiní Izamal"],
    content: `
## El megaproyecto más ambicioso del sureste

El **Tren Maya** representa la obra de infraestructura más grande de México en las últimas décadas: 1,554 kilómetros de vías que conectan a Palenque, Chiapas, con Cancún, Quintana Roo, atravesando Tabasco, Campeche, Yucatán y la Riviera Maya.

Para DICSSA, participar en la construcción de terracerías del **tramo Calkiní–Izamal, en el estado de Yucatán**, representó uno de los proyectos más exigentes de nuestra trayectoria.

## Retos de la construcción en el sureste

### Condiciones geológicas
La **Península de Yucatán** se caracteriza por un suelo kárstico — caliza porosa con cavidades subterráneas (cenotes). Esto requirió:
- Estudios geológicos detallados antes de cada excavación
- Relleno de cavidades con concreto fluido
- Modificación de trazos para evitar cenotes activos

### Climatología
Las lluvias de la temporada ciclónica (mayo–octubre) en Yucatán superan los 800 mm anuales, lo que obligó a:
- Programar las terracerías en temporada seca
- Construir canales de desvío provisional para proteger el avance
- Utilizar suelos estabilizados con cal para soportar la humedad

### Logística y abastecimiento
La obra se desarrolló en zonas selváticas remotas, lo que implicó:
- Apertura de caminos de acceso temporales
- Campamentos de obra en sitio
- Coordinación con comunidades locales para el paso de maquinaria

## Alcance de DICSSA en el proyecto

La participación de DICSSA en el tramo **Calkiní–Izamal** incluyó:
- **Despalme y desmonte**: limpieza de selva para preparar la plataforma
- **Terracerías de línea**: excavación de cortes y construcción de terraplenes para el alineamiento del tren
- **Compactación**: a densidades mayores al 95% Proctor modificado
- **Cunetas y lavaderos**: obras de drenaje para proteger la plataforma

## Legado en infraestructura regional

Más allá del propio tren, el proyecto generó un **efecto multiplicador** en la infraestructura vial de la región:
- Mejora de 200+ kilómetros de caminos de acceso
- Rehabilitación de puentes rurales en municipios de Campeche y Yucatán
- Fortalecimiento de la industria local de materiales de construcción

El Tren Maya es un ejemplo de cómo los grandes proyectos de infraestructura transforman no solo el transporte, sino el tejido económico y social de una región completa.

[Conoce más sobre nuestro portafolio de obras](/proyectos).
    `.trim(),
  },
  {
    slug: "mantenimiento-carreteras-conservacion-rutinaria-periodica",
    title: "Mantenimiento de Carreteras: Diferencia entre Conservación Rutinaria y Periódica",
    excerpt:
      "No todo el mantenimiento carretero es igual. La conservación rutinaria previene daños menores, mientras que la periódica recupera la capacidad estructural del pavimento. Conoce las diferencias.",
    date: "2025-05-12",
    author: "Ing. Equipo DICSSA",
    category: "Mantenimiento Vial",
    readTime: 5,
    image: "/images/imagen3.png",
    tags: ["mantenimiento carretero", "conservación rutinaria", "conservación periódica", "bacheo", "SCT México"],
    content: `
## ¿Por qué mantener las carreteras?

Una carretera que no recibe mantenimiento pierde entre **40% y 60% de su vida útil** en los primeros años de deterioro acelerado. La **Regla del 1 × 4 × 16** del Banco Mundial establece que por cada peso invertido en mantenimiento oportuno se evitan cuatro pesos en rehabilitación y dieciséis en reconstrucción total.

## Conservación Rutinaria

La conservación rutinaria comprende actividades **continuas de bajo costo** que se realizan a lo largo del año para mantener el estado funcional básico de la carretera.

### Actividades típicas
- **Bacheo superficial**: relleno de baches menores con mezcla asfáltica en frío o en caliente
- **Limpieza de cunetas y alcantarillas**: remoción de azolves para mantener el drenaje
- **Deshierbe de acotamientos**: control de vegetación que reduce la visibilidad y daña el pavimento
- **Reposición de señales dañadas**: sustitución de señales vandalizadas o deterioradas
- **Limpieza de puentes**: eliminación de basura, azolve y verificación de juntas

### Frecuencia
Mensual o trimestral, dependiendo del nivel de servicio requerido.

### Costo referencial
$50,000 – $200,000 por kilómetro por año, según el tipo de carretera.

---

## Conservación Periódica

La conservación periódica implica **intervenciones programadas cada varios años** para recuperar las condiciones estructurales y funcionales de la carretera.

### Actividades típicas
- **Fresado y recarpetado**: remoción de la carpeta deteriorada y tendido de nueva mezcla asfáltica
- **Bacheo profundo**: excavación y reconstrucción de áreas con falla estructural
- **Refuerzo estructural** (overlay): aplicación de nueva capa sobre la existente
- **Reparación de obras de drenaje**: limpieza profunda o reconstrucción de alcantarillas
- **Renovación de señalamiento**: pintura termoplástica y señales nuevas

### Frecuencia
Cada 5–8 años para pavimentos asfálticos; cada 10–15 años para hidráulicos.

### Costo referencial
$800,000 – $3,000,000 por kilómetro, según el tipo de intervención.

---

## Proyectos de DICSSA en conservación

DICSSA ha ejecutado contratos de conservación para:
- **Junta de Caminos del Estado de México**: conservación rutinaria de la red estatal
- **Toluca–Naucalpan**: conservación rutinaria de carretera federal
- **Carretera México–Pachuca**: conservación periódica mediante fresado y recarpetado (6.3 km)
- **Supervisión en Veracruz**: verificación de calidad en obras de conservación carretera

---

La clave es intervenir en el momento correcto: demasiado tarde cuesta diez veces más. DICSSA ofrece diagnósticos de condición de pavimento sin costo para dependencias y municipios interesados.

[Contáctanos para una evaluación](/contacto).
    `.trim(),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export const blogCategories = [
  "Todos",
  "Técnica Vial",
  "Ingeniería Vial",
  "Obra Pública",
  "Seguridad Vial",
  "Grandes Proyectos",
  "Mantenimiento Vial",
];
