'use strict';
const path = require('path');
const webpack = require("webpack");

module.exports = {
  context: path.resolve(__dirname, './src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Loaders for other file types can go here
    ],
  },
  entry: {
    // app: "./app.js",
    // app: ['./app.js', './events.js', './vendor.js'],
    home: './app.js',
    events: './events.js',
    contact: './vendor.js',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, './dist'),
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
