const path = require("path");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server.dev.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: "/.js$/",
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: [path.resolve(__dirname, "webpack.dev.js")]
      }
    ]
  },
  plugins: [new cleanWebpackPlugin(["dist"])],
  mode: "development",
  devtool: "inline-source-map",
  target: "node",
  externals: [webpackNodeExternals()]
};
