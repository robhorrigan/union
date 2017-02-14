const path = require('path');

const CORE_CHOICE = 'core';
const COMPONENT_CHOICE = 'components';

exports.CORE_CHOICE = CORE_CHOICE;
exports.COMPONENT_CHOICE = COMPONENT_CHOICE;

exports.newPagePathQuestion = {
  name: 'pagePath',
  message: 'Where should this page live?',
  type: 'input',
  when: answers => answers.wantsToCreateNewPage,
  default: answers => path.join('foundations', `${answers.packageName}.md`)
};

exports.newPageQuestion = {
  name: 'wantsToCreateNewPage',
  message: 'Do you want to add a new docs page?',
  type: 'confirm',
  default: true
};

exports.packageTypeQuestion = {
  name: 'packageType',
  message: 'Which of these best describes the package?',
  type: 'list',
  choices: [
    CORE_CHOICE,
    COMPONENT_CHOICE
  ]
};

exports.packageNameQuestion = {
  name: 'packageName',
  message: 'What is the package name?',
  validate(value) {
    if (/^@/.test(value)) {
      return "Don't use the scoped name, we'll take care of that for you.";
    }

    if (!/^[a-z-]+$/.test(value)) {
      return 'Name must be lower cased with dash delimiters';
    }

    return true;
  }
};

exports.createCssModuleQuestion = {
  name: 'wantsToCreateCssModule',
  type: 'confirm',
  message:
    'Do you also want to create a css-module? You probably want to add css to this component.',
  default: true
};
