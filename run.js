/* eslint-disable no-console */
const shell = require('shelljs');

const resultado = shell.exec(
  'git diff --name-only branch-script-testes..main',
  { silent: true }
);
console.log(resultado.stdout.split('\n'));
