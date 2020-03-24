'use strict';

const express = require('express');
const app = express();
const execute = require('./execute');

if (!process.env.COMMAND) {
  throw new Error('Please specify the command to execute in COMMAND environment variable');
}

if (!process.env.PASSWORD) {
  throw new Error('Please specify the password in PASSWORD environment variable');
}

app.get('/', (req, res) => {
  if (req.query.password !== process.env.PASSWORD) {
    return res.status(403).send('Incorrect password');
  }
  execute(process.env.COMMAND);
  res.send('OK');
});

app.listen(process.env.PORT || 3000);
