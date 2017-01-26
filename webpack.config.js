const glob = require('glob-all');

const webpackFiles = glob.sync([
  './packages/core/**/webpack.config.js',
  './packages/components/**/webpack.config.js'
]);

module.exports = webpackFiles.map((path) => require(path));
