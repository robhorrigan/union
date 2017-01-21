const Generator = require('yeoman-generator');
const BaseGenerator = require('../../utils/base-generator');
const { AnswersPresenter } = require('./src/answers');

module.exports = class ReactComponentGenerator extends BaseGenerator {
  initializing() {
    this.storeAnswers({ category: 'components' });

    this.composeWith(require.resolve('../package'), { answers: this.answers });
  }

  writing() {
    const {
      category,
      packageName
    } = this.answers;

    const fileMapping = [
      this.templatePathMapping('src', 'index.js'),
      this.templatePathMapping('webpack.config.js'),
      this.templatePathMapping('.babelrc')
    ];

    for (const [from, to] of fileMapping) {
      this.fs.copyTpl(from, to, new AnswersPresenter(this.answers));
    }
  }

  install() {
    this.installInPackage([ 'react' ], { 'save': true });
  }
};
