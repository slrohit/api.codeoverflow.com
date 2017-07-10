"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
     return queryInterface
          .createTable('UserSolutions', {
          userId: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
          },
          questionId: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
          },
          solution: {
            type: Sequelize.TEXT,
            allowNull: false
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
      .dropTable('UserSolutions');
  }
};