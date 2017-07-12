export function visualState() {
  return this.errors.length > 0 ? this.onValidState : 'invalid';
}
