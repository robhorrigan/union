import React, { Component } from 'react';
import { Link } from 'react-router';
import toggleable from '#docs/mixins/toggleable';
import bsGrid from '@xo-union/bootstrap/grid';
import splitArray from 'split-array';
import seed from './seed.json';

const NUMBER_OF_BUCKETS = 7;
const buckets = splitArray(seed.sort(), NUMBER_OF_BUCKETS);

function itemToElement(item) {
  const href = item.replace(/\s+/g, '');

  return (
    <li key={item}>
      <Link to={href}>{item}</Link>
    </li>
  );
}

const items = buckets.map((bucket) => {
  const menuItems = bucket.map(itemToElement);
  return (
    <div key={bucket[0]} className={bsGrid.col}>
      <ul role="group">
        {menuItems}
      </ul>
    </div>
  );
});

@toggleable
export default class ContentPatternsSubNav extends Component {
  render() {
    return (
      <nav>
        {items}
      </nav>
    );
  }
}
