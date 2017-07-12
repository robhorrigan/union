export function isValid() {
  return Object.keys(this.fields).every(fieldName =>
    this.fields[fieldName].model.errors.length === 0);
}

