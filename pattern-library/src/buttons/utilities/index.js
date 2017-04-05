import styles from '@xo-union/buttons/css'

export function processProps({ block, className, size = 'papa', color = 'primary', ...props }) {
  let classList = `${styles.btn} ${styles[size]} ${styles[color]} ${className}`;

  if (typeof block === 'string') {
    classList += ` ${styles[`block-${block}`]}`;
  } else if (block) {
    classList += ` ${styles.block}`;
  }

  return {
    className: classList,
    ...props
  }
}

