import React from 'react';
import styles from '@union/fields-css';

export default function Group({ children, ...props }) {
  return (
    <div className={styles.group} {...props}>
      {children}
    </div>
  );
}