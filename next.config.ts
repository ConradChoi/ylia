import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    GAS_ENDPOINT: process.env.GAS_ENDPOINT ?? "",
  },
};

export default nextConfig;
