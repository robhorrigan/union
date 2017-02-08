import React, { PropTypes } from 'react';
import bsGrid from '@xo-union/bootstrap/grid';
import Header from '#docs/components/Header';
import SideNav from '#docs/components/SideNav';

import styles from './styles.css';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={bsGrid.containerFluid}>
        <div className={bsGrid.row}>
          <SideNav className={styles.sidenav} />

          <div className={styles.article}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};
