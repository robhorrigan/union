const path = require('path');
const Generator = require('yeoman-generator');
const BaseGenerator = require('../../utils/base-generator');
const { AnswersPresenter } = require('./src/answers');
const {
  COMPONENT_CHOICE,
  packageNameQuestion,
  createCssModuleQuestion,
  newPageQuestion,
  newPagePathQuestion
} = require('../../utils/questions');

module.exports = class ComponentGenerator extends BaseGenerator {
  _collectedData() {
    return new AnswersPresenter(this.answers);
  }

  _updateDocsCssModulesManifest() {
    const externalCssModulesPath = this.packagesPath('docs', 'external-cssmodules.json');
    const { cssModulePackageName } = this._collectedData();

    const modulesJSON = this.fs.readJSON(externalCssModulesPath, { modules: [] });

    modulesJSON.modules.push(cssModulePackageName);

    this.fs.writeJSON(externalCssModulesPath, modulesJSON);
  }

  _packageType() {
    return COMPONENT_CHOICE;
  }

  _cssModuleWriting() {
    const { cssModuleName } = this._collectedData();

    this.composeWith(require.resolve('../css-module'), {
      answers: {
        packageType: COMPONENT_CHOICE,
        packageName: cssModuleName
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
    const {
      wantsToCreateCssModule,
      wantsToCreateNewPage,
      pagePath
    } = collectedData;

    if (wantsToCreateCssModule) {
      this._cssModuleWriting();
    }

    const fileMapping = [
      this.templatePathMapping('package.json'),
      this.templatePathMapping('src', 'index.js'),
      this.templatePathMapping('webpack.config.js'),
      this.templatePathMapping('.babelrc')
    ];

    if (wantsToCreateNewPage) {
      fileMapping.push(
        [
          this.templatePath('documentation.md'),
          this.packagesPath('docs', 'articles', pagePath)
        ]
      );
    }

    for (const [from, to] of fileMapping) {
      this.fs.copyTpl(from, to, collectedData);
    }

    if (wantsToCreateCssModule && wantsToCreateNewPage) {
      this._updateDocsCssModulesManifest();
    }
  }

  install() {
    const npmLinkSave = require.resolve('npm-link-save');
    const { cssModuleName, wantsToCreateNewPage, wantsToCreateCssModule } = this._collectedData();

    /* Setup external dependencies */
    this.installInPackage([ 'react' ], { 'save': true });

    if (wantsToCreateNewPage) {
      const dependenciesOfDocs = [
        this.packageRootPath()
      ];

      if (wantsToCreateCssModule) {
        dependenciesOfDocs.push(this.packagesPath('components', cssModuleName))
      }

      /* Save dependency in docs project */
      this.spawnCommand(npmLinkSave, dependenciesOfDocs, { cwd: this.packagesPath('docs') })
    }

    if (wantsToCreateCssModule) {
      const pathToCssModule = this.packagesPath('components', cssModuleName);

      /* Setup css-module dependency */
      this.spawnCommand(npmLinkSave, [pathToCssModule], { cwd: this.packageRootPath() })
    }
  }

  end() {
    if (this.answers.wantsToCreateNewPage) {
      const expectedPath = this.answers.pagePath.replace(/\.[^.]+$/, '');

      this.log('A new page has been created for this component');
      this.log('  To see it, run `npm restart` at the root of the xogroup/union project');
      this.log(`  Then visit http://localhost:8080/#/${expectedPath}`);
    }
  }
};
