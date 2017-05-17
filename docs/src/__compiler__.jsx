/* eslint-disable react/prop-types */
import React from 'react';
import marksy from 'marksy';
import { Snippet } from '#docs/doc-components';
import { Link } from 'react-router';
import { AssumedTargetAnchor } from '@xo-union/component-standard-elements/lib/anchor';

const RouterLinkWrapper = ({ href, children }) => <Link to={href}>{children}</Link>;

export default marksy({
  code({ language, code }) {
    return <Snippet lang={language}>{code}</Snippet>;
  },
  codespan({ children }) {
    return <Snippet inline>{children}</Snippet>;
  },
  a({ href, children }) {
    return (
      <AssumedTargetAnchor FallbackComponent={RouterLinkWrapper} href={href}>
        {children}
      </AssumedTargetAnchor>
    );
  }
});
