const BaseGenerator = require('../../utils/base-generator');
const { AnswersPresenter } = require('./src/answers');
const {
  COMPONENT_CHOICE,
  packageNameQuestion,
  createCssModuleQuestion,
  newPageQuestion,
  newPagePathQuestion
} = require('../../utils/questions');

const writeDocumentationFiles = require('../../utils/write-documentation-files');
const annouceNewPage = require('../../utils/announce-new-page');

module.exports = class ComponentGenerator extends BaseGenerator {
  _collectedData() {
    return new AnswersPresenter(this.answers);
  }

  // eslint-disable-next-line class-methods-use-this
  _packageType() {
    return COMPONENT_CHOICE;
  }

  _cssModuleWriting() {
    const { cssModuleName } = this._collectedData();

    this.composeWith(require.resolve('../css-module'), {
      answers: {
        packageType: COMPONENT_CHOICE,
        packageName: cssModuleName,
        wantsToCreateNewPage: false
      }
    });
  }

  /* Run loop methods */

  prompting() {
    return this.ask([
      packageNameQuestion,
      createCssModuleQuestion,
      newPageQuestion,
      newPagePathQuestion
    ]);
  }

  writing() {
    const collectedData = this._collectedData();
    const { wantsToCreateCssModule } = collectedData;

    if (wantsToCreateCssModule) {
      this._cssModuleWriting();
    }

    const fileMapping = [
      this.templatePathMapping('package.json'),
      this.templatePathMapping('src', 'index.js'),
      this.templatePathMapping('webpack.config.js'),
      this.templatePathMapping('.babelrc')
    ];

    writeDocumentationFiles(this);

    for (const [from, to] of fileMapping) {
      this.fs.copyTpl(from, to, collectedData);
    }
  }

  install() {
    const npmLinkSave = require.resolve('npm-link-save');
    const { cssModuleName, wantsToCreateNewPage, wantsToCreateCssModule } = this._collectedData();

    /* Setup external dependencies */
    this.installInPackage(['react'], { save: true });

    if (wantsToCreateNewPage) {
      const dependenciesOfDocs = [
        this.packageRootPath()
      ];

      /* Save dependency in docs project */
      this.spawnCommand(npmLinkSave, dependenciesOfDocs, { cwd: this.packagesPath('docs') });
    }

    if (wantsToCreateCssModule) {
      const pathToCssModule = this.packagesPath('components', cssModuleName);

      /* Setup css-module dependency */
      this.spawnCommand(npmLinkSave, [pathToCssModule], { cwd: this.packageRootPath() });
    }
  }

  end() {
    annouceNewPage(this);
  }
};
