const pascalize = require('pascal-case');

exports.AnswersPresenter = class AnswersPresenter {
  constructor(answers) {
    this.moduleName = pascalize(answers.packageName);
    this.packageName = answers.packageName;
    this.componentOrModuleName = answers.packageName.replace(/-css$/, '');
  }
};

