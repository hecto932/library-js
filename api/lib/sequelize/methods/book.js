const Sequelize = require('sequelize');
const { Op } = Sequelize;

module.exports = function setupBook(config, bookModel) {
  const attributes = [];

  function findAll(data) {
    const cond = { where: {} };
    cond.raw = false;

    return bookModel.findAll(cond);
  }

  return {
    findAll
  }
}