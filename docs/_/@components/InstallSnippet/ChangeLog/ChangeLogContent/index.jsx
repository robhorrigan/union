import React from 'react';
import compile from '#docs/markdown_compiler';
import { observer } from 'mobx-react';
import style from './style';

export default observer(function ChangeLogContent({ changeLog }) {
  if (!changeLog.isOpen) {
    return null;
  }

  return (
    <div className={style['release-notes']}>
      <h1>{changeLog.currentRelease.version}</h1>
      {compile(changeLog.markdown).tree}
    </div>
  );
})
