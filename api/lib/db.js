const defaults = require('defaults');
const setupDatabase = require('../services/sequelize');

// -------- MODELS --------

// BOOK MODEL
const setupBookModel = require('../services/sequelize/models/book');
const setupBook = require('../services/sequelize/methods/book');

module.exports  = async function DB (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 100000
    },
    query: {
      raw: true
    }
  });

  const sequelize = setupDatabase(config);

  await sequelize.authenticate();

  // MODELS
  const bookModel = setupBookModel(config);

  // ASSOSIATIONS


  if (config.setup) {
    await sequelize.sync({ force: true });
  }

  const Book = setupBook(config, bookModel);

  return {
    Book
  }
}