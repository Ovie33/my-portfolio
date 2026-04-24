import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Microlink screenshot service — used for dynamic project cover images
      { protocol: "https", hostname: "api.microlink.io" },
    ],
  },
};

export default nextConfig;
