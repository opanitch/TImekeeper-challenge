// const TerserPlugin = require()

const { ENVIRONMENTS } = require('../build/global/environments');

module.exports = (env) => ({
  minimize: env === ENVIRONMENTS.DEVELOPMENT,
  minimizer: [],
  splitChunks: {
    minChunks: 2,
    cacheGroups: {
      vendors: false,
    },
  },
});
