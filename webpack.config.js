const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    another: "./src/another-module.js",
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  optimization: {
    // runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },

  devtool: "inline-source-map",

  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
    new BundleAnalyzerPlugin(),
  ],

  devServer: {
    static: "./dist",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
