export default function toBeSocialLink() {
  return {
    compare(actual, name, url = `https://www.${name}.com/theknot`) {
      const domNode = actual.getDOMNode();
      function message(predicate) {
        return `Expected ${domNode.outerHTML} to ${predicate}`;
      }

      const tests = [
        {
          pass: domNode.href === url,
          message: message(`have href ${url}`)
        },
        {
          pass: domNode.target === '_blank',
          message: message('have a target="_blank" attribute')
        },
        {
          pass: actual.find('Icon').props().name === `social-${name}`,
          message: message(`to render "${name}" icon`)
        }
      ];

      return {
        pass: tests.every(t => t.pass),
        message: (tests.find(t => !t.pass) || {}).message,
      };
    }
  };
}
