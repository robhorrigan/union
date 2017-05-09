import withParams from './';

describe('xojs.url.withParams', () => {
  it('adds query string params to a url string', () => {
    const result = 'http://google.com'::withParams({ a: 1, b: 2 });
    expect(result).toBe('http://google.com?a=1&b=2');
  });
});
