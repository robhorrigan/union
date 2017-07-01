import values from 'xojs/lib/object/values';

export default class FieldRegistry {
  constructor() {
    this.fields = {};
  }

  add(name, field) {
    this.fields[name] = field;
  }

  delete(name) {
    delete this.fields[name];
  }

  validateFields() {
    this.fields::values().forEach((field) => {
      field.validate();
    });
  }

  getFieldValues() {
    const fieldValues = {};

    Object.keys(this.fields).forEach((name) => {
      fieldValues[name] = this.fields[name].getValue();
    });

    return fieldValues;
  }
}

