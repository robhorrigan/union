# "\_" directory

The `_` folder is for shared modules that have not been (or will not be) distributed as separate packages. These modules are resolved using the same algorithm as `node_modules`.

### How does it help
Having this folder is helpful in many ways

1. It is a [pods](./pods.md) friendly way of sharing code.
  Pods are great, but it sucks when you need to make references to shared modules that are at a higher level of you directory structure.

  Instead of

  ```javascript
  // in /_/shared/module.js
  export function helper() {}

  // in /really/nested/module/module.js

  import { helper } from '../../../_/shared/module';
  ```

  We get to do

  ```javascript
  // in /_/shared/module.js
  export function helper() {}

  // in /really/nested/module/module.js

  import { helper } from 'shared/module';
  ```

2. It makes it obvious where to find opportunities for new packages. If we have some code that is shared between multiple modules, it is likely to live in the `_` folder.
