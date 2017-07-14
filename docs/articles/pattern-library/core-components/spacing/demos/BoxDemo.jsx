import React from 'react';
import PropTypes from 'prop-types';
import spacing from '@xo-union/tk-css-spacing';
import remToPixels from '@helpers/remToPixels';
import styles from './BoxDemo.scss';

function sizeForScale(scale) {
  return spacing[`var-sp-${scale}`];
}

function formatScaleSize(scale) {
  if (scale === '0' || scale === 'auto') {
    return scale;
  }

  return `${sizeForScale(scale)} = ${remToPixels(sizeForScale(scale))}`;
}

function Row({
  scale = '0',
  left = scale,
  right = formatScaleSize(scale),
  outline = false
}) {
  const firstBoxClass = outline ? 'box-outline' : 'box-primary';
  const secondBoxClass = outline ? 'box-outline' : 'box-secondary';

  return (
    <div className={styles.row}>
      <div className={`${spacing[`mr-${scale}`]} ${styles[firstBoxClass]}`} >
        {left}
      </div>
      <div className={styles[secondBoxClass]}>
        {right}
      </div>
    </div>
  );
}

Row.propTypes = {
  scale: PropTypes.string,
  left: PropTypes.node,
  right: PropTypes.node,
  outline: PropTypes.bool
};

export default function BoxDemo() {
  const rows = [];

  for (let i = -5; i <= 12; i += 1) {
    const sizeModifier = Math.abs(i);
    let scale;

    if (i < 0) {
      scale = `down-${sizeModifier}`;
    } else if (i > 0) {
      scale = `up-${sizeModifier}`;
    } else {
      scale = 'base';
    }

    rows.push(
      <Row key={scale} scale={scale} />
    );
  }

  return (
    <div className={styles.container}>
      <Row scale="0" left="Scale" right="Size" outline />
      <Row scale="0" />
      {rows}
      <Row scale="auto" />
    </div>
  );
}
