import React from 'react';
import PropTypes from 'prop-types';
import { observer, PropTypes as MobxTypes } from 'mobx-react';
import style from './style';
import ToggleButton from './ToggleButton';

function VersionList({ changeLog, releases }) {
  return (
    <ul className={style['releases-list']}>
      {
        releases.map(({ tagName, ...release }) => (
          <li key={tagName} className={style['release-item']}>
            <ToggleButton
              onClick={() => changeLog.toggle(release)}
              isOn={changeLog.isCurrent(release)}
            >
              {release.version}
            </ToggleButton>
          </li>
        ))
      }
    </ul>
  );
}

VersionList.propTypes = {
  changeLog: PropTypes.shape({
    toggle: PropTypes.func,
    isCurrent: PropTypes.func
  }),
  releases: MobxTypes.observableArray
};

export default observer(VersionList);
