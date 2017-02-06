const path = require('path');

module.exports = {
  extensions: [
    '.jsx',
    '.js',
    '.css',
    '.scss',
    '.cssm'
  ],
  modules: [
    path.resolve(__dirname, '..', 'src'), 'node_modules'
  ]
};
