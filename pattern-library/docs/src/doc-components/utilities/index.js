/* eslint-disable import/prefer-default-export */

export function parseType({ name, raw, value } = {}) {
  if (name === 'shape') {
    const nestedProps = Object.keys(value).map(prop =>
      `${prop} : ${parseType(value[prop])}`
    );

    return `${name}(${nestedProps.join(', ')})`;
  } else if (name === 'custom') {
    return raw;
  } else if (name === 'arrayOf') {
    return `${name}(${parseType(value)})`;
  } else if (name === 'enum') {
    return value.map(v => v.value).join(' | ');
  }

  return name;
}

