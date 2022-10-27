/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
  env: {
    NEXT_PUBLIC_RAPID_API_KEY:
      "4e1d7a2947mshf7285688137a9d0p180cd4jsn6e214f573c2e",
  },
};

module.exports = nextConfig;
