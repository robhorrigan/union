import path from 'path';

const root = path.resolve.bind(null, __dirname, '..');
const docsPath = root.bind(null, 'docs');
const staticPath = root.bind(null, 'static');
const packagesPath = root.bind(null, 'packages');

const extensions = [
  '.jsx',
  '.js',
  '.css',
  '.scss',
  '.cssm'
];

const defaultAliases = {
  '#assets': staticPath('assets')
};

const moduleFolders = [
  '_',
  'node_modules'
];

export const resolveDefaults = {
  extensions,
  alias: defaultAliases,
  modules: moduleFolders
};

export const resolveTestAndDocs = {
  extensions,
  alias: {
    ...defaultAliases,
    /* Allow package references to resolve correctly */
    '@xo-union': packagesPath('@xo-union'),
    /* Facilitate making references to docs src */
    '#docs': docsPath('src'),
    /* Facilitate making references to articles and config in docs app */
    $articles: docsPath('articles-directory.config.json'),
    '$site-config': docsPath('site.config.json')
  },
  modules: moduleFolders
};

export const resolveLoaders = {
  modules: [
    'custom-loaders',
    'node_modules'
  ]
};
