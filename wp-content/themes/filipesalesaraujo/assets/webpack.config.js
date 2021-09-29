const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");
const glob = require("glob");
const jsPath = "./src/js";
const cssPath = "./src/scss";
const outputPath = "dist";
const entryPoints = {
  bundle: jsPath + "/app.js",
  style: cssPath + "/app.scss",
};
module.exports = {
  entry: entryPoints,
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: "js/[name].min.js",
    assetModuleFilename: 'modules/[name][ext]'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    }),
    new ImageminPlugin({
      cacheFolder: "./.cache",
      externalImages: {
        context: ".",
        sources: glob.sync("src/images/**/*.{png,jpg,jpeg,gif,svg}"),
        destination: "dist/images",
        fileName: "[path][name].[ext]",
      },
      pngquant: { quality: "80-100" },
      plugins: [imageminMozjpeg({ quality: 50 })],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[c]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.sass$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "expanded",
                indentedSyntax: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude:path.resolve(__dirname, "node_modules"),
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude:path.resolve(__dirname, "node_modules"),
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images/",
        },
      },
      {
        test: /\.html/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name][ext]'
        }
      }
    ],
  },
};

