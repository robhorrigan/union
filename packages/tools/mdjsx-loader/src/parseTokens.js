export default function parseTokens(tokens) {
  return tokens.map((token) => {
    if (!token.string) {
      return null;
    }

    if (token.type === 'component') {
      return token.string;
    }

    // Assume markdown
    return `{compile(${JSON.stringify(token.string)}).tree}`;
  }).filter($1 => $1);
}
