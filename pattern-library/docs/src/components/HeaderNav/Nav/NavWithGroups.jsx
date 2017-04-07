import React, { Component, PropTypes } from 'react';
import CSS from 'react-css-modules';
import { toGroups } from '#docs/utils/array';
import { List } from '../List';
import navCss from './styles';
import navLinkCss from './smallNavLink.css';
import NavItem from '../NavItem';

function menuList(group) {
  return group.map((item) => {
    return (
      <NavItem key={item} styles={navLinkCss} to={item.permalink()}>
        {item.title()}
      </NavItem>
    );
  });
}

function articleCompareFunction(a, b) {
  if (a.title() < b.title())
    return -1;

  if (a.title() > b.title())
    return 1;

  return 0;
}

function groupList({ items, numberOfGroups }) {
  const groups = items.sort(articleCompareFunction)::toGroups(numberOfGroups);

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
