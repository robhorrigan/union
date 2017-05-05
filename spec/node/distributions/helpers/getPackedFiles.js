import path from 'path';
import { spawn } from 'child_process';
import { createReadStream } from 'fs';
import { createGunzip } from 'zlib';
import tar from 'tar-stream';

export default function getPackedFiles(pathToPackage) {
  return new Promise((resolve, reject) => {
    const createPack = spawn('npm', ['pack'], { cwd: pathToPackage });
    const tarExtract = tar.extract();
    const packedFiles = [];

    createPack.on('close', (code) => {
      if (code !== 0) { reject(); }
    });

    createPack.stdout.on('data', (output) => {
      const pathToTar = path.join(pathToPackage, output.toString().trim());

      createReadStream(pathToTar)
        .pipe(createGunzip())
        .pipe(tarExtract);

      tarExtract.on('finish', () => {
        const rm = spawn('rm', [pathToTar]);

        rm.on('close', () => resolve(packedFiles));
      });
    });

    tarExtract.on('entry', ({ name }, stream, done) => {
      // package prefix adds no value to our tests
      const cleanFileName = name.replace(/^package\//, '');
      packedFiles.push(cleanFileName);

      stream.on('end', done);
      stream.resume();
    });
  });
}
