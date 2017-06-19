import hasDocumentBody from './';

describe('xojs.runtime.hasDocumentBody', () => {
  it('returns false', () => {
    expect(hasDocumentBody()).toBe(false);
  });

  describe('if document is defined', () => {
    it('returns false', () => {
      global.document = {};
      expect(hasDocumentBody()).toBe(false);
      delete global.document;
    });

    describe('if body is defined', () => {
      it('returns true', () => {
        global.document = { body: {} };
        expect(hasDocumentBody()).toBe(true);
        delete global.document;
      });
    });
  });
});
