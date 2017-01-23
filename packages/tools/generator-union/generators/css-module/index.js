const Generator = require('yeoman-generator');
const BaseGenerator = require('../../utils/base-generator');
const { AnswersPresenter } = require('./src/answers');
const {
  packageNameQuestion,
  packageTypeQuestion,
  newPageQuestion,
  newPagePathQuestion
} = require('../../utils/questions');

const updateDocsCssModulesManifest = require('../../utils/update-docs-css-modules-manifest');
const writeDocumentationFiles = require('../../utils/write-documentation-files');
const annouceNewPage = require('../../utils/announce-new-page');

module.exports = class CssModuleGenerator extends BaseGenerator {
  _collectedData() {
    return new AnswersPresenter(this.answers);
  }

  prompting() {
    const questions = [];

    if (!this.answers.packageName) {
      questions.unshift(packageNameQuestion);
    }

    if (!this.answers.packageType) {
      questions.unshift(packageTypeQuestion);
    }

    if (this.answers.wantsToCreateNewPage !== false) {
      questions.push(newPageQuestion);
      questions.push(newPagePathQuestion);
    }

    return this.ask(questions);
  }

  writing() {
    const { wantsToCreateNewPage } = this._collectedData();

    const fileMapping = [
      this.templatePathMapping('package.json'),
      this.templatePathMapping('src', 'index.css'),
      this.templatePathMapping('webpack.config.js'),
    ];


    for (const [from, to] of fileMapping) {
      this.fs.copyTpl(from, to, this._collectedData());
    }

    if (wantsToCreateNewPage) {
      updateDocsCssModulesManifest(this);
    }

    writeDocumentationFiles(this);
  }

  install() {
    const npmLinkSave = require.resolve('npm-link-save');
    const { wantsToCreateNewPage } = this._collectedData();

    this.installInPackage([ 'css-module-builder' ], { save: true });

    if (wantsToCreateNewPage) {
      this.spawnCommand(npmLinkSave, [this.packageRootPath()], { cwd: this.packagesPath('docs') })
    }
  }

  end() {
    annouceNewPage(this);
  }
};
