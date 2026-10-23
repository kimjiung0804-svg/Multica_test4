import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow dev origins for local testing
  allowedDevOrigins: ["localhost:3000", "192.168.0.108"],
  // Configure remote image domains for Next Image component
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" }
    ]
  },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
