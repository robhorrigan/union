const path = require('path');
const Generator = require('yeoman-generator');
const BaseGenerator = require('../../utils/base-generator');
const { AnswersPresenter } = require('./src/answers');
const {
  COMPONENT_CHOICE,
  packageNameQuestion,
  createCssModuleQuestion,
  newPageQuestion
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
      createCssModuleQuestion,
      newPageQuestion,
      {
        name: 'pagePath',
        message: 'Where should this page live?',
        type: 'input',
        when: (answers) => answers.wantsToCreateNewPage,
        default: (answers) => path.join('foundations', answers.packageName + '.md')
      }
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

    if (this.answers.wantsToCreateNewPage) {
      fileMapping.push(
        [
          this.templatePath('documentation.md'),
          this.packagesPath('docs', 'articles', this.answers.pagePath)
        ]
      );
    }

    for (const [from, to] of fileMapping) {
      this.fs.copyTpl(from, to, this._answers());
    }
  }

  install() {
    const npmLinkSave = require.resolve('npm-link-save');
    const answers = this._answers();

    /* Setup external dependencies */
    this.installInPackage([ 'react' ], { 'save': true });

    if (this.answers.wantsToCreateNewPage) {
      const dependenciesOfDocs = [
        this.packageRootPath()
      ];

      if (this.answers.wantsToCreateCssModule) {
        dependenciesOfDocs.push(this.packagesPath('components', answers.cssModuleName))
      }

      /* Save dependency in docs project */
      this.spawnCommand(npmLinkSave, dependenciesOfDocs, { cwd: this.packagesPath('docs') })
    }

    if (this.answers.wantsToCreateCssModule) {
      const pathToCssModule = this.packagesPath('components', answers.cssModuleName);

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
