import getCurrentStats from './support/getCurrentStats';
import { getCurrentBudget, setBudget } from './support/manageBudget';
import formattedPercentDiff from './interactiveUpdateBudget/formattedPercentDiff';

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

  for (const stat of currentStats) {
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
  }

  return result;
}


checkBudget()
.then(({ passed, failures }) => {
  if (!passed) {
    console.error('\nSome budgets were exceeded\n\n');

    for (const { name, diff } of failures) {
      console.error(name, diff);
    }

    process.exit(1);
  }
})
.catch((err) => {
  console.error(err);
  process.exit(1);
});
