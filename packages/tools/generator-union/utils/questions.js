const CSS_MODULES_CHOICE = exports.CSS_MODULES_CHOICE = 'css module';
const REACT_COMPONENT_CHOICE = exports.REACT_COMPONENT_CHOICE = 'react component';
const TOOL_CHOICE = exports.TOOL_CHOICE = 'tool';
const CORE_CHOICE = exports.CORE_CHOICE = 'core';
const COMPONENT_CHOICE = exports.COMPONENT_CHOICE = 'component';

exports.newPageQuestion = {
  name: 'createNewPage',
  message: 'Do you want to add a new docs page?',
  type: 'confirm',
  default: false
};

exports.categoryQuestion = {
  name: 'category',
  message: 'Which of these best describes the package?',
  type: 'list',
  choices: [
    CORE_CHOICE,
    COMPONENT_CHOICE
  ]
};

exports.typeQuestion = {
  name: 'type',
  message: 'What type of package do you want to create?',
  type: 'list',
  choices: [
    CSS_MODULES_CHOICE,
    REACT_COMPONENT_CHOICE,
    TOOL_CHOICE
  ]
};

exports.packageNameQuestion = {
  name: 'packageName',
  message: 'What is the package name?',
  validate(value) {
    if(/^@/.test(value)) {
      return "Don't use the scoped name, we'll take care of that for you.";
    }

    if(!/^[a-z-]+$/.test(value)) {
      return 'Name must be lower cased with dash delimiters';
    }

    return true;
  }
};

