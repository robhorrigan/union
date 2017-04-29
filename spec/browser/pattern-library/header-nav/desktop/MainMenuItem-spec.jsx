import React from 'react';
import { mount } from 'enzyme';
import { MainMenuItem } from '#/header-nav/components/desktop/MainMenuItem';
import styles from '#/header-nav/css';
import { classString } from '#spec/support/enzyme-component';

describe('<MainMenuItem>', () => {
  it('assigns the nav-item class', () => {
    const subject = mount(<MainMenuItem />);
    expect(subject::classString()).toContain(styles['main-menu-item']);
  });

  describe('when rightOffset is specified', () => {
    it('assigns the right-offset class', () => {
      const subject = mount(<MainMenuItem rightOffset />);
      expect(subject::classString()).toContain(styles['main-menu-item-right-offset']);
    });
  });
});
