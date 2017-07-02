import { inject, observer } from 'mobx-react';

export default function connect(...params) {
  return function (component) {
    return inject(...params)(observer(component));
  };
}

