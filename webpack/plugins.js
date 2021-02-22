const CompressionPlugin = require('compression-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = () => {
  return [
    new CompressionPlugin({
      test: /\.(js|css|html|json)$/,
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'TimeKeeper',
    }),
  ];
};
