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
      <SocialIconItem name="facebook" trackableProps={{ selection: 'facebook' }} />
      <SocialIconItem name="twitter" trackableProps={{ selection: 'twitter' }} />
      <SocialIconItem name="pinterest" trackableProps={{ selection: 'pinterest' }} />
      <SocialIconItem name="instagram" trackableProps={{ selection: 'instagram' }} />
      <SocialIconItem name="googleplus" href="https://plus.google.com/+TheKnot" trackableProps={{ selection: 'google plus' }} />
    </NavItemList>
  );
}
