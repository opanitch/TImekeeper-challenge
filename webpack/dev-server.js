const path = require('path');

module.exports = {
  contentBase: path.resolve(__dirname, '../public'),
  historyApiFallback: true,
  host: '0.0.0.0',
  port: 3000,
  publicPath: '/',
};
