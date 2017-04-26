import React, { PropTypes } from 'react';
import bsGrid from '@xo-union/bootstrap/grid';
import HeaderNav from '#docs/components/HeaderNav';

import styles from './styles.css';

export default function Layout({ children }) {
  return (
    <div>
      <HeaderNav />

      <div className={bsGrid.containerFluid}>
        <div className={bsGrid.row}>
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
