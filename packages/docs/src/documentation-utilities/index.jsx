import React, { Component } from 'react';
import bsTables from '@union/bootstrap/lib/tables';
import jsxToString from 'jsx-to-string';
import PrismJs from 'prismjs';
import '!imports-loader?Prism=prismjs!prismjs/components/prism-jsx';
import '!imports-loader?Prism=prismjs!prismjs/components/prism-bash';

function classNameLookup(dependencies) {
  const lookup = {};

  for (const dependency in dependencies) {
    for (const className in dependencies[dependency]) {
      lookup[dependencies[dependency][className]] = `${dependency}.${className}`;
    }
  }

  return lookup;
}

export function Demo({ children, dependsOn = {}}) {
  const classNames = classNameLookup(dependsOn);
  const keyValueOverride = {
    className(value) {
      return classNames[value] || value;
    }
  };

  return (
    <div>
      {children}
      <Snippet lang="jsx">
        {jsxToString(children, { keyValueOverride })}
      </Snippet>
    </div>
  );
}

export class Snippet extends Component {
  componentDidMount() {
    PrismJs.highlightElement(this.codeTag)
  }

  componentDidUpdate() {
    PrismJs.highlightElement(this.codeTag)
  }

  render() {
    const {
      lang,
      children
    } = this.props;

    return (
      <pre>
        <code className={`language-${lang}`} ref={(el) => this.codeTag = el}>
          {children}
        </code>
      </pre>
    )
  }
}

export function PropTypesTable({ metadata }) {
  const tableBody = [];

  for (const prop in metadata) {
    if (Object.prototype.hasOwnProperty.call(metadata, prop)) {
      const defaultValue = metadata[prop].defaultValue;
      const type = metadata[prop].type;
      const name = metadata[prop].required ? `* ${prop}` : prop
      const description = metadata[prop].description

      tableBody.push(
        <tr key={prop}>
          <td>
            {name}
          </td>

          <td>
            {type && type.name}
          </td>

          <td>
            {description}
          </td>

          <td>
            {defaultValue && defaultValue.value}
          </td>
        </tr>
      );
    }
  }

  return (
    <table className={[bsTables.table, bsTables.tableInverse, bsTables.tableBordered].join(' ')}>
      <thead>
        <tr>
          <th>
            name
          </th>
          <th>
            type
          </th>
          <th>
            description
          </th>

          <th>
            default
          </th>
        </tr>
      </thead>
      <tbody>
        {tableBody}
      </tbody>
    </table>
  );
}
