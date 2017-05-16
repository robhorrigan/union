import React from 'react';
import styles from '@xo-union/tk-component-footer-nav/lib/css';
import NavItemList from '../NavItemList';
import SocialIconItem from './SocialIconItem';

export default function SocialSection() {
  return (
    <NavItemList className={styles['social-section']}>
      <li className={styles['follow-us-nav-item']}>
        <h2 className={styles['follow-us']}>
          Follow Us
        </h2>
      </li>
      <SocialIconItem name="facebook" />
      <SocialIconItem name="twitter" />
      <SocialIconItem name="pinterest" />
      <SocialIconItem name="instagram" />
      <SocialIconItem name="googleplus" href="https://plus.google.com/+TheKnot" />
    </NavItemList>
  );
}
