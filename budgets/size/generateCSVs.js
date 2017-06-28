import toCsv from 'json2csv';
import { writeFile } from 'fs';
import { promisify } from 'util';
import { resolve } from 'path';
import getCurrentStats from './support/getCurrentStats';
import { getCurrentBudget } from './support/manageBudget';

const write = promisify(writeFile);

function toData(stats, budget) {
  return stats.map(({ name, size }) => ({ name, current: size, budget: budget[name].size }));
}

async function generateCSVs() {
  const [budget, stats] = await Promise.all([getCurrentBudget(), getCurrentStats()]);
  const fields = ['name', 'budget', 'current'];
  const csv = toCsv({ fields, data: toData(stats, budget) });

  return write(resolve('out', 'size-budgets.csv'), csv);
}

generateCSVs();
