import React from 'react';
import PropTypes from 'prop-types';
import Snippet from '@components/Snippet';

/**
 * Use this component to render install instructions
 */
export default function InstallSnippet({ packageJson }) {
  return (
    <Snippet lang="bash">
      npm install --save {packageJson.name}@{packageJson.version}
    </Snippet>
  );
}

InstallSnippet.propTypes = {
  /**
   * package.json object
   **/
  packageJson: PropTypes.shape({
    name: PropTypes.string,
    version: PropTypes.string
  }).isRequired
};
