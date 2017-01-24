const path = require('path');
const extend = require('extend');

module.exports = function ({ dirname }) {
  const baseConfig = {
    entry: path.resolve(dirname, 'src', 'index.js'),
    output: {
      path: path.join(dirname, 'lib'),
      libraryTarget: 'umd'
    },
    resolve: {
      extensions: [
        '',
        '.jsx',
        '.js'
      ],
      root: [
        path.resolve(dirname, 'src')
      ]
    },
    externals: {
      react: 'React',
      '@union/field-styles': true
    }
  };

  return [
    extend(true, {}, baseConfig, {
      output: {
        filename: 'meta.js',
      },
      module: {
        loaders: [
          {
            test: /\.jsx$/,
            loader: 'react-docgen'
          },
          {
            test: /\.js$/,
            exclude: ['node_modules'],
            loader: 'babel-loader'
          }
        ]
      }
    }),
    extend(true, {}, baseConfig, {
      output: {
        filename: 'index.js',
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: ['node_modules'],
            loader: 'babel-loader'
          }
        ]
      }
    })
  ];
};
