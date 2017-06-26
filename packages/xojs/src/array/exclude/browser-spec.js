import exclude from './';

describe('xojs.array.exclude', () => {
  it('excludes the matched elements', () => {
    expect([1, 2, 3]::exclude(() => true)).toEqual([]);

    expect([1, 2, 3]::exclude(() => false)).toEqual([1, 2, 3]);

    expect([1, 2, 3]::exclude(num => num === 2)).toEqual([1, 3]);
  });
});
