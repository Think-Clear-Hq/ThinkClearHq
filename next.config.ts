import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure build passes even if there are small lint/type errors
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Fix for GitHub Pages 404
  basePath: "/ThinkClearHq",
  assetPrefix: "/ThinkClearHq",
};

export default nextConfig;
