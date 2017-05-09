const path = require('path');
const Generator = require('yeoman-generator');
const questions = require('./questions');
const Answers = require('./answers');

const patternLibDocsPath = path.join.bind(null, 'docs');

module.exports = class Pattern extends Generator {
  _patternName() {
    return this.answers.patternName;
  }

  promting() {
    return this.prompt([
      questions.patternName
    ]).then((answers) => {
      this.answers = new Answers(answers);
    });
  }

  writing() {
    const { answers } = this;

    this.fs.copy(
      this.templatePath('entrypoints.json'),
      answers.patternPackagePath('entrypoints.json')
    );

    this.fs.copyTpl(
      this.templatePath('index.jsx'),
      answers.patternPackagePath('src', 'index.jsx'),
      answers
    );

    this.fs.copyTpl(
      this.templatePath('index.css'),
      answers.patternPackagePath('src', 'css', 'index.css'),
      answers
    );

    this.fs.copyTpl(
      this.templatePath('spec.jsx'),
      answers.patternPackagePath('src', 'browser-spec.jsx'),
      answers
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      answers.patternPackagePath('package.json'),
      answers
    );

    this.fs.copyTpl(
      this.templatePath('doc.md'),
      patternLibDocsPath('articles', `${this._patternName()}.md`),
      answers
    );
  }

  end() {
    this.log(`Congrats! You just created the ${this._patternName()} pattern!\n`);
    this.log("What's next?\n");
    this.log(
      '- Rebuild the patterns -- This will make the new pattern available in the docs and tests');
    this.log('\n      npm run build.patterns\n');
    this.log('- Run the tests');
    this.log('\n      npm run test.browser\n');
    this.log('- See the new pattern');
    this.log(`\n      open http://localhost:8080/${this._patternName()}\n`);
  }
};
