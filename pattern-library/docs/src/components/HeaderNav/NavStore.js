import { extendObservable, computed, observable, action } from 'mobx';

export default class NavStore {
  constructor(initial = []) {
    extendObservable(this, {
      rendered: observable.map(initial.map($1 => [$1, $1]))
    })
  }

  @action clear() {
    this.rendered.clear();
  }

  @action show(...idents) {
    idents.forEach((ident) => this.rendered.set(ident, ident));
  }

  @action hide(...idents) {
    idents.forEach((ident) => this.rendered.delete(ident));
  }

  has(ident) {
    return this.rendered.has(ident);
  }
}
