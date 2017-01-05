'use strict';

const webpack = require("webpack");

module.exports = {
  context: __dirname + "/src",
  entry: {
    // app: "./app.js",
    app: ['./app.js', './events.js', './vendor.js'],
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
  },
};
