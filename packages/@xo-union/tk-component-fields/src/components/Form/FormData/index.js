import values from 'xojs/lib/object/values';
import { extendObservable, computed, action, observable } from 'mobx';

export default class FormData {
  @observable fields = {};

  add(name, { value = '' }) {
    extendObservable(this.fields, {
      [name]: {
        value,
        visualState: 'neutral',
        isValid: true
      }
    });
  }

  @computed
  get fieldValues() {
    const fieldValues = {};

    Object.keys(this.fields).forEach((name) => {
      fieldValues[name] = this.fields[name].value;
    });

    return fieldValues;
  }

  @action.bound
  handleRef(input) {
    if (!input) {
      return;
    }

    const { name } = input;

    this.fields[name].isValid = input.checkValidity();
  }

  @action.bound
  handleInputChange({ currentTarget }) {
    const { name, value } = currentTarget;

    this.fields[name].isValid = currentTarget.checkValidity();
    this.fields[name].value = value;
  }

  getValue(name) {
    return (this.fields[name] && this.fields[name].value) || '';
  }

  @action.bound
  setVisualState(name, value) {
    this.fields[name].visualState = value;
  }

  getVisualState(name) {
    return this.fields[name] && this.fields[name].visualState;
  }

  @computed
  get isValid() {
    return this.fields::values().reduce((isValidAccum, { isValid }) =>
      isValidAccum && isValid
    , true);
  }

  @action.bound
  handleInputBlur({ currentTarget }) {
    const { name } = currentTarget;

    if (currentTarget.checkValidity()) {
      this.setVisualState(name, 'neutral');
    } else {
      this.setVisualState(name, 'invalid');
    }
  }

  @action.bound
  updateVisualStateOfInvalidFields() {
    this.fields::values().forEach((field) => {
      if (!field.isValid) {
        field.visualState = 'invalid';
      }
    });
  }
}

