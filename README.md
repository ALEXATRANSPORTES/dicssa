# DICSSA Infraestructura — Sitio Web Corporativo

Sitio web corporativo premium para **Dicssa Infraestructura SA de CV**, constructora
mexicana especializada en infraestructura vial (carreteras, puentes, terracerías,
pavimentación y conservación).

Construido con **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

---

## 🚀 Instalación

Requisitos: Node.js 18.17+ y npm.

```bash
npm install
cp .env.example .env.local   # rellenar variables
npm run dev                  # http://localhost:3000
```

## 📦 Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción optimizado |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Linter |

---

## 🗂️ Estructura

```
src/
  app/                 # Rutas (App Router)
    page.tsx           # Home
    quienes-somos/     # Nosotros
    servicios/         # Servicios (multi-pestaña)
    proyectos/         # Portafolio + mapa + galería + testimonios
    clientes/          # Clientes institucionales
    blog/              # Blog + artículos [slug]
    cotizacion/        # Cotizador multi-paso
    bolsa-de-trabajo/  # Vacantes
    portal/            # Área de clientes (frontend demo)
    aviso-de-privacidad/
    layout.tsx         # Layout raíz (SEO, fondo, cookies, scroll progress)
    template.tsx       # Transición entre páginas
  components/          # Componentes y primitivos UI (Reveal, Counter, ParallaxImage…)
public/
  images/              # Logo, fotos de obra (d1–d7), imagen1–3, /proyectos
  sitemap.xml, robots.txt
```

---

## 🖼️ Gestión de contenido (guía para el cliente)

Mientras no se conecte un CMS, el contenido se edita en código:

- **Proyectos del portafolio**: `src/components/Portfolio.tsx` (array `projects`) y
  `src/components/MapInner.tsx` (coordenadas del mapa).
- **Galería de obra**: coloque fotos en `public/images/proyectos/` y/o ajuste
  `src/components/Gallery.tsx`.
- **Servicios**: `src/app/servicios/page.tsx` (array `servicesData`).
- **Blog**: agregue artículos en el origen de datos del blog (`src/app/blog`).
- **Vacantes**: `src/app/bolsa-de-trabajo/page.tsx` (array `jobs`).
- **Logo**: `public/images/logo.png` (se muestra sobre fondo blanco para contraste).
- **Fotos del hero**: `src/components/HeroShowcase.tsx` (array `slides`).

> Para que el cliente edite sin tocar código, ver "Roadmap → CMS" abajo.

---

## 🔌 Puntos de integración de backend (TODO)

El frontend está completo; los siguientes puntos quedan listos para conectar
(marcados con `// TODO(backend)` en el código):

1. **Cotizador** (`src/components/QuoteForm.tsx`): `onSubmit` simula el envío.
   Conectar a una API route `/api/cotizacion` → correo (Resend/SMTP) y/o Supabase.
   Añadir **reCAPTCHA v3** y **rate limiting**.
2. **Cookies** (`src/components/CookieBanner.tsx`): inicializar GA4/GTM/Meta Pixel
   sólo tras consentimiento.
3. **Portal de clientes** (`src/app/portal/page.tsx`): sesión simulada en
   localStorage. Reemplazar por **NextAuth.js + JWT** y datos desde **Supabase**
   (RLS por cliente, Storage firmado para documentos).

Variables necesarias: ver `.env.example`.

---

## 🔍 SEO

- Metadatos por página (Next Metadata API), Open Graph y Twitter Cards.
- JSON-LD: `Organization`/`GovernmentContractor` (layout) y `BreadcrumbList` (breadcrumbs).
- `public/sitemap.xml` y `public/robots.txt`.
- URLs semánticas en español.

---

## 🌐 Despliegue

### Opción A — Vercel (recomendado, SSR/SSG nativo)
1. Importar el repositorio en Vercel.
2. Configurar variables de entorno (`.env.example`).
3. Deploy automático en cada push.

### Opción B — Hostinger

**B.1 — Node.js (SSR, recomendado si se usan API routes / portal):**
1. En hPanel → *Sitios web → Node.js*, crear app Node 18+.
2. Subir el repositorio (Git o FTP) y ejecutar `npm install && npm run build`.
3. Comando de arranque: `npm run start` (puerto asignado por Hostinger vía `PORT`).
4. Configurar el dominio y **forzar SSL** (Let's Encrypt en hPanel).

**B.2 — Exportación estática (hosting compartido sin Node):**
Si NO se requieren API routes ni SSR dinámico, exportar a HTML estático.
Agregar en `next.config.mjs`:
```js
const nextConfig = { output: "export", images: { unoptimized: true } };
```
Luego `npm run build` genera la carpeta `out/`; suba su contenido a `public_html`.
> Nota: el mapa (Leaflet) y el portal funcionan en cliente; el cotizador requiere
> backend externo (formspree/API) en modo estático.

### Dominio y redirecciones
- Forzar HTTPS (SSL) desde hPanel/Vercel.
- Redirección `www` ⇄ no-`www` (elegir una canónica; el sitio usa `www`).

---

## 🗺️ Roadmap (pendiente del prompt enterprise)

- [ ] API de cotización + correo + reCAPTCHA v3 + rate limiting
- [ ] GA4 / GTM / Hotjar / Meta Pixel (gated por consentimiento)
- [ ] CMS headless (Sanity/Strapi) para proyectos, blog y vacantes
- [ ] Supabase (PostgreSQL) + NextAuth para el portal real
- [ ] i18n ES/EN
- [ ] PWA (manifest + service worker)
- [ ] CSP/HSTS headers en `next.config.mjs`

---

© Dicssa Infraestructura SA de CV. Todos los derechos reservados.
