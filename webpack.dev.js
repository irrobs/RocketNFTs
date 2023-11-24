const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    assetModuleFilename: "./assets/[name][ext]",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader", // 1. Turs sass into css
        ],
      },
    ],
  },
});
