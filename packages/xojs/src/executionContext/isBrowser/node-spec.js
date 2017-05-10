import isBrowser from './';

describe('xojs.executionContext.isBrowser', () => {
  it('returns false', () => {
    expect(isBrowser()).toBe(false);
  });
});
