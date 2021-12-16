module.exports = {
  reactStrictMode: true,
  images: {
    loader: "custom",
  },
  i18n: {
    locales: ["en-US", "vi-VN"],
    defaultLocale: "en-US",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
