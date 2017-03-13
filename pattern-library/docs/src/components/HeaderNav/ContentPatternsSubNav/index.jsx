import React, { Component } from 'react';
import CSS from 'react-css-modules';
import bsGrid from '@xo-union/bootstrap/grid';
import splitArray from 'split-array';

import toggleable from '#docs/mixins/toggleable';

import NavItem from '../NavItem';
import { GridedNav } from '../Nav';
import { List } from '../List';
import contentPatternsSubNavCss from './styles.css';
import seed from './seed.json';

const NUMBER_OF_BUCKETS = 7;
const buckets = splitArray(seed.sort(), NUMBER_OF_BUCKETS);

function itemToElement(item) {
  const href = item.replace(/\s+/g, '');

  return <NavItem styles={contentPatternsSubNavCss} to={href}>{item}</NavItem>;
}

const items = buckets.map((bucket) => {
  const menuItems = bucket.map(itemToElement);

  return (
    <div key={bucket[0]} className={bsGrid.col}>
      <List role="group" align="vertical">
        {menuItems}
      </List>
    </div>
  );
});

@toggleable
@CSS(contentPatternsSubNavCss)
export default class ContentPatternsSubNav extends Component {
  render() {
    return (
      <GridedNav styleName="sub-nav" role="menu">
        {items}
      </GridedNav>
    );
  }
}
