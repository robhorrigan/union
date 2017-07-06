import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

export default function linkedField(LowerOrderComponent) {
  const WrappedComponent = inject(
    'formData'
  )(
    observer(
      LowerOrderComponent
    )
  );

  @inject('formData')
  class LinkedField extends Component {
    constructor(props) {
      super(props);

      const { formData, name } = this.props;
      formData.add(name, this.props);
    }

    render() {
      return (<WrappedComponent {...this.props} />);
    }
  }

  return LinkedField;
}
