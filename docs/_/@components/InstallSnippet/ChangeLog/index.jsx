import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import VersionList from './VersionList';
import ChangeLogContent from './ChangeLogContent';
import ChangeLogStore from './ChangeLogStore';
import style from './style';

@inject('github')
@observer
export default class ChangeLog extends Component {
  static propTypes = {
    packageName: PropTypes.string,
    github: PropTypes.shape({
      hasReleasesFor: PropTypes.func,
      releasesFor: PropTypes.func
    })
  }

  store = new ChangeLogStore();

  render() {
    const { packageName, github } = this.props;

    if (!github.hasReleasesFor(packageName)) {
      return null;
    }

    return (
      <div className={style['change-log']}>
        <VersionList releases={github.releasesFor(packageName)} changeLog={this.store} />
        <ChangeLogContent changeLog={this.store} />
      </div>
    );
  }
}
