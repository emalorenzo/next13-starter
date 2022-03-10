/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  compiler: {
    removeConsole: true,
    styledComponents: true,
  },
  experimental: {
    concurrentFeatures: true,
  },
  reactStrictMode: true,
});
