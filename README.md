# Serverless Starter

[![Build Status](https://github.com/Create-Node-App/create-sls-app/workflows/Build/badge.svg)](https://github.com/Create-Node-App/create-sls-app/commits/master)
[![npm](https://img.shields.io/npm/v/create-sls-app.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/create-sls-app)
[![npm](https://img.shields.io/npm/dm/create-sls-app.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/create-sls-app)

This starter kit is designed to get you up and running with a bunch of awesome Serverless technologies.

The primary goal of this project is to provide a stable foundation upon which to build modern web applications. Its purpose is not to dictate your project structure or to demonstrate a complete real-world application, but to provide a set of tools intended to make front-end development robust and easy.

- [Creating an app](#creating-an-app) - Create a _Serverless_ app.
- [Generated App](#generated-app) - Understanding apps bootstraped _Serverless Starter_.

## Quickstart

```sh
$ npx create-sls-app my-app
$ cd my-app
$ npm start
```

the generated project will vary in the presence of the following flags:

| Flag              | What is it for?                                                                     |
| ----------------- | ----------------------------------------------------------------------------------- |
| `--verbose`       | print additional logs.                                                              |
| `--info`          | print environment debug info.                                                       |
| `--nodeps`        | will no install dependencies on the generated project.                              |
| `--use-npm`       | will use npm as command.                                                            |
| `--inplace`       | apply setup to an existing project.                                                 |
| `-a <alias>`      | will setup webpack alias. `app` by default.                                         |
| `--typescript`    | add TypeScript support.                                                             |

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

## Creating an app

**You’ll need to have Node 8.10.0 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
$ npx create-sls-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
$ npm init react-webpack-project my-app
```

_`npm init <initializer>` is available in npm 6+_

### yarn

```sh
$ yarn create react-webpack-project my-app
```

_`yarn create` is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies. See [Project Structure](#project-structure).

## Generated App

### Running the App

After completing the previous steps, you're ready to start the project!

```bash
$ yarn start  # Start the development server (or `npm start`)
```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

| `yarn <script>`       | Description                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `start`               | Serves your app                                                                                      |
| `lint`                | [Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors                    |
| `lint:fix`            | Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix) |

## Project Structure

```
.
```

