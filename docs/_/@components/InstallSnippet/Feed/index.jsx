import React, { Component } from 'react';
import compile from '#docs/markdown_compiler';

import { Button } from '@xo-union/tk-component-buttons';
import Icon from '@xo-union/tk-component-icons';
import { autobind } from 'core-decorators';
import { inject, observer } from 'mobx-react';
import { observable, action, computed } from 'mobx';
import style from './style';

@inject('releases')
@observer
class ReleaseButton extends Component {
  @computed
  get versionIsOpen() {
    return this.props.releases.current.version === this.props.release.version
  }

  @computed
  get btnColor() {
    return do {
      if (this.versionIsOpen) {
        'primary'
      } else {
        'tertiary';
      }
    }
  }

  @autobind
  toggle() {
    const {
      release: { body, version },
      releases
    } = this.props;

    releases.toggle(body, version);
  }

  render() {
    const { release } = this.props;

    return (
      <Button onClick={this.toggle} size="baby" color={this.btnColor} isCTA>
        {release.version}
      </Button>
    );
  }
}

@inject('github', 'releases')
@observer
export class Feed extends Component {
  render() {
    const { packageName, github, releases } = this.props;

    if (!github.hasReleasesFor(packageName)) {
      return null;
    }

    return (
      <div className={style['releases-section']}>
        <ul className={style['releases-list']}>
          {
            github.packageReleases[packageName].map(({ tagName, ...releaseData }) => (
              <li className={style['release-item']}>
                <ReleaseButton key={tagName} release={releaseData} />
              </li>
            ))
          }
        </ul>
        {
          do {
            if (releases.isOpen) {
              (
                <div className={style['release-notes']}>
                  <h1>{releases.current.version}</h1>
                  {compile(releases.current.body).tree}
                </div>
              )
            }
          }
        }
      </div>
    );
  }
}
