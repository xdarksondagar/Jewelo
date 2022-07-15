const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/js/index.js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      // chuncks: [index],
      filename: "index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // filename: "[name].bundle.css",
    // path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 1234,
  },
  modules: {
    rules: [
      {
        test: /\.s(a|c)ss$/i,
        use: ["style-loader", "css-loader", "scss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
