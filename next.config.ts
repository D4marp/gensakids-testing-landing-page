import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "gensakidz-dashboard-be.paas.hcm-lab.id" },
      { protocol: "https", hostname: "gensakidz-dashboard-be.paas.hcm-lab.id" },
    ],
  },
};

export default nextConfig;
