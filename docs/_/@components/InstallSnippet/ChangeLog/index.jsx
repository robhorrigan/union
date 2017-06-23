import React, { Component } from 'react';
import VersionList from './VersionList';
import ChangeLogContent from './ChangeLogContent';
import ChangeLogStore from './ChangeLogStore';
import compile from '#docs/markdown_compiler';

import { Button } from '@xo-union/tk-component-buttons';
import { inject, observer } from 'mobx-react';
import style from './style';

@inject('github')
@observer
export default class ChangeLog extends Component {
  store = new ChangeLogStore();

  render() {
    const { packageName, github } = this.props;

    if (!github.hasReleasesFor(packageName)) {
      return null;
    }

    return (
      <div className={style['releases-section']}>
        <VersionList releases={github.releasesFor(packageName)} changeLog={this.store} />
        <ChangeLogContent changeLog={this.store} />
      </div>
    );
  }
}
