const extend = require('extend');
const BaseGenerator = require('../../utils/base-generator');
const { packageNameQuestion, categoryQuestion } = require('../../utils/questions');

module.exports = class PackageGenerator extends BaseGenerator {
  prompting() {
    return this.ask([
      categoryQuestion,
      packageNameQuestion
    ]);
  }

  writing() {
    this.fs.copyTpl(...this.templatePathMapping('package.json'), this.answers);
  }
}
