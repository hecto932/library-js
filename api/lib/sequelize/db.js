const Sequelize = require('sequelize');
let sequelize = null;

// SINGLETON
module.exports = function setupDatabase(config) {
  if (!sequelize) {
    sequelize = new Sequelize(config);
  }

  return sequelize;
}