import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_URL: "https://api.strixproduction.in/",
    // IMAGE_URL: "https://api.strixproduction.in/",
    // API_URL: "http://localhost:8000/",
    IMAGE_URL: "https://api.strixproduction.in/",
  },
  images: {
    domains: ["localhost", "placehold.jp", "api.strixproduction.in"],
  },
};

export default nextConfig;
