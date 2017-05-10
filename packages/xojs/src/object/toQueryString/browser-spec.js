import toQueryString from './';

describe('xojs.object.toQueryString', () => {
  it('converts an object to a query string', () => {
    expect({ a: 1, b: 2, c: 3 }::toQueryString()).toBe('a=1&b=2&c=3');
  });
});
