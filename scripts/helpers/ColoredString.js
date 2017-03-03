const chalk = require('chalk');

module.exports = class ColoredString {
  constructor(string, colorRules) {
    this.string = string;
    this.colorRules = colorRules;
  }

  toString() {
    return chalk[this.colorRules(this.string)](this.string);
  }
};

