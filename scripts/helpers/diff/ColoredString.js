import chalk from 'chalk';

export default class ColoredString {
  constructor(string, color) {
    this.string = string;
    this.color = color;
  }

  toString() {
    return chalk[this.color](this.string);
  }
}

