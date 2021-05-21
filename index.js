#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const envinfo = require('envinfo');
const { createApp } = require('cna-cli/src/install');

const packageJS = require('./package.json');
const getAddons = require('./addons');

let projectName;

program
  .version(packageJS.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action((name) => {
    projectName = name;
  })
  .option('--verbose', 'print additional logs')
  .option('--info', 'print environment debug info')
  .option('--use-npm', 'use npm mandatorily')
  .option('--typescript', 'add TypeScript support')
  .option('--extend <repos...>', 'git repositories to extend your boilerplate')
  .option('--nodeps', 'generate package.json file without installing dependencies')
  .option('--inplace', 'apply setup to an existing project')
  .allowUnknownOption()
  .on('--help', () => {
    console.log();
    console.log(`    Only ${chalk.green('<project-directory>')} is required.`);
    console.log();
    console.log(`    If you have any problems, do not hesitate to file an issue:`);
    console.log(`      ${chalk.cyan(`${packageJS.bugs.url}/new`)}`);
  })
  .parse(process.argv);

const options = program.opts();

if (options.info) {
  console.log(chalk.bold('\nEnvironment Info:'));
  envinfo
    .run(
      {
        System: ['OS', 'CPU'],
        Binaries: ['Node', 'npm', 'Yarn'],
        Browsers: ['Chrome', 'Edge', 'Internet Explorer', 'Firefox', 'Safari'],
      },
      {
        clipboard: false,
        duplicates: true,
        showNotFound: true,
      }
    )
    .then((info) => {
      console.log(info);
      process.exit(0);
    });
}

if (typeof projectName === 'undefined') {
  console.error('Please specify the project directory:');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`);
  console.log();
  console.log('For example:');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-react-app')}`);
  console.log();
  console.log(`Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`);
  process.exit(1);
}

const addons = getAddons(options);

createApp(
  projectName,
  options.verbose,
  options.useNpm,
  options.inplace,
  addons,
  options.alias,
  !options.nodeps
);
