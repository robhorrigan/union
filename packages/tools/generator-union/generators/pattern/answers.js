const path = require('path');
const pascalize = require('pascal-case');
const camelize = require('camelize');

module.exports = class Answers {
  constructor(answers) {
    this.patternName = answers.patternName;
    this.moduleName = pascalize(answers.patternName);
    this.camelizedModuleName = camelize(answers.patternName);

    this.patternPackagePath = path.join.bind(null, 'packages', '@xo-union', this.patternName);

    this.packageName = `@xo-union/${answers.patternName}`;

    this.patternSrcPath = path.join(this.packageName, 'src', 'index');

    this.relativePatternSrcPath = `./packages/@xo-union/${answers.patternName}/src`;
    this.packageCssPath = path.join(this.packageName, 'lib', 'css');
  }
};
