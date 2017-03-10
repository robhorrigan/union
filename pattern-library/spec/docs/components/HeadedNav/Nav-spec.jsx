import React from 'react';
import { mount } from 'enzyme';
import { NavItem } from '#docs/components/HeaderNav/Nav';
import { Link } from 'react-router';
import styles from '#docs/components/HeaderNav/styles';

const { join } = Array.prototype;

describe('<NavItem>', () => {
  it('creates a link pointing at "to"', () => {
    const routingMock = { inPath() { return false; } };
    const subject = mount(<NavItem router={routingMock} to="test-path">Hello</NavItem>
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
});
