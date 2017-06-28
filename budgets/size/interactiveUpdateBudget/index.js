import chalk from 'chalk';
import inquirer from 'inquirer';
import getCurrentStats from '../support/getCurrentStats';
import { getCurrentBudget, setBudget } from '../support/manageBudget';
import createQuestions, { wasSkipped } from './questionsFactory';

function handleAnswers({ answers, budget }) {
  const newBudget = {};

  for (const key in answers) {
    const value = answers[key];

    if (wasSkipped(value)) {
      if (budget[value.name]) {
        newBudget[value.name] = budget[value.name];
      }
    } else {
      newBudget[value.name] = {
        size: value.size
      };
    }
  }

  setBudget(newBudget);
}

async function updateBudget() {
  const [currentStats, currentBudget] = await Promise.all([
    getCurrentStats(), getCurrentBudget()
  ]);

  const questions = [];

  for (const stat of currentStats) {
    questions.push(...createQuestions({ stat, budget: currentBudget }));
  }

  const answers = await inquirer.prompt(questions)

  handleAnswers({
    answers,
    budget: currentBudget
  });
}

updateBudget().catch((err) => {
  console.error(err);
  process.exit(1);
});
