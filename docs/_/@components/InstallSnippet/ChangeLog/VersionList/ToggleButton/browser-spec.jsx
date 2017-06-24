import React from 'react';
import { mount } from 'enzyme';
import ToggleButton from './';

describe('<ToggleButton>', () => {
  describe('when isOn is true', () => {
    it('sets the button color to primary', () => {
      const subject = mount(<ToggleButton isOn />);

      const button = subject.find('Button');
      expect(button.props().color).toBe('primary');
    });
  });

  describe('when isOn is false', () => {
    it('sets the button color to tertiary', () => {
      const subject = mount(<ToggleButton isOn={false} />);

      const button = subject.find('Button');
      expect(button.props().color).toBe('tertiary');
    });
  });
});
