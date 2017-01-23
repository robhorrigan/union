const pascalize = require('pascal-case');
const titleize = require('titleize');

exports.AnswersPresenter = class AnswersPresenter {
  constructor(answers) {
    this.packageName = answers.packageName;
    this.packageType = answers.packageType;
    this.wantsToCreateNewPage = answers.wantsToCreateNewPage;
    this.pagePath = answers.pagePath;

    this.moduleName = pascalize(answers.packageName);
    this.componentOrModuleName = answers.packageName.replace(/-css$/, '');
    this.documentationTitle = titleize(answers.packageName);

    this.cssModulePackageName = `@union/${this.packageName}`;
  }
};

