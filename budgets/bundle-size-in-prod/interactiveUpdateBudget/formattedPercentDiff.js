import chalk from 'chalk';

export default function formattedPercentDiff(budget, current) {
  const diff = budget - current;
  const roundDiff = Math.round(diff);
  const neg = diff <= 0;
  const absDiff = Math.abs(diff);
  const isGood = !neg && ((absDiff / budget) >= 0.025);
  const isOk = !neg && ((absDiff / budget) < 0.025);

  const color = (isGood && 'green') || (isOk && 'yellow') || 'red';
  const sign = (roundDiff === 0 && ' ') || (neg && '+') || '-';
  const percent = Math.round((absDiff / budget) * 100);

  return chalk.reset[color](`${sign}${percent}%`);
}
