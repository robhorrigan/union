import React, { Component, PropTypes } from 'react';
import CSS from 'react-css-modules';
import { Link } from 'react-router';
import { inject, observer } from 'mobx-react';

import styles from './styles.css';

import { Item } from '../List';

@inject('router')
@observer
@CSS(styles)
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

  get linkStyle() {
    const { router, to, disabled } = this.props;

    if (disabled) {
      return 'disabled-item';
    }

    if (router.inPath(to)) {
      return 'active-item';
    }

    return 'item';
  }

  get modifiedStyles() {
    const { styles } = this.props;
    const { container } = styles;
    const link = styles[this.linkStyle];

    return { container, link };
  }

  render() {
    const {
      to,
      router,
      disabled,
      styles,
      ...props
    } = this.props;

    return (
      <Item
        role="menuitem"
        styles={this.modifiedStyles}
        to={to}
        {...props} />
    );
  }
}
