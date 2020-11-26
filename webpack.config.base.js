const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolveTsAliases } = require("resolve-ts-aliases");
const { SourceMapDevToolPlugin } = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    sourceMapFilename: "[file].map",
    chunkFilename: "[name].chunk.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: resolveTsAliases(path.join(__dirname, "./tsconfig.json")),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader",
      },
      {
        test: /\.(png|jpg|gif|mp3|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      favicon: "./src/assets/logo-web/isotipo.svg",
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
  target: "web",
};
