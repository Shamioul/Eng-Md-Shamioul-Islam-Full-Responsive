import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // GitHub Pages
  output: "export",
  basePath: "/Eng-Md-Shamioul-Islam-Full-Responsive",
  assetPrefix: "/Eng-Md-Shamioul-Islam-Full-Responsive/",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

  experimental: {
    optimizeCss: true,
  },

  compress: true,
};

export default nextConfig;