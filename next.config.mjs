/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export for GitHub Pages (kartavya1905.github.io).
  output: "export",
  // /projects/ -> projects/index.html, which GitHub Pages serves without extra config.
  trailingSlash: true,
  // Pages has no image optimizer, so next/image serves the original file.
  images: { unoptimized: true },
};

export default nextConfig;
