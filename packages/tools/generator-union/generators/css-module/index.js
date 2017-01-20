const extend = require('extend');

const BaseGenerator = require('../../utils/base-generator');

const Generator = require('yeoman-generator');

const { AnswersPresenter } = require('./src/answers');
const {
  typeQuestion,
  categoryQuestion,
  packageNameQuestion,
  newPageQuestion,
  CSS_MODULES_CHOICE
} = require('../../utils/questions');

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
};
