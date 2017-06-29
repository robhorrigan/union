import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@xo-union/tk-component-buttons';

export default class ToggleButton extends Component {
  static propTypes = {
    isOn: PropTypes.bool
  };

  btnColor() {
    if (this.props.isOn) {
      return 'primary';
    }

    return 'tertiary';
  }

  render() {
    const { isOn, ...props } = this.props;

    return (
      <Button size="baby" color={this.btnColor()} isCTA {...props} />
    );
  }
}

