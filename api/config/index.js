const debug = require('debug')('library-js:config');

require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  psql: {
    database: process.env.PSQL_DB_NAME,
    username: process.env.PSQL_DB_USER,
    password: process.env.PSQL_DB_PASS,
    host: process.env.PSQL_DB_HOST,
    port: process.env.PSQL_DB_PORT,
    dialect: 'postgres',
    timezone: '+00:00',
    logging: s => debug(s)
  }
}

module.exports = { config };