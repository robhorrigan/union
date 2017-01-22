const pascalize = require('pascal-case');
const camelize = require('camelize');

exports.AnswersPresenter = class AnswersPresenter {
  constructor(answers) {
    this.packageName = answers.packageName;
    this.wantsToCreateCssModule = answers.wantsToCreateCssModule;
    this.moduleName = pascalize(answers.packageName);
    this.camelizedModuleName = camelize(answers.packageName);

    this.cssModuleName = `${answers.packageName}-css`;
    this.cssModulePackageName = `@union/${this.cssModuleName}`;
  }
};

