import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

export default function Header({ size, id, children }) {
  const Element = `h${size}`;

  return (
    <Element className={styles['article-header']} id={id}>
      <a href={`#${id}`}>{children}</a>
    </Element>
  );
}

Header.propTypes = {
  size: PropTypes.number,
  id: PropTypes.string,
  children: PropTypes.node
};

