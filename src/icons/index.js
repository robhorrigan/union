/* Hack to compose icon in all icon classes without actually doing it ;) */
import styles from 'icons/icons';
import builder from 'css-module-builder';

const wrapperModule = builder.initialize(styles[0][0], styles.toString());

const locals = styles.locals;

function isIconClass(key) {
  return key !== 'icon' && key.indexOf('icon') > -1
}

for (const key in locals) {
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
}

module.exports = wrapperModule;
