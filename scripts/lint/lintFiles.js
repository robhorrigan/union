import { readFile } from 'fs';
import { CLIEngine } from 'eslint';
import promisify from 'node-promisify';
import lintGroups from './groups';

const asyncReadFile = promisify(readFile);

export default function lintFiles(files) {
  const groupEngines = lintGroups.map(({ configFile, when }) =>
     ({ when, engine: new CLIEngine({ configFile }) })
  );

  return files.reduce(async (asyncAccumulator, file) => {
    const { engine } = groupEngines.find(({ when }) => when(file));

    if (engine.isPathIgnored(file)) {
      return asyncAccumulator;
    }

    const content = await asyncReadFile(file);

    const { results } = engine.executeOnText(content.toString(), file);
    const accumulator = await asyncAccumulator;

    // eslint-disable-next-line no-restricted-syntax
    for (const result of results) {
      accumulator.reports.push(result);
      accumulator.errorCount += result.errorCount;
    }

    return accumulator;
  }, { errorCount: 0, reports: [] });
}
