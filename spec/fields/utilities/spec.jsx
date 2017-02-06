import { labelize, fieldId } from 'fields/utilities';

describe('utils', () => {
  describe('.labelize', () => {
    it('capitalizes all words in a string', () => {
      expect(labelize('test')).toBe('Test');
      expect(labelize('test-name')).toBe('Test Name');
    });
  });

  describe('.fieldId', () => {
    it('creates a unique-ish id', () => {
      expect(fieldId('test')).toEqual('__ff-test__')
    });
  });
});
