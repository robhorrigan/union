const pascalize = require('pascal-case');

const {
  CSS_MODULES_CHOICE
} = require('./questions');

module.exports = {
  [CSS_MODULES_CHOICE](generator) {
    const { answers } = generator;
    const {
      category,
      packageName
    } = answers;

    const fileMapping = [
      generator.templatePathMapping('webpack.config.js'),
      generator.templatePathMapping('src', 'index.css')
    ];


    for (const [from, to] of fileMapping) {
      generator.fs.copyTpl(from, to, answers);
    }
  }
}

