import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

export const basePath = isProd ? "/ran-parts-du-dev" : "";

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath,
  reactStrictMode: true,
};

export default nextConfig;
