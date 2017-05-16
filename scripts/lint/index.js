/* eslint-disable no-console */
import glob from 'glob-all';
import stylishFormatter from 'eslint/lib/formatters/stylish';
import promisify from 'node-promisify';
import lintFiles from './lintFiles';

const asyncGlob = promisify(glob);

(async () => {
  try {
    const files = await asyncGlob('**/*.js?(x)');
    const { reports, errorCount } = await lintFiles(files);
    const prettyReport = stylishFormatter(reports);

    console.log(prettyReport);

    if (errorCount > 0) {
      process.exit(1);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
