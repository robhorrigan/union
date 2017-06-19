import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-header-nav/lib/css';
import { autobind } from 'core-decorators';
import SubMenu, { SubMenuLink } from '../../SubMenu';
import BackMenuItem from '../BackMenuItem';
import * as MenuFactories from '../../menuFactories';

function CopyRightMenuItem() {
  return (
    <li className={styles['sub-menu-copy-right-item']}>
      © theknot.com 1997-{(new Date()).getFullYear()}
    </li>
  );
}

function PrimaryMenuItemTemplate({ label, onClick }) {
  return (
    <SubMenuLink role="button" onClick={onClick}>
      {label}
    </SubMenuLink>
  );
}

PrimaryMenuItemTemplate.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

function OpenPrimaryMenuTemplate({ label, onClose, children }) {
  return (
    <SubMenu className={styles['mobile-menu']} >
      <BackMenuItem label={label} onClick={onClose} />
      {children}
    </SubMenu>
  );
}

OpenPrimaryMenuTemplate.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
};

function ClosedPrimaryMenu({ onOpen, ...props }) {
  const topLevelItems = MenuFactories.topLevelFactories().map(FactoryComponent => (
    <FactoryComponent
      key={FactoryComponent}
      onClick={() => onOpen(FactoryComponent)}
      Template={PrimaryMenuItemTemplate}
    />
  ));

  return (
    <SubMenu className={styles['primary-mobile-menu']} {...props}>
      {topLevelItems}
      <li className={styles['sub-menu-divider-item']} />
      <SubMenuLink href="/content/help">
        Customer Service
      </SubMenuLink>
      <SubMenuLink href="http://help.theknot.com/forums/263843-the-knot-beta-desktop-feedback">
        Send Feedback
      </SubMenuLink>
      <SubMenuLink href="/privacy-policy">
        Privacy Policy
      </SubMenuLink>
      <SubMenuLink href="/terms-and-conditions">
        Terms of Use
      </SubMenuLink>
      <SubMenuLink href="/account/settings">
        Account Settings
      </SubMenuLink>
      <CopyRightMenuItem />
    </SubMenu>
  );
}

ClosedPrimaryMenu.propTypes = {
  onOpen: PropTypes.func.isRequired
};

export class PrimaryMenu extends Component {
  state = {
    SubMenuComponent: null
  };

  @autobind
  openSubMenu(SubMenuComponent) {
    this.setState({ SubMenuComponent });
  }

  @autobind
  closeSubMenu() {
    this.setState({ SubMenuComponent: null });
  }

  render() {
    const { SubMenuComponent } = this.state;

    if (SubMenuComponent) {
      return <SubMenuComponent Template={OpenPrimaryMenuTemplate} onClose={this.closeSubMenu} />;
    }

    return <ClosedPrimaryMenu onOpen={this.openSubMenu} />;
  }
}

export function ToolsMenu(props) {
  return (
    <MenuFactories.Tools {...props} Template={SubMenu} className={styles['mobile-menu']} />
  );
}
