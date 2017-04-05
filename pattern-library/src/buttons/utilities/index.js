import styles from '@xo-union/buttons/css';

// eslint-disable-next-line import/prefer-default-export
export function processProps({
  block,
  className = '',
  size = 'papa',
  color = 'primary',
  ...props
}) {
  let classList = `${styles.btn} ${styles[size]} ${styles[color]} ${className}`;

  if (typeof styles[`block-${block}`] === 'string') {
    classList += ` ${styles[`block-${block}`]}`;
  } else if (block) {
    classList += ` ${styles.block}`;
  }

  return {
    className: classList,
    ...props
  };
}

