import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    config.resolve.alias = {
        ...config.resolve.alias,
    };
    // Ignore test dependencies that might be accidentally imported
    config.ignoreWarnings = [
      { module: /node_modules\/thread-stream/ },
      { module: /node_modules\/pino/ }
    ];
    return config;
  },
};

export default nextConfig;
