const webpack = require("webpack");
const path = require("path");

let config = {
    entry: "./app/index.js",
    output: {
      path: path.resolve(__dirname, "./wwwroot"),
      filename: "bundle.js"
    },
    module: {
      rules: [

        //babel plugin
        {
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

        //sass plugin
        {
          test: /\.scss$/,
          loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
        }
      ]
    }
  }
  
  module.exports = config;

  //https://www.alsacreations.com/tuto/lire/1754-debuter-avec-webpack.html