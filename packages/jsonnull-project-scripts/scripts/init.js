var path = require('path') 
var fs = require('fs-extra')
var spawn = require('cross-spawn')

// Scripts are called from bin/project-scripts and pass in the root dir and appName
module.exports = function(root, appName) {
  // Path to this dependency in node_modules
  var selfPath = path.join(root, 'node_modules', 'jsonnull-project-scripts')

  // The apps package.json
  var appPackage = require(path.join(root, 'package.json'))
  // The template package.json in config
  var templatePackage = require(path.join(selfPath, 'package.template.json'))

  // Merge the package.json files
  var packageJson = Object.assign({}, appPackage, templatePackage)
  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  )

  // Copy all files from the template into the root
  fs.copySync(path.join(selfPath, 'template'), root);

  // Perform npm install on final project dir
  var proc = spawn('npm', ['install'], {stdio: 'inherit'})
  proc.on('close', function (code) {
    if (code !== 0) {
      console.error('npm install failed.')
      return;
    }
  })
}
