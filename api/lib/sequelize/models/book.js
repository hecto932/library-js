const Sequelize = require('sequelize');
const setupDatabase = require('../db');

module.exports = function setupBookModel (config) {
  const sequelize = setupDatabase(config)

  let book = sequelize.define('book', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    editorial: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT(16,2),
      allowNull: false
    }
  },{
    underscore: true,
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return book;
}