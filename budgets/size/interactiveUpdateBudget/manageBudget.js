import { resolve } from 'path';
import { readFile, writeFile } from 'fs';
import { promisify } from 'util';

const read = promisify(readFile);
const write = promisify(writeFile);

const BUDGET_DB_PATH = resolve(__dirname, '..', 'budget.json');

export async function getCurrentBudget() {
  const file = await read(BUDGET_DB_PATH);

  return JSON.parse(file.toString());
}

export async function setBudget(newBudget) {
  return write(BUDGET_DB_PATH, JSON.stringify(newBudget, null, 2));
}
