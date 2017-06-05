/* eslint-disable react/prop-types */
import React from 'react';
import marksy from 'marksy';
import { Link } from 'react-router';
import { AssumedTargetAnchor } from '@xo-union/component-standard-elements/lib/anchor';
import Snippet from './doc-components/Snippet';
import Header from './doc-components/Header';

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
  },
  h1(props) {
    return <Header size={1} {...props} />;
  },
  h2(props) {
    return <Header size={2} {...props} />;
  },
  h3(props) {
    return <Header size={3} {...props} />;
  },
  h4(props) {
    return <Header size={4} {...props} />;
  }
});
