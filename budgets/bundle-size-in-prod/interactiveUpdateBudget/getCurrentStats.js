import webpackConfig from '../webpack.conf';
import { compileInMemory } from './createInMemoryCompiler';

function getAssetName() {
  const { chunkNames: [file], name } = this;
  return file || name;
}

function normalizeAssetName() {
  const fontMatch = this.match(/(tisa-(?:medium|light|sans-regular))-.{3}\.(woff2?)$/);

  if (fontMatch) {
    return `fonts/${fontMatch[1]}.${fontMatch[2]}`;
  }

  if (/union-icons-.{3}\.svg$/.test(this)) {
    return 'icons/union-icons.svg';
  }

  return this;
}

function assetMapper(asset) {
  const { size } = asset;
  const name = asset::getAssetName()::normalizeAssetName();

  return { size, name };
}

export default function getCurrentStats(statMapper = assetMapper) {
  return compileInMemory(webpackConfig).then((stats) => {
    if (stats.hasErrors()) {
      throw stats.toString();
    }

    const { assets } = stats.toJson();

    return assets.map(statMapper);
  });
}
