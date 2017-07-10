"use strict";
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .createTable('Tags', {
          tagId: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          name: {
            type: Sequelize.TEXT,
            allowNull: false
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updatedAt: Sequelize.DATE
      });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface
      .dropTable('Tags');
  }
};