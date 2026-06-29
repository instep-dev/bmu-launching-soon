import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.tatlerasia.com" },
      { protocol: "https", hostname: "awsimages.detik.net.id" },
      { protocol: "https", hostname: "www.ey.com" },
      { protocol: "https", hostname: "cdn1-production-images-kly.akamaized.net" },
      { protocol: "https", hostname: "cdn0-production-images-kly.akamaized.net" },
    ],
  },
};

export default nextConfig;
