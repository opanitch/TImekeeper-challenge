const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return [
    new HtmlWebpackPlugin({
      chunks: ['browser-check', 'main'],
      chunksSortMode: 'manual',
      filename: 'index.html',
      inject: true,
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
      template: path.resolve(__dirname, '../index.html'),
      title: 'TimeKeeper',
    }),
    new CompressionPlugin({
      test: /\.(js|s?css|html|json)$/,
    }),
  ];
};
