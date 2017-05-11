const OPENED_OR_SELF_CLOSED_COMPONENT = /^\s*<.+(:?\/)?>\s*$/;
const SINGLE_LINE_COMPONENT = /^\s*<[^>]+>[^<]*<\/[^>]+>\s*$/;
const CLOSED_COMPONENT = /^\s*<\/[^>]+>\s*$/;

class BufferedCollection {
  constructor(bufferInitialState) {
    this.collection = [];
    this.resetBuffer = () => {
      this.buffer = bufferInitialState();
    };

    this.resetBuffer();
  }

  collect(item) {
    this.collection.push(item);
  }

  flushBuffer() {
    this.collection.push(this.buffer);
    this.resetBuffer();
  }
}

function isJSX(line) {
  const jsxPatterns = [
    SINGLE_LINE_COMPONENT,
    OPENED_OR_SELF_CLOSED_COMPONENT,
    CLOSED_COMPONENT
  ];

  return jsxPatterns.some(pattern => pattern.test(line));
}

export default function createTokens(lines) {
  const collector = new BufferedCollection(() => ({
    type: 'markdown',
    string: ''
  }));

  lines.forEach((line) => {
    if (isJSX(line)) {
      collector.flushBuffer();
      collector.collect({ type: 'component', string: line });
    } else {
      collector.buffer.string += `${line}\n`;
    }
  });

  collector.flushBuffer();

  return collector.collection;
}
