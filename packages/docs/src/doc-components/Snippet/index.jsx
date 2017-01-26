import React, { Component, PropTypes } from 'react';
import PrismJs from 'prismjs';
import '!!imports-loader?Prism=prismjs!prismjs/components/prism-jsx';
import '!!imports-loader?Prism=prismjs!prismjs/components/prism-bash';

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
    children: PropTypes.string
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
      <pre>
        <code className={`language-${lang}`} ref={(el) => this.codeTag = el}>
          {children}
        </code>
      </pre>
    )
  }
}
