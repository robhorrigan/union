import { parseType } from '#/doc-components/utilities';

describe('utils', () => {
  describe('.parseType', () => {
    describe('type name is "shape"', () => {
      it('returns a readable type format', () => {
        const result = parseType({
          name: 'shape',
          value: {
            attribute: {
              name: 'TestType'
            }
          }
        });

        expect(result).toBe('shape(attribute : TestType)');
      });
    });

    describe('type name is "custom"', () => {
      it('returns a readable type format', () => {
        const result = parseType({
          name: 'custom',
          raw: 'TestType'
        });

        expect(result).toBe('TestType');
      });
    });

    describe('type name is "arrayOf"', () => {
      it('returns a readable type format', () => {
        const result = parseType({
          name: 'arrayOf',
          value: {
            name: 'custom',
            raw: 'TestType'
          }
        });

        expect(result).toBe('arrayOf(TestType)');
      });
    });

    describe('type name is "enum"', () => {
      it('returns a readable type format', () => {
        const result = parseType({
          name: 'enum',
          value: [
            { value: 'Type1' },
            { value: 'Type2' }
          ]
        });

        expect(result).toBe('Type1 | Type2');
      });
    });
  });

  describe('otherwise', () => {
    it('returns the name', () => {
      const result = parseType({ name: 'unknown' });

      expect(result).toBe('unknown');
    });
  });
});
