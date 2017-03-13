import React, { Component } from 'react';
import CSS from 'react-css-modules';
import styles from './styles.css';

@CSS(styles)
export default class Arrow extends Component {
  render() {
    return <span styleName="arrow-right" />;
  }
}
