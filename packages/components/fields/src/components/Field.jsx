import React, { PropTypes as T } from 'react';
import humanize from 'humanize-string';
import styles from '@union/fields-css';

const classMap = {
  neutral: styles.field,
  invalid: styles.invalidField,
  valid: styles.validField
};

export default function Field({
  name,
  validationMessage,
  label = humanize(name),
  state = 'neutral',
  ...props
}) {
  const id = name + Date.now();

  const inputClass = classMap[state];

  if (!inputClass) {
    throw new Error(`${state} is not supported`);
  }

  return (
    <div className={styles.fieldContainer}>
      <input className={inputClass} id={id} name={name} {...props} placeholder=" " />
      <label className={styles.fieldLabel} htmlFor={id} > { label } </label>
      <div className={styles.requirements}>{validationMessage}</div>
    </div>
  );
}

Field.propTypes = {
  /**
   * Name used for input element
   */
  name: T.string.isRequired,
  /**
   * The input's label string
   */
  label: T.string,
  /**
   * Render state
   */
  state: T.oneOf(['neutral', 'valid', 'invalid']),
  /**
   * Validation message used when field is invalid
   */
  validationMessage: T.string
};
