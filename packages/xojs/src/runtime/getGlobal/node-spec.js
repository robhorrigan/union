import getGlobal from './';

describe('xojs.runtime.getGlobal', () => {
  it('is global', () => {
    expect(getGlobal()).toBe(global);
  });

  describe('if window is defined', () => {
    it('returns window', () => {
      global.window = {};

      expect(getGlobal()).toBe(global.window);
      delete global.window;
    });
  });

  describe('if self is defined', () => {
    it('returns self', () => {
      global.self = {};

      expect(getGlobal()).toBe(global.self);
      delete global.self;
    });
  });
});
