"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
     return queryInterface
          .createTable('UsersDetail', {
          userId: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
              model: 'Users',
              key: 'userId'
            }
          },
          firstName: {
            type: Sequelize.STRING(50),
            allowNull: false
          },
          lastName: {
            type: Sequelize.STRING(50)
          },
          companyName: {
            type: Sequelize.STRING(100)
          },
          age: {
            type: Sequelize.INTEGER
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
      .dropTable('UsersDetail');
  }
};