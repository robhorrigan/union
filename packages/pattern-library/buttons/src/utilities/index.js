import styles from '@xo-union/buttons/lib/css';

// eslint-disable-next-line import/prefer-default-export
export function processProps({
  block,
  className = '',
  size = 'papa',
  color = 'primary',
  isCTA = false,
  ...props
}) {
  let role;
  let classList = `${styles.btn} ${styles[size]} ${styles[color]} ${className}`;

  if (typeof styles[`block-${block}`] === 'string') {
    classList += ` ${styles[`block-${block}`]}`;
  } else if (block) {
    classList += ` ${styles.block}`;
  }

  if (isCTA) {
    role = 'button';
  }

  return {
    className: classList,
    role,
    ...props
  };
}

