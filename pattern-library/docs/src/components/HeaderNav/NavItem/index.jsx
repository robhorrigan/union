import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { inject, observer } from 'mobx-react';

import styles from './styles.css';

import { MenuItem } from '../Menu';

@inject('router')
@observer
export class NavItem extends Component {
  static WithSubNav = @inject('toggler') class extends Component {
    render() {
      const { toggles, to, toggler, ...props } = this.props;

      return (
        <NavItem
          to={to}
          aria-owns={toggles}
          aria-haspopup
          onMouseEnter={() => toggler.show(toggles)}
          onMouseLeave={() => toggler.hide(toggles)}
          {...props} />
      );
    }
  }

  static propTypes = {
    router: PropTypes.shape({ currentPath: PropTypes.string }),
    to: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node
  };

  get cssClass() {
    const { router, to, disabled } = this.props;

    if (disabled) {
      return styles.disabledItem;
    }

    if (router.inPath(to)) {
      return styles.activeItem;
    }

    return styles.navItem;
  }

  render() {
    const {
      to,
      router,
      disabled,
      ...props
    } = this.props;

    return (
      <MenuItem
        role="menuitem"
        styles={{container: styles.navItemContainer, link: this.cssClass }}
        to={to}
        {...props} />
    );
  }
}
