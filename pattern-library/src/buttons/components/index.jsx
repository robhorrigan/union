import React, { PropTypes } from 'react';
import styles from '@xo-union/buttons/css'

export default function Buttons(props) {
  const buttonStyling = `${styles[props.style]} ${styles[props.size]}`;
  return <button type={props.type} className={buttonStyling}>{props.buttonText}</button>;
}

Buttons.propTypes = {
  // greeting: PropTypes.string.isRequired
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

