const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      future: {
        webpack5: true,
      },
      webpack(config) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
        };

        return config;
      },
      env: {
        mongodb_username: "",
        mongodb_password: "",
        mongodb_dbname: "",
      },
    };
  }

  return {};
};

module.exports = nextConfig;
