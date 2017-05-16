import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-bash';

import React, { Component, PropTypes } from 'react';
import PrismJs from 'prismjs';
import styles from './styles';
import { autobind } from 'core-decorators';

/**
 * Use this component to render code snippets
 */
export default class Snippet extends Component {
  static contextTypes = {
    router: PropTypes.shape({ push: PropTypes.func })
  };

  static propTypes = {
    /**
     * Language for syntax highlighting
     */
    lang: PropTypes.string,
    /**
     * Inline or not
     */
    inline: PropTypes.bool,
    /**
     * Code string
     */
    children: PropTypes.node
  };

  componentDidMount() {
    PrismJs.highlightElement(this.codeTag);
  }

  @autobind
  handleClick(evt) {
    if (evt.target.tagName === 'A') {
      evt.preventDefault();
      this.context.router.push(evt.target.pathname);
    }
  }

  renderCode() {
    const {
      lang,
      children
    } = this.props;
    return (
      <code className={`language-${lang}`} ref={(element) => { this.codeTag = element; }}>
        {children}
      </code>
    );
  }

  render() {
    if (this.props.inline) {
      return (
        <span >
          {this.renderCode()}
        </span>
      );
    }

    return (
      <pre className={styles.snippet} onClick={this.handleClick}>
        {this.renderCode()}
      </pre>
    );
  }
}
