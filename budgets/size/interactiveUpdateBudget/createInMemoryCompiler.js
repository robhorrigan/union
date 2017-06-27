import { promisify } from 'util';
import fs from 'fs';
import MemoryFs from 'memory-fs';
import webpack from 'webpack';

export default function createInMemoryCompiler(config) {
  const memoryFs = new MemoryFs();
  const compiler = webpack(config);

  compiler.inputFileSystem = fs;
  compiler.outputFileSystem = memoryFs;
  compiler.resolvers.normal.fileSystem = compiler.inputFileSystem;
  compiler.resolvers.context.fileSystem = compiler.inputFileSystem;

  return compiler;
}

export function compileInMemory(config) {
  return promisify(::(createInMemoryCompiler(config).run))();
}
