var styles = require('icons');

for ( var key in styles.locals ) {
 if (key !== 'icon' && key.indexOf('icon') > -1) {
   /* Hack to compose icon in all icon classes without actually doing it ;) */
   styles.locals[key] += ' ' + styles.locals['icon'];
 }
}

module.exports = styles;
