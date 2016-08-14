var path = require('path') 
var fs = require('fs-extra')
var spawn = require('cross-spawn')

module.exports = function(root, appName) {
  var selfPath = path.join(root, 'node_modules', 'jsonnull-project-scripts')

  var appPackage = require(path.join(root, 'package.json'))
  var templatePackage = require(path.join(selfPath, 'config', 'package.json'))

  var packageJson = Object.assign({}, appPackage, templatePackage)
  
  // Copy dependencies
  var deps = Object.assign({}, templatePackage.dependencies, appPackage.dependencies)
  Object.assign(packageJson, { dependencies: deps })

  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  )

  fs.copySync(path.join(selfPath, 'template'), root);

  var proc = spawn('npm', ['install'], {stdio: 'inherit'})
  proc.on('close', function (code) {
    if (code !== 0) {
      console.error('npm install failed.')
      return;
    }
  })
}
