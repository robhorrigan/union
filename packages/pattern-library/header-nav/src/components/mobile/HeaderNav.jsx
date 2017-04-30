import React, { Component } from 'react';
import styles from '@xo-union/header-nav/lib/css';

import Logo from '../Logo';
import { ToolsMenuButton, PrimaryMenuButton } from './menuButtons';
import { PrimaryMenu, ToolsMenu } from './menus';

export default class HeaderNav extends Component {
  state = {
    CurrentMenuComponent: null
  };

  getButtonProps(MenuComponent) {
    return {
      onClick: () => this.toggle(MenuComponent),
      isOpen: this.menuIsOpen(MenuComponent)
    };
  }

  menuIsOpen(MenuComponent) {
    return this.state.CurrentMenuComponent === MenuComponent;
  }

  toggle(MenuComponent) {
    if (this.menuIsOpen(MenuComponent)) {
      this.setState({ CurrentMenuComponent: null });
      return;
    }

    this.setState({ CurrentMenuComponent: MenuComponent });
  }

  render() {
    const { CurrentMenuComponent } = this.state;

    return (
      <div className={styles['mobile-header-nav']}>
        <ul className={styles['mobile-nav-item-list']}>
          <PrimaryMenuButton {...this.getButtonProps(PrimaryMenu)} />
          <Logo />
          <ToolsMenuButton {...this.getButtonProps(ToolsMenu)} />
        </ul>
        {CurrentMenuComponent && <CurrentMenuComponent {...this.props} />}
      </div>
    );
  }
}
