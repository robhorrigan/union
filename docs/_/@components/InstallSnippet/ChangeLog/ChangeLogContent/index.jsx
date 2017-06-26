import React from 'react';
import PropTypes from 'prop-types';
import compile from '#docs/markdown_compiler';
import { observer } from 'mobx-react';
import style from './style';

function ChangeLogContent({ changeLog }) {
  if (!changeLog.isOpen) {
    return null;
  }

  return (
    <div className={style['change-log-content']}>
      <h1>{changeLog.currentVersion}</h1>
      {compile(changeLog.markdown).tree}
    </div>
  );
}

ChangeLogContent.propTypes = {
  changeLog: PropTypes.shape({
    currentVersion: PropTypes.string,
    markdown: PropTypes.string,
    isOpen: PropTypes.bool
  })
};

export default observer(ChangeLogContent);
