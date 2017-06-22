import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'mobx-react';
import Snippet from '@components/Snippet';
import { Feed as Releases } from './Feed';
import ReleasesUI from './ReleasesUI';
import style from './style';

/**
 * Use this component to render install instructions
 */
export default class InstallSnippet extends Component {
  releases = new ReleasesUI();

  render() {
    const { packageJson } = this.props;

    return (
      <Provider releases={this.releases}>
        <div>
          <Snippet lang="bash">
            npm install --save {packageJson.name}@{packageJson.version}
          </Snippet>
          <Releases packageName={packageJson.name}/>
        </div>
      </Provider>
    );
  }
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
