import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import ReactDOM from 'react-dom';
import styles from './style.css';
import Toggler from './toggler';

function applyToggleToNode(attributes) {
  return (ref) => {
    // Use findDOMNode to modify the dom element
    // This is the most reliable and least obtrusive way to extend
    // dom elements hosted in lower order components
    //
    // eslint-disable-next-line react/no-find-dom-node
    const node = ReactDOM.findDOMNode(ref);

    if (node) {
      node.classList.add(styles.toggleable);

      Object.keys(attributes).forEach((key) => {
        node.setAttribute(key, attributes[key]);
      });
    }
  };
}

export default function toggleable(WrappedComponent) {
  // Create a class wrapper for non class components
  // This is to facilitate creating a ref to the components and getting the dom node
  // (Done above via findDOMNode
  //
  // eslint-disable-next-line react/prefer-stateless-function
  class ClassWrapper extends Component {
    render() { return <WrappedComponent {...this.props} />; }
  }

  return (
    @inject('toggler')
    @observer
    class ToggleableComponent extends Component {
      static propTypes = {
        toggledAs: PropTypes.string.isRequired,
        toggler: PropTypes.instanceOf(Toggler)
      }

      render() {
        const { toggler, toggledAs, ...rest } = this.props;
        const attributes = {
          'data-toggle': 'on',
          'aria-hidden': 'false',
          id: toggledAs
        };

        if (!toggler.has(toggledAs)) {
          attributes['data-toggle'] = 'off';
          attributes['aria-hidden'] = 'true';
        }

        return <ClassWrapper ref={applyToggleToNode(attributes)} {...rest} />;
      }
    }
  );
}
