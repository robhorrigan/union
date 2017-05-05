export default function scan(pattern) {
  let i = 0;
  let substr = this;
  const matches = [];

  while (i < this.length) {
    const match = substr.match(pattern);
    if (!match) {
      break;
    }

    const matchEnd = match.index + match[0].length;
    substr = substr.slice(matchEnd);
    match.index += i;
    i += matchEnd;

    matches.push(match);
  }

  return matches;
}

