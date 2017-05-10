import contains from './';

describe('xojs.string.callbacks.contains', () => {
  it('returns a closured callback that matches against the given string', () => {
    expect(contains('subString')('subString in a large string')).toBe(true);
  });
});
