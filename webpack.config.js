'use strict';
const path = require('path');
const webpack = require("webpack");

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    // app: "./app.js",
    // app: ['./app.js', './events.js', './vendor.js'],
    home: './app.js',
    events: './events.js',
    contact: './vendor.js',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, './src'),
    publicPath: '/assets',                          // New
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),  // New
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2,
    }),
  ],
};
