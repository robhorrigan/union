const path = require('path');
const pascalize = require('pascal-case');
const camelize = require('camelize');

module.exports = class Answers {
  constructor(answers) {
    this.patternName = answers.patternName;
    this.moduleName = pascalize(answers.patternName);
    this.camelizedModuleName = camelize(answers.patternName);

    this.patternPackagePath = path.join.bind(null, 'packages', 'pattern-library', this.patternName);
    this.patternSpecPath =
        path.join.bind(null, 'spec', 'browser', 'pattern-library', this.patternName, 'spec.jsx');

    this.packageName = `@xo-union/${answers.patternName}`;

    this.patternSrcPath = path.join(this.packageName, 'src', 'index');

    this.relativePatternSrcPath = `./packages/pattern-library/${answers.patternName}/src`;
    this.relativePatternSpecPath = `./spec/browser/pattern-library/${answers.patternName}`;
    this.packageCssPath = path.join(this.packageName, 'lib', 'css');
  }
};
