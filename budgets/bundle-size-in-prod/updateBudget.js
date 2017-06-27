import chalk from 'chalk';
import inquirer from 'inquirer';
import getCurrentStats from './getCurrentStats';
import getCurrentBudget from './getCurrentBudget';

const NONE = chalk.red('none');

function plusPercent(percent) {
  return this + Math.round(this * percent);
}

function formattedPercentDiff(a, b) {
  const diff = a - b;
  const roundDiff = Math.round(diff);
  const neg = diff <= 0;
  const absDiff = Math.abs(diff);
  const isGood = !neg && ((absDiff / a) >= 0.025);
  const isOk = !neg && ((absDiff / a) < 0.025);

  const color = (isGood && 'green') || (isOk && 'yellow') || 'red';
  const sign = (roundDiff === 0 && ' ') || (neg && '+') || '-';
  const percent = Math.round((absDiff / a) * 100);

  return chalk.reset[color](`${sign}${percent}%`);
}


async function updateBudget() {
  const currentStats = await getCurrentStats();
  const currentBudget = await getCurrentBudget();
  const questions = [];

  for (const { name, size } of currentStats) {
    const plus5Percent = size::plusPercent(0.05);
    const plus10Percent = size::plusPercent(0.1);
    const serializedName = name.replace(/./g, '__');

    let message
;
    if (!currentBudget[name]) {
      message = `${name}
  currentBudget: ${NONE}
  currentSize: ${size} bytes
`;
    } else {
      const budgetSize = currentBudget[name].size;
      message = `${name}
  currentBudget: ${budgetSize} bytes
  currentSize: ${size} bytes
  diff: ${formattedPercentDiff(budgetSize, size)}
`;
    }

    questions.push({
      type: 'list',
      name: serializedName,
      message,
      choices: [
        {
          name: `Skip`,
          value: 'SKIP',
          short: 'skipped'
        },
        {
          name: `Set to ${plus5Percent} bytes (currentSize + 5%)`,
          value: plus5Percent,
          short: `${plus5Percent} (+5%)`
        },
        {
          name: `Set to ${plus10Percent} bytes (currentSize + 10%)`,
          value: plus10Percent,
          short: `${plus10Percent} (+10%)`
        },
        {
          name: `Custom`,
          value: 'CUSTOM',
          short: 'custom'
        }
      ]
    },
    {
      type: 'input',
      message: `Custom value for ${name}`,
      name: serializedName,
      when(answers) {
        return answers[serializedName] === 'CUSTOM';
      }
    });
  }

  return inquirer.prompt(questions);
}

updateBudget().catch((err) => {
  console.error(err);
  process.exit(1);
});
