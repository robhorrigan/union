import React from 'react';
import { mount } from 'enzyme';
import { NavItem } from '#docs/components/HeaderNav/Nav';
import { Link } from 'react-router';
import styles from '#docs/components/HeaderNav/styles';

const { join } = Array.prototype;

describe('<NavItem>', () => {
  it('creates a link pointing at "to"', () => {
    const routingMock = {currentPath: ''};
    const subject = mount(
      <NavItem routing={routingMock} to="test-path">
        Hello
      </NavItem>
    );
    const link = subject.find(Link);

    expect(link.props().to).toBe("test-path");
  });

  describe('when current path matches "to"', () => {
    it('adds the active link class', () => {
      const routingMock = {currentPath: 'test-path'};
      const subject = mount(
        <NavItem routing={routingMock} to="test-path">
          Hello
        </NavItem>
      );

      const link = subject.getDOMNode();

      expect(link.classList::join(' ')).toEqual(styles.activeLink);
    });
  });
});
