export function visualState() {
  return this.model.errors.length === 0 ? this.config.onValidState : 'invalid';
}

export function getErrorMessages() {
  console.log(this);
  return (this.model.errors || []).map(({ message }) => message);
}
