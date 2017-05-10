module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'Documentation',
      script: 'npm',
      args: ['run', 'start.docserver']
    },
    {
      name: 'Packages',
      script: 'npm',
      args: ['run', 'build.patterns', '--', '--watch']
    },
    {
      name: 'XOJS',
      script: 'npm',
      args: ['run', 'build.xojs', '--', '--watch']
    }
  ]
};
