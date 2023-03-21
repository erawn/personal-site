module.exports = {
  webpack: (config) => {
    // load worker files as a urls by using Asset Modules
    // https://webpack.js.org/guides/asset-modules/
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      type: "asset/resource",
      generator: {
        filename: "static/worker/[hash][ext][query]",
      },
    });

    return config;
  },
  // headers: () => [
  //   {
  //     source: "/:path*",
  //     headers: [
  //       {
  //         key: "Cache-Control",
  //         value: "no-store",
  //       },
  //     ],
  //   },
  // ],

  images: {
    formats: ["image/avif", "image/webp"],
  },
};
