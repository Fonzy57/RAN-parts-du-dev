import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/ran-parts-du-dev" : "",
  assetPrefix: isProd ? "/ran-parts-du-dev/" : "",
  reactStrictMode: true,
  publicRuntimeConfig: {
    basePath: isProd ? "/ran-parts-du-dev" : "",
  },
};

export default nextConfig;
