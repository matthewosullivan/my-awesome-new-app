const path = require('path') // pull in nodes path module
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // relative path to entry file
  output: {
    path: path.join(__dirname, 'dist'), //
    filename: 'app.bundle.js' // by default main.js
  },
  module: {
    rules: [
      {
        test: /\.js$/, // decide which modules this rule applies to, regular expression anything that ends in .js
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
