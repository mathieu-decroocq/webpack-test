const webpack = require("webpack");
const path = require("path");
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");


let config = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "./wwwroot"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
        //babel plugin
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            babelrc: false
          }
        }
      },
      {
        //sass plugin
        test: /\.scss$/,
        use: extractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }]
  },
  plugins: [
    new extractTextWebpackPlugin("styles.css")
  ]
}

module.exports = config;

  //https://www.alsacreations.com/tuto/lire/1754-debuter-avec-webpack.html