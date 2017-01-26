const pascalize = require('pascal-case');
const camelize = require('camelize');
const titleize = require('titleize');

exports.AnswersPresenter = class AnswersPresenter {
  constructor(answers) {
    this.componentName = answers.packageName;
    this.wantsToCreateCssModule = answers.wantsToCreateCssModule;
    this.wantsToCreateNewPage = answers.wantsToCreateNewPage;
    this.pagePath = answers.pagePath;

    this.moduleName = pascalize(answers.packageName);
    this.camelizedModuleName = camelize(answers.packageName);

    this.documentationTitle = titleize(answers.packageName);

    this.packageName = `@union/${this.componentName}`;

    this.cssModuleName = `${answers.packageName}-css`;
    this.cssModulePackageName = `@union/${this.cssModuleName}`;
  }
};

