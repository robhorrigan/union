import withPath from './';

describe('xojs.url.withPath', () => {
  it('appends paths', () => {
    expect('http://google.com'::withPath('a', 'b', 'c')).toBe('http://google.com/a/b/c');
  });
});
