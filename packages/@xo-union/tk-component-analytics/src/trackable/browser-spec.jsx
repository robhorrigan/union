import { createTrackableProps } from './';

describe('createTrackableProps', () => {
  describe('when selection is not specified', () => {
    it('returns an object with "data-trackable" : true', () => {
      const result = createTrackableProps();

      expect(result).toEqual({ 'data-trackable': true });
    });
  });

  describe('when selection is specified', () => {
    it('returns an object with "data-trackable-selection"', () => {
      const result = createTrackableProps({ selection: 'test' });

      expect(result).toEqual({ 'data-trackable-selection': 'test' });
    });
  });

  describe('when group is specified', () => {
    it('returns an object with "data-trackable-group"', () => {
      const result = createTrackableProps({ group: 'test' });

      expect(result['data-trackable-group']).toBe('test');
    });
  });
});
