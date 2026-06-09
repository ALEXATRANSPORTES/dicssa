/** @type {import('next').NextConfig} */

// Para el demo en GitHub Pages se exporta estático bajo la subcarpeta /dicssa.
// Se activa solo cuando GITHUB_PAGES=true (en el workflow de CI).
// En local y en el deploy final (grupodicssa.mx, raíz) NO se aplica nada de esto.
const isPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/dicssa";

const nextConfig = {
  ...(isPages
    ? {
        output: "export",
        basePath: repoBasePath,
        assetPrefix: repoBasePath,
      }
    : {}),
  images: {
    // GitHub Pages no tiene el optimizador de imágenes de Next → usar sin optimizar.
    unoptimized: isPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
