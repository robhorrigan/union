import React, { Component, PropTypes } from 'react';
import CSS from 'react-css-modules';
import { inject, observer } from 'mobx-react';
import Toggler from '#docs/mixins/toggleable/toggler';
import navItemCss from './styles.css';
import { Item } from '../List';

@inject('toggler')
export class NavItemWithSubNav extends Component {
  static propTypes = {
    toggles: PropTypes.string.isRequired,
    toggler: PropTypes.instanceOf(Toggler)
  };

  render() {
    const { toggles, toggler, ...props } = this.props;
    return (
      <NavItem
        aria-haspopup
        aria-owns={toggles}
        onMouseEnter={() => toggler.show(toggles)}
        onMouseLeave={() => toggler.hide(toggles)}
        {...props}
      />
    );
  }
}


@inject('router')
@observer
@CSS(navItemCss)
export default class NavItem extends Component {
  static propTypes = {
    router: PropTypes.shape({ currentPath: PropTypes.string }),
    to: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    styles: PropTypes.shape({
      'disabled-item': PropTypes.string,
      'active-item': PropTypes.string,
      item: PropTypes.string,
      container: PropTypes.string
    })
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
    const { container } = this.props.styles;
    const link = this.props.styles[this.linkStyle];

    return { container, link };
  }

  render() {
    const {
      to,
      router, // eslint-disable-line no-unused-vars
      disabled, // eslint-disable-line no-unused-vars
      styles, // eslint-disable-line no-unused-vars
      ...props
    } = this.props;

    return (
      <Item
        role="menuitem"
        styles={this.modifiedStyles}
        to={to}
        {...props}
      />
    );
  }
}
