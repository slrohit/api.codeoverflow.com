module.exports = function(sequelize, DataTypes) {
  const Question = sequelize.define("Questions", {
          questionId: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          title: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          html: {
            type: DataTypes.TEXT
          },
          note: {
            type: DataTypes.TEXT
          },
          example: {
            type: DataTypes.TEXT
          }
      });
  return Question;
};