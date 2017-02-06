const path = require('path');
const baseConfig = require('webpack-base-config');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  context: __dirname,
  entry: {
    'fields/css/index.cssm': './css/index.scss',
    'fields/components/index.js': './components/index.js'
  },
  output: {
    filename: '[name]'
  }
})
