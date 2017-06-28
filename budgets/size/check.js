/* eslint-disable no-console */
import getCurrentStats from './support/getCurrentStats';
import { getCurrentBudget } from './support/manageBudget';
import formattedPercentDiff from './support/formattedPercentDiff';

function test(actual, expected) {
  return {
    pass: expected.size > actual.size,
    diff: formattedPercentDiff(expected.size, actual.size)
  };
}

async function checkBudget() {
  const [currentStats, currentBudget] = await Promise.all([
    getCurrentStats(), getCurrentBudget()
  ]);

  const result = {
    passed: true,
    failures: []
  };

  currentStats.forEach((stat) => {
    const budget = currentBudget[stat.name];

    const { pass, diff } = test(stat, budget);

    if (!pass) {
      result.passed = false;
      result.failures.push({
        name: stat.name,
        diff
      });
    }

    console.log(stat.name, diff);
  });

  return result;
}


checkBudget()
.then(({ passed, failures }) => {
  if (!passed) {
    console.error('\nSome budgets were exceeded\n\n');

    failures.forEach(({ name, diff }) => {
      console.error(name, diff);
    });

    process.exit(1);
  }
})
.catch((err) => {
  console.error(err);
  process.exit(1);
});
