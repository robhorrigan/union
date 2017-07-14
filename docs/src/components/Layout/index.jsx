import React from 'react';
import PropTypes from 'prop-types';
import bsGrid from '@xo-union/tk-css-grid';
import HeaderNav from '#docs/components/HeaderNav';

import styles from './styles.css';

export default function Layout({ children }) {
  return (
    <div>
      <HeaderNav />

      <div className={bsGrid.containerFluid}>
        <div className={styles.article}>
          {children}
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};
