// eslint-disable-next-line import/prefer-default-export
export function parseType({ name, raw, value } = {}) {
  if (name === 'shape') {
    const nestedProps = Object.keys(value).map(prop =>
      `${prop} : ${parseType(value[prop])}`
    );

    return `{ ${nestedProps.join(', ')} }`;
  } else if (name === 'custom') {
    return raw;
  } else if (name === 'arrayOf') {
    return `${name}(${parseType(value)})`;
  } else if (name === 'enum' || name === 'union') {
    return value.map(v => parseType(v)).join(' | ');
  }

  return name || value;
}

