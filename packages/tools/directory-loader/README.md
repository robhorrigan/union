# directory-loader
> A loader that loads a whole directory

## Usage

#### Install

```bash
npm install --save directory-loader
```

#### Webpack configurations

**In webpack.config.js file**
```javascript
module.exports = {
  /* Omitted */
  module: {
    loaders: [
      {
        test: require.resolve('./my-directory-loader.config.js'),
        loader: 'directory-loader'
      }
    ]
  }
};
```

**In directory-loader config file**

```javascript
module.exports = {
  files: {
    root: './my-special-directory',
    globs: [
      /* Make sure that files matched can be handled by your webpack loaders */
      '**/*.js'
    ]
  }
};
```

### Import directory contents

```javascript
var mySpecialDirectory = require('./my-directory-loader.config.js');

mySpecialDirectory.files.forEach((file) => {
  file.module; // The module exported by the processed file
  file.pathinfo; // path data about the file
});
```
