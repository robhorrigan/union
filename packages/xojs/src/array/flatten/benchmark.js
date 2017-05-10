import lodashFlatten from 'lodash.flatten';
import jfhbrookFlatten from 'flatten';

suite('xojs.array.flatten', () => {
  benchmark('lodash.flatten', () => {
    lodashFlatten([1, 2, 3, [4, [5], 6], 7]);
  });

  benchmark('jfhbrook.flatten', () => {
    jfhbrookFlatten([1, 2, 3, [4, [5], 6], 7]);
  });
});
