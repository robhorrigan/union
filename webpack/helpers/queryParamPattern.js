export default function queryParamPattern(text) {
  return new RegExp(`[?&]${text}(?:&|$)`);
}

