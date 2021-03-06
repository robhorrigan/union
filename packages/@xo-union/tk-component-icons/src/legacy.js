/* Hack to compose icon in all icon classes without actually doing it ;) */
import builder from 'css-module-builder';
import styles from './legacy-icons';

const wrapperModule = builder.initialize(styles[0][0], styles.toString());

const locals = styles.locals;

function isIconClass(key) {
  return key !== 'icon' && key.indexOf('icon') > -1;
}

Object.keys(locals).forEach((key) => {
  const values = [
    builder.getLocal(styles, key)
  ];

  if (isIconClass(key)) {
    values.push(builder.getLocal(styles, 'icon'));
  }

  wrapperModule.defineLocals([
    [
      [key],
      values
    ]
  ]);
});

module.exports = wrapperModule;
