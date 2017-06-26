import scan from './';

describe('xojs.string.scan', () => {
  it('scans a string and returns all matches', () => {
    const matches = 'a(1), a(2), a(3)'::scan(/a\((\d)\)/);

    expect(matches.length).toBe(3);

    expect(matches.map(m => m[1])).toEqual(['1', '2', '3']);
  });
});
