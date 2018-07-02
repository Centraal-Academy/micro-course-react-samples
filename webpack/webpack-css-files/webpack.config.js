const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const config = (env, args) => {
  return {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build')
    },
    module: {
      rules: [{
        test: /\.css$/,
        use: [
          args && args.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ]
  }
}

module.exports = config
