import path from 'path';
import contains from 'xojs/lib/string/callbacks/contains';
import always from 'xojs/lib/callbacks/always';

const root = path.resolve.bind(null, __dirname, '..', '..');

/* answer functions */
export default [
  {
    configFile: root('.eslintrc.spec.js'),
    when: contains('spec.js')
  },
  {
    configFile: root('.eslintrc.benchmark.js'),
    when: contains('benchmark.js')
  },
  {
    configFile: root('.eslintrc.js'),
    when: always
  }
];

