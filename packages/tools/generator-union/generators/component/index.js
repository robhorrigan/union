const Generator = require('yeoman-generator');
const BaseGenerator = require('../../utils/base-generator');
const { AnswersPresenter } = require('./src/answers');
const {
  COMPONENT_CHOICE,
  packageNameQuestion,
  createCssModuleQuestion
} = require('../../utils/questions');

module.exports = class ComponentGenerator extends BaseGenerator {
  _packageType() {
    return COMPONENT_CHOICE;
  }

  _answers() {
    return new AnswersPresenter(this.answers);
  }

  _cssModuleWriting() {
    this.composeWith(require.resolve('../css-module'), {
      answers: {
        packageType: COMPONENT_CHOICE,
        packageName: this._answers().cssModuleName
      }
    });
  }

  /* Run loop methods */

  prompting() {
    return this.ask([
      packageNameQuestion,
      createCssModuleQuestion
    ]);
  }

  writing() {
    if (this.answers.wantsToCreateCssModule) {
      this._cssModuleWriting();
    }

    const fileMapping = [
      this.templatePathMapping('package.json'),
      this.templatePathMapping('src', 'index.js'),
      this.templatePathMapping('webpack.config.js'),
      this.templatePathMapping('.babelrc')
    ];

    for (const [from, to] of fileMapping) {
      this.fs.copyTpl(from, to, this._answers());
    }
  }

  install() {
    const npmLinkSave = require.resolve('npm-link-save');

    /* Setup external dependencies */
    this.installInPackage([ 'react' ], { 'save': true });

    /* Save dependency in docs project */
    this.spawnCommand(npmLinkSave, [this.packageRootPath()], { cwd: this.packagesPath('docs') })

    if (this.answers.wantsToCreateCssModule) {
      const pathToCssModule = this.packagesPath('components', this._answers().cssModuleName);
      /* Setup css-module dependency */
      this.spawnCommand(npmLinkSave, [pathToCssModule], { cwd: this.packageRootPath() })
    }
  }
};
