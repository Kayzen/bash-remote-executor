const fs = require('fs');
const { spawn } = require('child_process');
const moment = require('moment');

let lastPID;

module.exports = function execute(shellCommand) {
  try {
    lastPID && process.kill(-lastPID);
  } catch (e) {}

  const fileName = `./out/${moment().format(moment.HTML5_FMT.DATETIME_LOCAL_MS)}.log`;
  const out = fs.openSync(fileName, 'a');
  const err = fs.openSync(fileName, 'a');

  const child = spawn('/bin/bash', ['-c', shellCommand], {
    detached: true,
    stdio: [ 'ignore', out, err ]
  });
  child.unref();

  lastPID = child.pid;
};
