const linkMd = /\[([^\]]+)]\(([^)]+)\)/;

Prism.languages.insertBefore('javascript', 'comment', {
  'md-link': linkMd
});

Prism.hooks.add('wrap', function(env) {
  if (env.type == 'md-link') {
    env.tag = 'a';

    const match = env.content.match(linkMd);

    const href = match[2];
    env.content = match[1];

    env.attributes.href = href;
  }
});
