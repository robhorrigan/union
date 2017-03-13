import React from 'react';
import { inject, observer } from 'mobx-react';
import ReactDOM from 'react-dom';
import styles from './style.css';

function applyToggleToNode(attributes) {
  return (ref) => {
    const node = ReactDOM.findDOMNode(ref);

    if (node) {
      node.classList.add(styles.toggleable);

      for (const key in attributes) {
        node.setAttribute(key, attributes[key]);
      }
    }
  }
}

export default function toggleable(Component) {
  return @inject('toggler') @observer class extends Component {
    render() {
      const { toggler, toggledAs, ...rest } = this.props
      const attributes = {
        'data-toggle': 'on',
        'aria-hidden': 'false',
        id: toggledAs
      };

      if (!toggler.has(toggledAs)) {
        attributes['data-toggle'] = 'off';
        attributes['aria-hidden'] = 'true';
      }

      return <Component ref={applyToggleToNode(attributes)} {...rest} />;
    }
  }
}
