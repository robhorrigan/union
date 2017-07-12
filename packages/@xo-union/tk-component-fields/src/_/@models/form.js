export function isValid() {
  return Object.keys(this.fields).every((fieldName) => this.fields[fieldName].isValid);
}

