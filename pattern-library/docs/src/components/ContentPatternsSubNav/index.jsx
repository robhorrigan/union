import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { SubNav } from '#docs/components/SubNav';
import { Nav } from '#docs/components/Nav';
import toggleable from '#docs/components/mixins/toggleable';
import bsGrid from '@xo-union/bootstrap/grid';
import styles from './styles';

const seed = [
  "Actionable hover",
  "Ad",
  "Article",
  "Ask",
  "Attribution",
  "Big steps",
  "Body",
  "Body link",
  "Breadcrumbs",
  "Categories",
  "Chat",
  "Confirmation",
  "Curated Set",
  "Educational Filters",
  "Embedded ask",
  "Empty State",
  "Engager",
  "Explanation",
  "Favorite",
  "Filters",
  "Footer",
  "Guide post",
  "Header",
  "Helper",
  "Helping human",
  "Inline CTA",
  "Inspiration",
  "Intro leaderboard",
  "Leader",
  "List",
  "Listing",
  "Listings map",
  "Native ad",
  "Navigation",
  "Product",
  "SEO link block",
  "Sharable photo",
  "Slideshow",
  "Social",
  "Social proof",
  "Stepper",
  "Story",
  "Switcher",
  "Partnership description",
  "Profile",
  "Progress",
  "Promo listing",
  "Questions",
  "See more",
  "SEO keyword block",
  "Table of contents",
  "Tags",
  "UGC upload",
  "Value prop"
];


const NUMBER_OF_BUCKETS = 7;
const bucketSize = Math.ceil(seed.length / NUMBER_OF_BUCKETS);
const buckets = seed.sort().reduce((buckets, item, i) => {
  if (i % bucketSize === 0) buckets.push([]);

  const currentBucket = buckets[buckets.length - 1];
  currentBucket.push(item);

  return buckets;
}, [ ]);

function itemToElement(item) {
  const href = item.replace(/\s+/g, '');

  return <li key={item}><a href={href}>{item}</a></li>;
}

const items = buckets.map((bucket) => {
  const menuItems = bucket.map(itemToElement);
  return (
    <li key={bucket[0]} className={bsGrid.col}>
      <ul>
        {menuItems}
      </ul>
    </li>
  );
});

@toggleable
export default class ContentPatternsSubNav extends Component {
  render() {
    return (
      <SubNav>
        {items}
      </SubNav>
    );
  }

}
