#!/usr/bin/env node
const program = require('commander')

program.version(require('../package.json').version)

program
    .command('init <name>')
    .description('init project')
    .action(require('../lib/init.js'))

program.parse(process.argv)
