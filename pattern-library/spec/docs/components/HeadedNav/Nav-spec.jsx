import React from 'react';
import { mount } from 'enzyme';
import { NavItem } from '#docs/components/HeaderNav/Nav';
import { Link } from 'react-router';
import styles from '#docs/components/HeaderNav/styles';

const { join } = Array.prototype;

describe('<NavItem>', () => {
  const defaultRoutingMock = { inPath() { return false; } };

  it('creates a link pointing at "to"', () => {
    const subject = mount(<NavItem router={defaultRoutingMock} to="test-path">Hello</NavItem>
    );
    const link = subject.find(Link);

    expect(link.props().to).toBe('test-path');
  });

  describe('when current path matches "to"', () => {
    it('adds the active link class', () => {
      const routingMock = { inPath() { return true; } };
      const subject = mount(
        <NavItem router={routingMock} to="test-path">
          Hello
        </NavItem>
      );

      const link = subject.getDOMNode();

      expect(link.classList::join(' ')).toEqual(styles.activeItem);
    });
  });

  describe('when disabled', () => {
    it('applies the disabled item class', () => {
      const subject = mount(
        <NavItem router={defaultRoutingMock} to="test-path" disabled>
          Hello
        </NavItem>
      );

      const link = subject.getDOMNode();

      expect(link.classList::join(' ')).toEqual(styles.disabledItem);
    });
  });
});
