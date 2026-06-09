// Loader de imágenes para el export estático de GitHub Pages.
// next/image (incluso con 'unoptimized') NO añade el basePath al src, por lo que
// las imágenes locales se rompen bajo la subcarpeta /dicssa. Este loader antepone
// el prefijo a las rutas locales y deja intactas las URLs remotas.
// Solo se usa cuando NEXT_PUBLIC_BASE_PATH está definido (build de Pages).
export default function imageLoader({ src }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (/^https?:\/\//.test(src) || src.startsWith("data:")) return src;
  const path = src.startsWith("/") ? src : `/${src}`;
  return `${base}${path}`;
}
