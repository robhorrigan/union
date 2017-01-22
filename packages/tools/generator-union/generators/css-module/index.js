const Generator = require('yeoman-generator');
const BaseGenerator = require('../../utils/base-generator');
const { AnswersPresenter } = require('./src/answers');
const {
  packageNameQuestion,
  categoryQuestion
} = require('../../utils/questions');

module.exports = class CssModuleGenerator extends BaseGenerator {
  prompting() {
    const questions = [];

    if (!this.answers.packageName) {
      questions.unshift(packageNameQuestion);
    }

    if (!this.answers.category) {
      questions.unshift(categoryQuestion);
    }

    return this.ask(questions);
  }

  writing() {
    const {
      category,
      packageName
    } = this.answers;

    const fileMapping = [
      this.templatePathMapping('package.json'),
      this.templatePathMapping('src', 'index.css'),
      this.templatePathMapping('webpack.config.js'),
    ];

    for (const [from, to] of fileMapping) {
      this.fs.copyTpl(from, to, new AnswersPresenter(this.answers));
    }
  }

  install() {
    this.installInPackage([ 'css-module-builder' ], { save: true });
  }
};
