import values from './';

describe('xojs.object.values', () => {
  it('gets the values of an object', () => {
    expect({ a: 1, b: 2 }::values()).toEqual([1, 2]);
  });
});
