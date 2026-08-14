import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ethereal-search/:path*",
        destination: "https://ethereal-dimension-search.vercel.app/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
