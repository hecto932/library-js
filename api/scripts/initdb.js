const debug = require('debug')('script:setup-db');
const Sequelize = require('sequelize');
const chalk = require('chalk');
const { config } = require('../config');
const db = require('../lib/db');

async function setup () {
  debug(`Initializing`)
  console.log(config);

  config.psql.setup = true;

  await db(config.psql).catch(handleFatalError)

  debug(`${chalk.green('Success!')}`);
  process.exit(0);
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}


setup();