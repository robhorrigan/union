import React from 'react';
import { shallow } from 'enzyme';
import HeaderNav from '#/header-nav/components/mobile/HeaderNav';
import { PrimaryMenuButton, ToolsMenuButton } from '#/header-nav/components/mobile/menuButtons';

describe('mobile/<HeaderNav>', () => {
  describe('when <PrimaryMenuButton /> is clicked', () => {
    it('renders the <PrimaryMenu />', () => {
      const subject = shallow(<HeaderNav />);
      const primaryMenuButton = subject.find(PrimaryMenuButton);

      expect(subject.find('PrimaryMenu').length).toBe(0);

      primaryMenuButton.simulate('click');

      expect(subject.find('PrimaryMenu').length).toBe(1);
    });

    it('sets the <PrimaryMenuButton /> isOpen prop to true', () => {
      const subject = shallow(<HeaderNav />);
      const primaryMenuButton = subject.find(PrimaryMenuButton);

      expect(primaryMenuButton.props().isOpen).toBe(false);

      primaryMenuButton.simulate('click');

      expect(subject.find(PrimaryMenuButton).props().isOpen).toBe(true);
    });
  });

  describe('when <ToolsMenuButton /> is clicked', () => {
    it('renders the <ToolsMenu />', () => {
      const subject = shallow(<HeaderNav />);
      const toolsMenuButton = subject.find(ToolsMenuButton);

      expect(subject.find('ToolsMenu').length).toBe(0);

      toolsMenuButton.simulate('click');

      expect(subject.find('ToolsMenu').length).toBe(1);
    });

    it('sets the <ToolsMenuButton /> isOpen prop to true', () => {
      const subject = shallow(<HeaderNav />);
      const toolsMenuButton = subject.find(ToolsMenuButton);

      expect(toolsMenuButton.props().isOpen).toBe(false);

      toolsMenuButton.simulate('click');

      expect(subject.find(ToolsMenuButton).props().isOpen).toBe(true);
    });
  });
});
