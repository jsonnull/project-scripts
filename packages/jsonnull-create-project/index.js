#!/usr/bin/env node

'use strict';

var fs = require('fs')
var path = require('path')
var spawn = require('cross-spawn')
var pathExists = require('path-exists')

if (process.argv.length == 0) {
  console.error('Usage: jsonnull-create-project <project-directory>')
  process.exit(1)
} else {
  createApp()
}

function createApp() {
  // Create the project directory
  var root = path.resolve(process.argv.slice(2)[0])
  var name = path.basename(root)
  if (!pathExists.sync(root)) {
    fs.mkdirSync(root)
  }

  console.log('Creating new app in ' + root + '.')

  // Create the package.json
  var packageJson = {
    name: name,
    version: '0.0.1',
    private: true,
    author: "Jason Nall <jsonnull@gmail.com>"
  }
  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  )

  // Install packages
  process.chdir(root);

  console.log('Installing project-scripts package...')

  var args = [
    'install',
    '--save-dev',
    'jsonnull-project-scripts'
  ]
  var proc = spawn('npm', args, {stdio: 'inherit'})
  proc.on('close', function (code) {
    if (code != 0) {
      console.error('npm ' + args.concat(' ') + ' failed.')
      return
    }

    var scriptsPath = path.resolve(
      process.cwd(),
      'node_modules',
      'jsonnull-project-scripts',
      'scripts',
      'init.js'
    )
    var init = require(scriptsPath)
    init(root, name)
  })
}
