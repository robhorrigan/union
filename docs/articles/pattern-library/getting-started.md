---
$imports:
  '{ Snippet }': '#docs/doc-components'
---

# Getting Started

Union is an ecosystem of packages that define [The Knot](http://www.theknot.com)'s pattern library. Each package consists of either [React]() components, [CSS Modules]() or both.

## Build

### Dependencies

<Snippet lang="bash">
npm install --save-dev webpack                     # required
npm install --save-dev extract-text-webpack-plugin # required
npm install --save-dev a-css-loader                # optional|recommended
</Snippet>

### Setup

An example `webpack.config.js`

<Snippet lang="javascript">
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
      use: 'a-css-loader'
      options: {
        /* This defines camelized identifiers when css modules are imported */
        camelize: true
      }
    }
  ]
};
</Snippet>


### Essentials

To establish the base union styles in your page, you must import the `@xo-union/essentials` package.

#### Installation

<Snippet lang="bash">
npm install --save @xo-union/essentials
</Snippet>

#### Import

The essentials package does not export any object. It simply loads the global css modules.

<Snippet lang="javascript">
import '@xo-union/essentials';
</Snippet>
