# Getting Started

Union is an ecosystem of packages that define [The Knot](http://www.theknot.com)'s pattern library. Each package consists of either [React]() components, [CSS Modules](/pattern-library/getting-started/css-modules) or both.

## Configuring build

> To see how to set up your **runtime dependencies**, click [here](/pattern-library/getting-started/runtime-dependencies).

### Dependencies

First you will need to install the following dependencies.

```bash
npm install --save-dev webpack                     # required
npm install --save-dev extract-text-webpack-plugin # required
npm install --save-dev a-css-loader                # optional|recommended
```

### Setup

An example `webpack.config.js`

```javascript
/* webpack.config.js */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  plugins: [
    /**
    * @required
    * Configure extract text plugin to create stylesheet file
    **/
    new ExtractTextPlugin('my-stylesheet.css')
  ],
  resolve: {
    extensions: [
      '', /* This is necessary in webpack v1 */
      '.js',
      '.cssm'
    ]
  },
  module: {
    rules: [
      /**
      * @required
      **/
      {
        /* @property issuer Must be specified when using the ExtractTextPlugin  */
        issuer: /\.jsx?$/,
        test: /\.cssm?$/,
        /**
        * Tell ExtractTextPlugin to extract css contents from Union css modules
        */
        use: ExtractTextPlugin.extract({
          /* ExtractTextPlugin always needs a `use` option :/ */
          use: []
        })
      },
      /**
      * @optional
      *
      * Configure this if you prefer to write JSX when using React.
      */
      {
        test: /\.jsx?$/,
        /* Configure babel in .babelrc file  */
        use: 'babel-loader'
      },
      /**
      * @optional
      *
      * Use this rule if you want to create css-modules.
      */
      {
        test: /\.css$/,
        use: {
          loader: 'a-css-loader',
          options: { camelize: true }
        }
      }
    ]
  }
};
```
