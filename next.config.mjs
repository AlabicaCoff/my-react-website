/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.hub.central.dynatrace.com",
      },
      {
        protocol: "https",
        hostname: "icon.icepanel.io",
      },
      {
        protocol: "https",
        hostname: "dl.flathub.org",
      },
    ],
  },
};

export default nextConfig;
