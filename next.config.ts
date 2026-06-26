import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",  // ← Diese Zeile hinzufügen
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;