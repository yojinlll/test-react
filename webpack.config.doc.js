const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    example: "./example/example.tsx"
  },
  output:{
    path: path.resolve(__dirname, 'doc'),
    filename: 'doc.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'miro-doc',
      template: './example/index.html',
      filename: 'doc.html',
    })
  ]
})