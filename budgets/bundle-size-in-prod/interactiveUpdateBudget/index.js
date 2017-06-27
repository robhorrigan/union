import chalk from 'chalk';
import inquirer from 'inquirer';
import getCurrentStats from './getCurrentStats';
import { getCurrentBudget, setBudget } from './manageBudget';
import createQuestions from './questionsFactory';

async function updateBudget() {
  const currentStats = getCurrentStats();
  const currentBudget = await getCurrentBudget();
  const questions = [];

  for (const stat of (await currentStats)) {
    questions.push(...createQuestions({ stat, budget: currentBudget }));
  }

  inquirer.prompt(questions).then((answers) => {
    const newBudget = {};

    for (const key in answers) {
      const value = answers[key];

      if (value.size === 'SKIP') {
        if (currentBudget[value.name]) {
          newBudget[value.name] = currentBudget[value.name];
        }
      } else {
        newBudget[value.name] = {
          size: value.size
        };
      }
    }

    setBudget(newBudget);
  });
}

updateBudget().catch((err) => {
  console.error(err);
  process.exit(1);
});
