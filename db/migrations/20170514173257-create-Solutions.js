"use strict";
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .createTable('Solutions', {
          solutionId: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          cppSolution: {
            type: Sequelize.TEXT
          },
          javaSolution: {
            type: Sequelize.TEXT
          },
          pythonSolution: {
            type: Sequelize.TEXT
          },
          questionId: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
            onDelete: "CASCADE",
            references: {
              model: 'Questions',
              key: 'questionId'
            }
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
      .dropTable('Solutions');
  }
};