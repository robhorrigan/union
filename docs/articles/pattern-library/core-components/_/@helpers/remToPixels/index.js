export default function remToPixels(remString) {
  const match = remString.match(/^(\d+(?:\.\d+)?)rem$/);

  const remNumber = Number(match[1]);

  return `${remNumber * 16}px`;
}
