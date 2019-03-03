const debug = require('debug')('library-api:book-model');
const Sequelize = require('sequelize');
const { Op } = Sequelize;

module.exports = function setupBook(config, bookModel) {
  const attributes = [];

  async function create(data) {
    const cond = { where: {} };
    cond.raw = false;

    cond.where.title = { [Op.eq]: data.title };
    
    const existBook = await bookModel.findOne(cond);

    if (existBook) {
      return existBook
    }

    return bookModel.create(data);
  }

  function findAll(parameters) {
    debug(parameters);
    const cond = { where: {} };
    cond.raw = false;

    Object.keys(parameters).forEach(e => {
      cond.where[e] = { [Op.eq]: parameters[e] };
    });

    return bookModel.findAll(cond);
  }

  return {
    findAll,
    create
  }
}