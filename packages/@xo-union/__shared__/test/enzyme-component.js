/* eslint-disable import/prefer-default-export */
const { join } = Array.prototype;

export function classString() {
  return this.getDOMNode().classList::join(' ');
}

