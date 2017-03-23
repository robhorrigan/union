const { spawn } = require('child_process');

module.exports = function spawnProc(...args) {
  const proc = spawn(...args);

  return new Promise((resolve, reject) => {
    let buffer = '';
    let errBuffer = '';

    if (proc.stdout) {
      proc.stdout.on('data', (data) => {
        buffer += data.toString('utf8');
      });
    }

    if (proc.stderr) {
      proc.stderr.on('data', (data) => {
        errBuffer += data.toString('utf8');
      });
    }

    proc.on('close', (exitCode) => {
      if (exitCode === 0) {
        resolve(buffer.trim());
      } else {
        reject(errBuffer.trim());
      }
    });
  });
};
