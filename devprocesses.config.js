module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'Documentation',
      script: './node_modules/.bin/webpack-dev-server',
      args: ['--inline', '--hot', '--config', 'webpack.docs.js']
    },
    {
      name: 'Packages',
      script: './node_modules/.bin/webpack',
      args: ['--watch']
    }
  ]
};
