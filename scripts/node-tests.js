/* eslint-disable no-console */
import glob from 'glob-all';
import Jasmine from 'jasmine';
import { SpecReporter } from 'jasmine-spec-reporter';

const jasmineWrapper = new Jasmine();
const { jasmine } = jasmineWrapper;

glob([
  '**/*node-spec.js',
  '!node_modules/**',
  '!lib/**'
], (err, files) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  jasmineWrapper.loadConfig({
    spec_dir: './',
    spec_files: files,
    helpers: [
      'spec/node/helpers/**/*.js'
    ]
  });

  jasmine.getEnv().clearReporters();
  jasmineWrapper.addReporter(new SpecReporter({
    spec: {
      displayPending: true
    }
  }));

  jasmineWrapper.execute();
});
