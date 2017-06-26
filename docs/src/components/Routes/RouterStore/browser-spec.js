import RouterStore from './';

describe('RouterStore', () => {
  describe('.inPath', () => {
    it('return true if given path is in the current path', () => {
      const storeMock = { currentPath: '/a/b' };
      /*
       * Borrow function since configuring the correct state in the
       * actual router store is difficult/complicated
       * */
      const { inPath } = new RouterStore();

      expect(storeMock::inPath('a')).toBe(true);

      expect(storeMock::inPath('/a/b')).toBe(true);

      expect(storeMock::inPath('/a/b/c')).toBe(false);
    });
  });
});
