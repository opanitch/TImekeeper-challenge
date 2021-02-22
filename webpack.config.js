const path = require('path');

const devServer = require('./webpack/dev-server');
const loaders = require('./webpack/loaders');
const optimizations = require('./webpack/optimizations');
const plugins = require('./webpack/plugins');
const resolve = require('./webpack/resolve');

const ENV = process.env.NODE_ENV;

console.log('**********************************************');
console.log('********** WEBPACK NODE ENVIRONMENT **********');
console.log(ENV);
console.log('********** WEBPACK CONFIG DEV SERVER *********');
console.log(devServer);
console.log('*********** WEBPACK CONFIG LOADERS ***********');
console.log(loaders);
console.log('*********** WEBPACK CONFIG PLUGINS ***********');
console.log(plugins);
console.log('*********** WEBPACK CONFIG RESOLVE ***********');
console.log(resolve);
console.log('************* WEBPACK CONFIG END *************');
console.log('**********************************************');

module.exports = {
  devServer: devServer,
  entry: {
    main: path.resolve(__dirname, './source/index.tsx'),
  },
  module: {
    rules: loaders(),
  },
  plugins: plugins(),
  optimization: optimizations,
  output: {
    chunkFilename: 'bundles/[name].chunk.js',
    filename: 'bundles/[name].bundle.js',
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
  },
  resolve: resolve,
};
