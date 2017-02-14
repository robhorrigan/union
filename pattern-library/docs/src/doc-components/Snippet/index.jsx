import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-bash';

import React, { Component, PropTypes } from 'react';
import PrismJs from 'prismjs';
import styles from './styles';

/**
 * Use this component to render code snippets
 */
export default class Snippet extends Component {
  static propTypes = {
    /**
     * Language for syntax highlighting
     */
    lang: PropTypes.string,
    /**
     * Code string
     */
    children: PropTypes.node
  };

  componentDidMount() {
    PrismJs.highlightElement(this.codeTag);
  }

  componentDidUpdate() {
    PrismJs.highlightElement(this.codeTag);
  }

  render() {
    const {
      lang,
      children
    } = this.props;

    return (
      <pre className={styles.snippet}>
        <code className={`language-${lang}`} ref={(element) => { this.codeTag = element; }}>
          {children}
        </code>
      </pre>
    );
  }
}
