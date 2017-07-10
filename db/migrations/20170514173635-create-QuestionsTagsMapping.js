"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .createTable('QuestionsTagsMapping', {
      questionId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      tagId: {
        type: Sequelize.INTEGER.UNSIGNED,
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
      .dropTable('QuestionsTagsMapping');
  }
};