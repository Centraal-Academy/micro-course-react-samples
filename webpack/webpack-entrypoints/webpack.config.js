const path = require('path')

const config = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    polyfills: path.resolve(__dirname, 'src/polyfills.js')
  },
  output: {
    filename: '[name]-[chunkhash].js',
    path: path.resolve(__dirname, 'build')
  }
}

module.exports = config
