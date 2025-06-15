import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
    webpackBuildWorker: true,
    webpackMemoryOptimizations: true,
  },
};

export default nextConfig;
