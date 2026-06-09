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
  images: isPages
    ? {
        // GitHub Pages no tiene el optimizador de Next. Un loader custom sirve
        // las imágenes sin optimizar y, sobre todo, les antepone el basePath
        // (next/image no lo hace solo), arreglando las imágenes en /dicssa.
        loader: "custom",
        loaderFile: "./image-loader.js",
      }
    : {
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
