var styles = require('icons');
var builder = require('css-module-builder');

var wrapperModule = builder.initialize(styles[0][0], styles.toString());

var locals = styles.locals;

for (var key in locals) {
  var values =  [
    builder.getLocal(styles, key)
  ];

  if (key !== 'icon' && key.indexOf('icon') > -1) {
    /* Hack to compose icon in all icon classes without actually doing it ;) */
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
