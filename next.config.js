/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
  env: {
    RAPID_API_KEY: process.env.NEXT_PUBLIC_RAPID_API_KEY,
  },
};

module.exports = nextConfig;
