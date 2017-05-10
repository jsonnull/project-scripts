# project-scripts

| Package | Version | Dependencies |
|---------|---------|--------------|
| [`jsonnull-create-project`](/packages/jsonnull-create-project) | [![npm](https://img.shields.io/npm/v/jsonnull-create-project.svg?maxAge=2592000)](https://www.npmjs.com/package/jsonnull-create-project) | [![Dependency Status](https://david-dm.org/jsonnull/project-scripts.svg?path=packages/jsonnull-create-project)](https://david-dm.org/jsonnull/project-scripts?path=packages/jsonnull-create-project) |
| [`jsonnull-project-scripts`](/packages/jsonnull-project-scripts) | [![npm](https://img.shields.io/npm/v/jsonnull-project-scripts.svg?maxAge=2592000)](https://www.npmjs.com/package/jsonnull-project-scripts) | [![Dependency Status](https://david-dm.org/jsonnull/project-scripts.svg?path=packages/jsonnull-project-scripts)](https://david-dm.org/jsonnull/project-scripts?path=packages/jsonnull-project-scripts) |

## Create a new project

```sh
$ npm install -g jsonnull-create-project
$ create-project path/to/my-app
``` 
This will create a new project at `path/to/my-app`, inject dependencies, and
`npm install`.

## Use the scripts

```sh
$ npm install --save-dev jsonnull-project-scripts
```

Common npm scripts, base configuration files, and more files which I share
across projects can be referenced as a dependency. 

The most common requirements are automatically linked in during project
creation with the CLI tool.
