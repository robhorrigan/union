import fs from 'fs';
import { spawn } from 'child_process';
import MemoryFs from 'memory-fs';
import webpack from 'webpack';
import webpackConfig from './webpack.conf';

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
  return new Promise((resolve, reject) => {
    const memoryFs = new MemoryFs();

    const compiler = webpack(webpackConfig);

    compiler.inputFileSystem = fs;
    compiler.outputFileSystem = memoryFs;
    compiler.resolvers.normal.fileSystem = compiler.inputFileSystem;
    compiler.resolvers.context.fileSystem = compiler.inputFileSystem;

    compiler.run((err, stats) => {
      if (err) {
        reject(err);
        return;
      }

      if (stats.hasErrors()) {
        reject(stats.toString());
        return;
      }

      const statsJson = stats.toJson();

      const simplifiedAssets = statsJson.assets.map(statMapper);

      resolve(simplifiedAssets);
    });
  });
}
