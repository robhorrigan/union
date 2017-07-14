import React, { Component } from 'react';
import dig from 'xojs/lib/object/dig';
import { getFormName } from '@utilities/stateManagement';
import {
  change,
  updateVisualState,
  initializeField
} from '@actions/fields';
import { connect } from 'react-redux';

export default function fieldContainer(DecoratedComponent, { ownedBy: formName }) {
  function mapStateToProps(state, { name }) {
    const formState = state[getFormName(formName)]

    return {
      value: formState::dig('fields', name, 'model', 'value'),
      state: formState::dig('fields', name, 'ui', 'visualState'),
      validationMessage: formState::dig('fields', name, 'ui', 'currentErrorMessage')
    };
  }

  function mapDispatchToProps(dispatch, {
    value,
    name: fieldName,
    onValidState,
    validates
  }) {
    return {
      initializeState() {
        dispatch(initializeField({
          fieldName,
          onValidVisualState: onValidState,
          value,
          formName,
          enabledValidators: validates
        }));
      },
      onChange({ currentTarget }) {
        const { value } = currentTarget;

        dispatch(change({
          fieldName,
          value,
          formName
        }));
      },
      onBlur() {
        dispatch(updateVisualState({ fieldName, formName }));
      }
    };
  }

  return @connect(mapStateToProps, mapDispatchToProps) class WrappedField extends Component {
    constructor(props) {
      super(props);
      this.props.initializeState();
    }

    componentWilReceiveProps() {
      this.props.initializeState();
    }

    render() {
      const {
        initializeField,
        validates,
        onValidState,
        ...restOfProps
      } = this.props;
      return <DecoratedComponent {...restOfProps} />
    }
  }
}
