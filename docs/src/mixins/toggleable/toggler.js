import { extendObservable, observable, action } from 'mobx';

function setToKeyValue(arraySet) {
  return arraySet.map($1 => [$1, $1]);
}

export default class Toggler {
  constructor(initialSet = []) {
    extendObservable(this, {
      // Use an observable Map as a Set given that mobx doesn't yet
      // have support for observable sets
      toggled: observable.map(setToKeyValue(initialSet))
    });
  }

  @action clear() {
    this.toggled.clear();
  }

  @action show(...names) {
    names.forEach(name => this.toggled.set(name, name));
  }

  @action hide(...names) {
    names.forEach(name => this.toggled.delete(name));
  }

  has(name) {
    return this.toggled.has(name);
  }
}
