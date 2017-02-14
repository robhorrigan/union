const pascalize = require('pascal-case');
const camelize = require('camelize');

module.exports = class Answers {
  constructor(answers) {
    this.patternName = answers.patternName;
    this.moduleName = pascalize(answers.patternName);
    this.camelizedModuleName = camelize(answers.patternName);
    this.patternSrcPath = `#/${answers.patternName}`;
    this.patternActualSrcPath = `./pattern-library/src/${answers.patternName}`;
    this.patternSpecPath = `./pattern-library/spec/${answers.patternName}`;
    this.packageName = `@xo-union/${answers.patternName}`;
    this.packageCssPath = `${this.packageName}/css`;
  }
};
