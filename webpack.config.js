/*
 * @Author: Siwen
 * @Date: 2020-06-15 14:59:42
 * @LastEditors: Siwen
 * @LastEditTime: 2020-06-18 11:37:20
 * @Description: webpack.config.js
 */
const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    index: './index.js'
  },
  output: {
    library: "utils",
    libraryTarget: "umd",
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'index.d.ts',
          to: 'index.d.ts'
        }
      ]
    })
  ]
}
