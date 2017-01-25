import React, { Component } from 'react';
import jsxToString from 'jsx-to-string-2';
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
