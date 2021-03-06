import React from 'react';
import PropTypes from 'prop-types';
import Snippet from '@components/Snippet';
import ChangeLog from './ChangeLog';

/**
 * Use this component to render install instructions
 */
export default function InstallSnippet({ packageJson }) {
  return (
    <div>
      <Snippet lang="bash">
        npm install --save {packageJson.name}@{packageJson.version}
      </Snippet>
      <ChangeLog packageName={packageJson.name} />
    </div>
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
