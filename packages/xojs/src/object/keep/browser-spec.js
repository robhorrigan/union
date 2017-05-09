import keep from './';

describe('xojs.object.keep', () => {
  it('creates a new object with the kept keys', () => {
    expect({ a: 1, b: 2, c: 3 }::keep('a', 'b')).toEqual({ a: 1, b: 2 });
  });
});
