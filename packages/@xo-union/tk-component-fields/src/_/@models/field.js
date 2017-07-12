export function visualState() {
  return this.errors.length === 0 ? this.onValidState : 'invalid';
}

export function getErrorMessages() {
  return (this.errors || []).map(({ message }) => message);
}