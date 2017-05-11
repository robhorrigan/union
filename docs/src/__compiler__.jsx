/* eslint-disable react/prop-types */
import React from 'react';
import marksy from 'marksy';
import { Snippet } from '#docs/doc-components';

export default marksy({
  code({ language, code }) {
    return <Snippet lang={language}>{code}</Snippet>;
  },
  codespan({ children }) {
    return <Snippet inline>{children}</Snippet>;
  }
});
