
export function parseType({ name, raw, value } = {}) {
  if (name === 'shape') {
    const nestedProps = [];

    for (const prop in value) {
      nestedProps.push(`${prop} : ${parseType(value[prop])}`);
    }

    return `${name}(${nestedProps.join(', ')})`;
  } else if (name === 'custom') {
    return raw;
  } else if (name === 'arrayOf') {
    return `${name}(${parseType(value)})`;
  } else if (name === 'enum') {
    return value.map((v) => v.value).join(' | ');
  } else {
    return name;
  }
}

