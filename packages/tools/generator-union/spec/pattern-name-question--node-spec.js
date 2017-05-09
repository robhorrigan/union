const { patternName } = require('../generators/pattern/questions');

describe('pattern name question', () => {
  describe('.validate', () => {
    it('Does not allow "scoped" names', () => {
      const result = patternName.validate('@test/value');

      expect(result).toContain("Don't use the scoped name");
    });

    it('Only allows lower cases and dashes', () => {
      const result1 = patternName.validate('My_Pattern');
      const result2 = patternName.validate('my-pattern');

      expect(result1).toContain('Name must be lower cased with dash delimiters');
      expect(result2).toBe(true);
    });
  });
});
