const path = require('path');

const devServer = require('./webpack/dev-server');
const entry = require('./webpack/entry');
const loaders = require('./webpack/loaders');
const optimizations = require('./webpack/optimizations');
const output = require('./webpack/output');
const plugins = require('./webpack/plugins');
const resolve = require('./webpack/resolve');

const { BROWSER_TYPES, ENVIRONMENTS } = require('./build/global/environments');

const ENV = process.env.NODE_ENV;
const isProduction = ENV === ENVIRONMENTS.PRODUCTION;

console.log('**********************************************');
console.log('********** WEBPACK NODE ENVIRONMENT **********');
console.log(ENV);
if (!isProduction) {
  console.log('********** WEBPACK CONFIG DEV SERVER *********');
  console.log(devServer);
  console.log('************ WEBPACK CONFIG ENTRY ************');
  console.log(entry);
  console.log('*********** WEBPACK CONFIG LOADERS ***********');
  console.log(loaders);
  console.log('********* WEBPACK CONFIG OPTIMIZATIONS *******');
  console.log(optimizations);
  console.log('*********** WEBPACK CONFIG OUTPUT ************');
  console.log(output);
  console.log('*********** WEBPACK CONFIG PLUGINS ***********');
  console.log(plugins);
  console.log('*********** WEBPACK CONFIG RESOLVE ***********');
  console.log(resolve);
  console.log('************* WEBPACK CONFIG END *************');
}
console.log('**********************************************');

module.exports = {
  devServer,
  devtool: !isProduction ? 'eval-cheap-module-source-map' : false,
  entry: {
    main: path.resolve(__dirname, './source/index.tsx'),
  },
  mode: ENV,
  module: {
    rules: loaders(ENV),
  },
  ...(isProduction && { performance }),
  plugins: plugins(ENV),
  optimization: optimizations(ENV),
  output: output(ENV),
  resolve,
  target: BROWSER_TYPES.WEB,
};
