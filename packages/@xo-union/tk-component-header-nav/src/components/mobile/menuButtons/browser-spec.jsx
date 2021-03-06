import React from 'react';
import { mount } from 'enzyme';
import { PrimaryMenuButton, ToolsMenuButton } from './';

describe('<MobileMenuButton>', () => {
  describe('<PrimaryMenuButton>', () => {
    describe('when isOpen is specified as true', () => {
      it('uses the close icon', () => {
        const subject = mount(<PrimaryMenuButton isOpen />);
        const icon = subject.find('Icon');

        expect(icon.props().name).toBe('close');
      });
    });

    describe('when isOpen is specified as false', () => {
      it('uses the close icon', () => {
        const subject = mount(<PrimaryMenuButton isOpen={false} />);
        const icon = subject.find('Icon');

        expect(icon.props().name).toBe('hamburger');
      });
    });
  });

  describe('<ToolsMenuButton>', () => {
    describe('when isOpen is specified as true', () => {
      it('uses the close icon', () => {
        const subject = mount(<ToolsMenuButton isOpen />);
        const icon = subject.find('Icon');

        expect(icon.props().name).toBe('close');
      });
    });

    describe('when isOpen is specified as false', () => {
      it('uses the close icon', () => {
        const subject = mount(<ToolsMenuButton isOpen={false} />);
        const icon = subject.find('Icon');

        expect(icon.props().name).toBe('nav-signup-mobile');
      });
    });
  });
});
