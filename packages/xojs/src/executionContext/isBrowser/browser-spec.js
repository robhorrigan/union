import isBrowser from './';

describe('xojs.executionContext.isBrowser', () => {
  it('returns true', () => {
    expect(isBrowser()).toBe(true);
  });
});
