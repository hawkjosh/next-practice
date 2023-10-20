/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mlbstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.mlbstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "content.mlb.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;