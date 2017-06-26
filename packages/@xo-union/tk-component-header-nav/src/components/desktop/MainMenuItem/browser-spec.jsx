import React from 'react';
import { mount } from 'enzyme';
import styles from '@xo-union/tk-component-header-nav/src/css';
import { classString } from '@tests/support/enzyme-component';
import { MainMenuItem } from './';

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
