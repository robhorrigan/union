import React, { Component } from 'react';
import style from './style';
import ToggleButton from './ToggleButton';
import { observer } from 'mobx-react';

export default observer(function VersionList({ changeLog, releases }) {
  return (
    <ul className={style['releases-list']}>
      {
        releases.map(({ tagName, ...release }) => (
          <li key={tagName} className={style['release-item']}>
            <ToggleButton onClick={() => changeLog.toggle(release)} isOn={changeLog.isCurrent(release)}>
              {release.version}
            </ToggleButton>
          </li>
        ))
      }
    </ul>
  );
});
