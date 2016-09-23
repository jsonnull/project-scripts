# project-scripts

**Create a new project**

```sh
$ npm install -g jsonnull-create-project
$ create-project path/to/my-app
```

This will create a new project at `path/to/my-app`, inject dependencies, and `npm install`.

**Use the scripts**

```sh
$ npm install --save-dev jsonnull-project-scripts
```

Common npm scripts, base configuration files, and more files which I share across projects can be referenced as a dependency.

The most common requirements are automatically linked in during project creation with the CLI tool.
