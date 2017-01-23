var React = require('react');

module.exports = function DefaultCodeBlockHander(props) {
  return React.createElement('div', null,
    props.element,
    React.createElement('pre', {
      className: 'language-' + props.language
    },
      React.createElement('code', null, props.src)
   )
  );
};
