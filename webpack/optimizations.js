const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  minimizer: [
    // This will mangle our output to reduce size
    new UglifyJSPlugin({
      parallel: true,
      // uglifyOptions: {
      //   mangle: {
      //     safari10: true,
      //   },
      // },
    }),
  ],
  splitChunks: {
    minChunks: 2,
    cacheGroups: {
      vendors: false,
    },
  },
};
