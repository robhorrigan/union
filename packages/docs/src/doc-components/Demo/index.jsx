import React, { Component, PropTypes } from 'react';
import jsxToString from 'jsx-to-string-2';
import Snippet from 'doc-components/Snippet';

function classNameLookup(dependencies) {
  const lookup = {};

  for (const dependency in dependencies) {
    for (const className in dependencies[dependency]) {
      lookup[dependencies[dependency][className]] = `${dependency}.${className}`;
    }
  }

  return lookup;
}

export default function Demo({
  children,
  cssDependencies = {},
  propOverrides = {},
  ignoreProps = [],
  ...props
}) {
  const classNames = classNameLookup(cssDependencies);
  const keyValueOverride = {
    className(value) {
      return classNames[value] || value;
    },
    ...propOverrides
  };

  return (
    <div {...props}>
      {children}
      <Snippet lang="jsx">
        {jsxToString(children, { keyValueOverride, ignoreProps })}
      </Snippet>
    </div>
  );
}

Demo.propTypes = {
  children: PropTypes.node,
  cssDependencies: PropTypes.object
}
