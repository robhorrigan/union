/* eslint-disable no-console */
import inquirer from 'inquirer';
import values from 'xojs/lib/object/values';
import getCurrentStats from '../support/getCurrentStats';
import { getCurrentBudget, setBudget } from '../support/manageBudget';
import createQuestions, { wasSkipped } from './questionsFactory';

function handleAnswers({ answers, budget }) {
  const newBudget = {};

  answers::values().forEach(({ name, size }) => {
    if (wasSkipped({ size })) {
      if (budget[name]) {
        newBudget[name] = budget[name];
      }
    } else {
      newBudget[name] = { size };
    }
  });

  setBudget(newBudget);
}

async function updateBudget() {
  const [currentStats, currentBudget] = await Promise.all([
    getCurrentStats(), getCurrentBudget()
  ]);

  const questions = [];

  currentStats.forEach((stat) => {
    questions.push(...createQuestions({ stat, budget: currentBudget }));
  });

  const answers = await inquirer.prompt(questions);

  handleAnswers({
    answers,
    budget: currentBudget
  });
}

updateBudget().catch((err) => {
  console.error(err);
  process.exit(1);
});
