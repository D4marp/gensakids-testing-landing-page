import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dashboard.gensakidz.com" },
    ],
  },
};

export default nextConfig;
