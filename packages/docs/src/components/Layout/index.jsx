import React from 'react';
import Header from 'components/Header';
import SideNav from 'components/SideNav';

import styles from './styles.css';
import bsGrid from '@union/bootstrap/lib/grid';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={bsGrid.containerFluid}>
        <div className={bsGrid.row}>
          <SideNav className={styles.sidenav} />

          <div className={bsGrid.col}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
