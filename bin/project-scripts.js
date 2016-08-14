#!/usr/bin/env node
var spawn = require('cross-spawn');
var script = process.argv[2];
var args = process.argv.slice(3);

var result = spawn.sync(
  'node',
  [require.resolve('../scripts/' + script)].concat(args),
  {stdio: 'inherit'}
)

process.exit(result.status)
