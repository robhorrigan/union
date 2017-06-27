import { resolve } from 'path';
import { readFile } from 'fs';
import { promisify } from 'util';

const read = promisify(readFile);

export default async function getCurrentBudget() {
  const file = await read(resolve(__dirname, 'budget.json'));

  return JSON.parse(file.toString());
}
