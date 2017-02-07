const path = require('path');

const projectSourceRoot = path.resolve(__dirname, '..', 'pattern-library', 'src');

module.exports = {
  extensions: [
    '.jsx',
    '.js',
    '.css',
    '.scss',
    '.cssm'
  ],
  alias: {
    /* Facilitate making references to files in the source root */
    '#': projectSourceRoot
  }
};
