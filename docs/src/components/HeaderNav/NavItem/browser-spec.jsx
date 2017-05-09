import React from 'react';
import { mount } from 'enzyme';
import { Link } from 'react-router';
import NavItem from './';

const stylesMock = {
  container: 'container',
  item: 'item',
  'active-item': 'active-item',
  'disabled-item': 'disabled-item'
};

describe('<NavItem>', () => {
  const defaultRoutingMock = { inPath() { return false; } };

  it('creates a link pointing at "to"', () => {
    const subject = mount(
      <NavItem router={defaultRoutingMock} to="test-path">Hello</NavItem>);
    const link = subject.find(Link);

    expect(link.props().to).toBe('test-path');
  });

  it('assigns the container class', () => {
    const subject = mount(
      <NavItem styles={stylesMock} router={defaultRoutingMock} to="test-path">
        Hello
      </NavItem>
    );

    const link = subject.getDOMNode();

    expect(link.classList).toContain('container');
  });

  describe('when current path matches "to"', () => {
    it('adds the active link class', () => {
      const routingMock = { inPath() { return true; } };
      const subject = mount(
        <NavItem router={routingMock} styles={stylesMock} to="test-path">
          Hello
        </NavItem>
      );

      const link = subject.find('a').getDOMNode();

      expect(link.classList).toContain('active-item');
    });
  });

  describe('when disabled', () => {
    it('applies the disabled item class', () => {
      const subject = mount(
        <NavItem styles={stylesMock} router={defaultRoutingMock} to="test-path" disabled>
          Hello
        </NavItem>
      );

      const link = subject.find('a').getDOMNode();

      expect(link.classList).toContain('disabled-item');
    });
  });
});
