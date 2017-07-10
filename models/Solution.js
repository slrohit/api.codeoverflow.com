module.exports = function(sequelize, DataTypes) {
  const Solutions = sequelize.define("Solutions", {
          solutionId: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          cppSolution: {
            type: DataTypes.TEXT
          },
          javaSolution: {
            type: DataTypes.TEXT
          },
          pythonSolution: {
            type: DataTypes.TEXT
          },
          questionId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
          }
      },{
        classMethods: {
          associate: function(models) {
            Solutions.belongsTo(models.Questions, {
              foreignKey: "questionId"
            });
          }
        }
      });
  return Solutions;
};