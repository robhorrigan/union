const extend = require('extend');
const Generator = require('yeoman-generator');

module.exports = class BaseGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.answers = opts.answers || {};
  }

  templatePathMapping(...path) {
    return [
      this.templatePath(...path),
      this.packageRootPath(...path)
    ];
  }

  packageRootPath(...path) {
    const { category, packageName } = this.answers;

    return this.packagesPath(category, packageName, ...path);
  }

  packagesPath(...path) {
    return this.destinationPath('packages', ...path)
  }

  storeAnswers(answers) {
    extend(this.answers, answers);
  }

  ask(questions) {
    return this.prompt(questions).then((answers) => this.storeAnswers(answers));
  }

  installInPackage(packages, options) {
    this.npmInstall(packages, options, null, { cwd: this.packageRootPath() });
  }
}
