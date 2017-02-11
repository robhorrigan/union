const path = require('path');
const Generator = require('yeoman-generator');
const questions = require('./questions');
const Answers = require('./answers');

module.exports = class Pattern extends Generator {
  _patternName() {
    return this.answers.patternName;
  }

  promting() {
    return this.prompt([
      questions.patternName
    ]).then((answers) => {
      this.answers = answers;
    });
  }

  writing() {
    const answers = new Answers(this.answers);

    this.fs.copy(
      this.templatePath('entrypoints.json'),
      path.join('pattern-library', 'src', this._patternName(), '.entrypoints.json')
    );

    this.fs.copyTpl(
      this.templatePath('index.jsx'),
      path.join('pattern-library', 'src', this._patternName(), 'index.jsx'),
      answers
    );

    this.fs.copyTpl(
      this.templatePath('index.css'),
      path.join('pattern-library', 'src', this._patternName(), 'css', 'index.css'),
      answers
    );

    this.fs.copyTpl(
      this.templatePath('spec.jsx'),
      path.join('pattern-library', 'spec', this._patternName(), 'spec.jsx'),
      answers
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      path.join('packages', 'pattern-library', this._patternName(), 'package.json'),
      answers
    );

    this.fs.copyTpl(
      this.templatePath('doc.md'),
      path.join('pattern-library', 'docs', 'articles', `${this._patternName()}.md`),
      answers
    );
  }
};
