import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSS from 'react-css-modules';
import { toGroups } from '#docs/utils/array';
import { List } from '../List';
import navCss from './styles';
import navLinkCss from './smallNavLink.css';
import NavItem from '../NavItem';

function menuList(group) {
  return group.map(item =>
    <NavItem key={item.title()} styles={navLinkCss} to={item.fullPath()}>
      {item.title()}
    </NavItem>
  );
}

function articleCompareFunction(a, b) {
  if (a.title() < b.title()) {
    return -1;
  }

  if (a.title() > b.title()) {
    return 1;
  }

  return 0;
}

function groupList({ items, numberOfGroups }) {
  const groups = items.sort(articleCompareFunction)::toGroups(numberOfGroups);

  return groups.map(group =>
    <List role="group" align="vertical" key={group[0].title()}>
      {menuList(group)}
    </List>
  );
}

@CSS(navCss)
export default class NavWithGroups extends Component {
  static propTypes = {
    role: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({ fullPath: PropTypes.func, title: PropTypes.func })
    ),
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
