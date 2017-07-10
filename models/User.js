/**
 * Created by salonasinha on 27/05/17.
 */
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("Users", {
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userName: {
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false
        },
        phoneNo: {
            type: DataTypes.TEXT,
            unique: true
        },
        password: {
            type: DataTypes.TEXT
        },
        salt: {
            type: DataTypes.TEXT
        }
    });

    return User;
};