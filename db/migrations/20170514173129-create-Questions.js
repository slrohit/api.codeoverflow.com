"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
     return queryInterface
          .createTable('Questions', {
          questionId: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          title: {
            type: Sequelize.TEXT,
            allowNull: false
          },
          description: {
            type: Sequelize.TEXT,
            allowNull: false
          },
          html: {
            type: Sequelize.TEXT
          },
          note: {
            type: Sequelize.TEXT
          },
          example: {
            type: Sequelize.TEXT
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updatedAt: Sequelize.DATE
      })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface
      .dropTable('Questions');
  }
};