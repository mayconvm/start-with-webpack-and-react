'use strict'

const path = require('path')
const webpack = require("webpack")
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, "src", "index")
  ],

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
  ],

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'standard-loader',
        options: {
          // Emit errors instead of warnings (default = false)
          error: false,
          // enable snazzy output (default = true)
          snazzy: true,
          // other config options to be passed through to standard e.g.
          parser: 'babel-eslint'
        }
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel-loader'
      },

      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
        include: /src/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'media/[name].[hash:8].[ext]'
          }
        }
      }
    ]

    // rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   include: path.resolve('dist'),
      //   use: {
      //     loader: 'standard-loader',
      //     options: {
      //       parser: 'babel-eslint'
      //     }
      //   }
      // },
    // ]
  },

}
