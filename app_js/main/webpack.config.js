var path = require('path')

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.join(__dirname),
    filename: "../../public/scripts.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.min\.js$/,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: path.join(__dirname, 'app'),
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  }
}
