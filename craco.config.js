module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "react/jsx-runtime": require.resolve("react/jsx-runtime.js"),
        "react/jsx-dev-runtime": require.resolve("react/jsx-dev-runtime.js"),
      };
      return webpackConfig;
    },
  },
};