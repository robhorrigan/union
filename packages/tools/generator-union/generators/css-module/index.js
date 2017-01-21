const Generator = require('yeoman-generator');
const BaseGenerator = require('../../utils/base-generator');
const { AnswersPresenter } = require('./src/answers');

module.exports = class CssModuleGenerator extends BaseGenerator {
  initializing() {
    this.composeWith(require.resolve('../package'), { answers: this.answers });
  }

  writing() {
    const {
      category,
      packageName
    } = this.answers;

    const fileMapping = [
      this.templatePathMapping('src', 'index.css'),
      this.templatePathMapping('webpack.config.js'),
    ];

    for (const [from, to] of fileMapping) {
      this.fs.copyTpl(from, to, new AnswersPresenter(this.answers));
    }
  }

  install() {
    this.installInPackage([ 'css-module-builder' ], { 'save': true });
  }
};
