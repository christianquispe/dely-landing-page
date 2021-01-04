const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.base.js");
const Dotenv = require("dotenv-webpack");

const dev = {
  entry: "./src/index",
  mode: "development",
  output: {
    filename: "bundle.js",
    sourceMapFilename: "[file].map",
    path: path.resolve("build/"),
  },
  plugins: [new Dotenv({ path: `${__dirname}/src/config/vars/dev` })],
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
    // publicPath: ASSET_PATH,
    compress: true,
    port: 8080,
  },
};

module.exports = merge.merge(common, dev);
