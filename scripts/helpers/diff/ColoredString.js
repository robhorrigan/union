const chalk = require('chalk');

module.exports = class ColoredString {
  constructor(string, color) {
    this.string = string;
    this.color = color;
  }

  toString() {
    return chalk[this.color](this.string);
  }
};

