const extend = require('extend');
const BaseGenerator = require('../../utils/base-generator');
const { packageNameQuestion, categoryQuestion } = require('../../utils/questions');

module.exports = class PackageGenerator extends BaseGenerator {
  prompting() {
    const questions = [packageNameQuestion];

    if (!this.answers.category) {
      questions.unshift(categoryQuestion);
    }
    return this.ask(questions);
  }

  writing() {
    this.fs.copyTpl(...this.templatePathMapping('package.json'), this.answers);
  }
}
