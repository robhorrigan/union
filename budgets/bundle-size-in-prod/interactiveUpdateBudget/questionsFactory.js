import chalk from 'chalk';
import formattedPercentDiff from './formattedPercentDiff';

const NONE = chalk.red('none');

function plusPercent(percent) {
  return this + Math.round(this * percent);
}

export default function createQuestions({ stat, budget }) {
  const { name, size } = stat;

  function answerFilter(answer) {
    return { name, size: answer };
  }

  const plus5Percent = size::plusPercent(0.05);
  const plus10Percent = size::plusPercent(0.1);
  const serializedName = name.replace(/\./g, '__');

  let message;

  if (!budget[name]) {
    message = `${name}
  budget: ${NONE}
  currentSize: ${size} bytes
`;
  } else {
    const budgetSize = budget[name].size;
    message = `${name}
  budget: ${budgetSize} bytes
  currentSize: ${size} bytes
  diff: ${formattedPercentDiff(budgetSize, size)}
`;
  }

  return [
    {
      type: 'list',
      name: serializedName,
      message,
      choices: [
        {
          name: 'Skip',
          value: answerFilter('SKIP'),
          short: 'skipped',
        },
        {
          name: `Set to ${plus5Percent} bytes (currentSize + 5%)`,
          value: answerFilter(plus5Percent),
          short: `${plus5Percent} (+5%)`,
          filter: answerFilter
        },
        {
          name: `Set to ${plus10Percent} bytes (currentSize + 10%)`,
          value: answerFilter(plus10Percent),
          short: `${plus10Percent} (+10%)`,
          filter: answerFilter
        },
        {
          name: 'Custom',
          value: 'CUSTOM',
          short: 'custom'
        }
      ]
    },
    {
      type: 'input',
      message: `Custom value for ${name}`,
      name: serializedName,
      filter: answerFilter,
      when(answers) {
        return answers[serializedName] === 'CUSTOM';
      }
    }
  ];
}
