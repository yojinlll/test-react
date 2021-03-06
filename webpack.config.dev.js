const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    example: "./example/example.tsx"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'miro-dev',
      template: './example/index.html',
    })
  ]
})