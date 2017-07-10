"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
     return queryInterface
          .createTable('Users', {
          userId: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          userName:{
            type: Sequelize.STRING(20),
            unique: true
          },
          email:{
            type: Sequelize.STRING(40),
            unique: true
          },
          phoneNo: {
            type: Sequelize.STRING(13),
            unique: true,
            allowNull: false
          },
          password: {
            type: Sequelize.STRING(64),
            allowNull: false
          },
          salt: {
            type: Sequelize.STRING(8),
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
      .dropTable('Users');
  }
};
