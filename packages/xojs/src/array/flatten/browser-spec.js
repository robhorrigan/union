import flatten from './';

describe('xojs.array.flatten', () => {
  it('flattens an array', () => {
    expect([1, 2, 3, [4, 5, 6], 7]::flatten()).toEqual([1, 2, 3, 4, 5, 6, 7]);

    expect([1, 2, 3, [4, [5], 6], 7]::flatten()).toEqual([1, 2, 3, 4, [5], 6, 7]);
  });
});
