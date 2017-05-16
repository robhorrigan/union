import React from 'react';
import { mount } from 'enzyme';
import { NewWindowAnchor } from './';

describe('<NewWindowAnchor>', () => {
  describe('when target="_blank"', () => {
    it('sets the proper rel', () => {
      const subject = mount(<NewWindowAnchor />);
      expect(subject.find('a').getDOMNode().target).toBe('_blank');
      expect(subject.find('a').getDOMNode().rel).toBe('noopener noreferrer');
    });
  });
});
