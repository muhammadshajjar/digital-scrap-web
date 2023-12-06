/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

// Add the next-remove-imports configuration
const removeImports = require("next-remove-imports")();
module.exports = removeImports(nextConfig);
