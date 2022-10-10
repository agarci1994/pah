/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: `${process.env.API_KEY}`,
    AUTH_DOMAIN: `${process.env.AUTH_DOMAIN}`,
    PROJECT_ID: `${process.env.PROJECT_ID}`,
    STORAGE: `${process.env.STORAGE}`,
    MESSAGING: `${process.env.MESSAGING}`,
    APP_ID: `${process.env.APP_ID}`,
    MEASUREMENT: `${process.env.MEASUREMENT}`,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig
