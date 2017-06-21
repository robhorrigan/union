import React from 'react';
import PropTypes from 'prop-types';
import jsxToString from 'jsx-to-string-2';
import Snippet from '@components/Snippet';

const keys = Object.keys;

function classNameLookup(dependencies) {
  const lookup = {};

  keys(dependencies).forEach((dependency) => {
    keys(dependencies[dependency]).forEach((className) => {
      lookup[dependencies[dependency][className]] = `${dependency}.${className}`;
    });
  });

  return lookup;
}

/**
 * Use this component to demo other components
 */
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
      return classNames[value] || JSON.stringify(value);
    },
    ...propOverrides
  };

  return (
    <div {...props}>
      <Snippet lang="jsx">
        {jsxToString(children, { keyValueOverride, ignoreProps })}
      </Snippet>
      {children}
    </div>
  );
}

Demo.propTypes = {
  /**
   * Must be a single node. This node will be rendered and stringified to create a code snippet.
   */
  children: PropTypes.node.isRequired,
  /**
   * This is used to improve rendering of react components when they depend on css modules. The keys should be the name of the cssModule, the values should be the actual cssModule.
   */
  cssDependencies: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * This property is also used to improve the rendering of react components. This is especially useful when the component depends on a prop that is complex such as a function or a large object. You can use this prop to suppress the rendering of the actual prop values and instead render a helpful hint of what the prop value should be.
   */
  propOverrides: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * These props will be removed from the component in the code snippet.
   */
  ignoreProps: PropTypes.arrayOf(PropTypes.string)
};
