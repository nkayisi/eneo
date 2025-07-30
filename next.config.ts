import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://logos-world.net/**')],
  },
};

export default nextConfig;
