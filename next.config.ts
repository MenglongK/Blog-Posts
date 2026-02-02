import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [new URL('https://api.escuelajs.co/api/v1/files/**')],
  },
}

export default nextConfig;
