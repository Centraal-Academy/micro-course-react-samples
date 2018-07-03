const merge = require('webpack-merge')
const common = require('./webpack.common')
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = merge(common, {
  plugins: [
    new WebpackBundleAnalyzer()
  ]
})

module.exports = config
