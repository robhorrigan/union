# @shared

When you see an import state that looks like

```javascript
import Module from '@shared/***';
```

this means we are making a reference to a module living in the nearest [`__private_modules__`](./private-modules.md) folder.
