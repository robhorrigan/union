import React, { Component, PropTypes } from 'react';
import CSS from 'react-css-modules';
import { toGroups } from '#docs/utils/array';
import { List } from '../List';
import navCss from './styles';
import navLinkCss from './smallNavLink.css';
import NavItem from '../NavItem';

function menuList(group) {
  return group.map((item) => {
    const href = item.replace(/\s+/g, '');

    return (
      <NavItem key={item} styles={navLinkCss} to={href}>
        {item}
      </NavItem>
    );
  });
}

function groupList({ items, numberOfGroups }) {
  /* These are regular math operations on arrays */
  const groups = toGroups(items.sort(), numberOfGroups);

  return groups.map(group =>
    <List role="group" align="vertical" key={group}>
      {menuList(group)}
    </List>
  );
}

@CSS(navCss)
export default class NavWithGroups extends Component {
  static propTypes = {
    role: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
    numberOfGroups: PropTypes.number
  };

  render() {
    const { role, items, numberOfGroups, ...props } = this.props;

    return (
      <nav styleName="nav" {...props} >
        <div styleName="groups-container" role={role}>
          {groupList({ items, numberOfGroups })}
        </div>
      </nav>
    );
  }
}
