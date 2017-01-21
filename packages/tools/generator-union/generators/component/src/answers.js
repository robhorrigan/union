const pascalize = require('pascal-case');

exports.AnswersPresenter = class AnswersPresenter {
  constructor(answers) {
    this.moduleName = pascalize(answers.packageName);
    this.moduleAbbreviatedName = this.createAbbreviatedName(answers);
  }

  createAbbreviatedName(answers) {
    const removedNonWordCharacters = answers.packageName.replace(/\W/, '');
    const length = removedNonWordCharacters.length;
    const end = length - 1 ;
    const middle = end / 2;

    return [
      removedNonWordCharacters[0],
      removedNonWordCharacters[middle],
      removedNonWordCharacters[end]
    ].join('');
  }
};

