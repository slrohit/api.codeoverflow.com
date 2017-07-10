var db = require('../configs/db_config')[process.env.NODE_ENV]
var Sequelize = require("sequelize");
const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  dialect: db.dialect,
  timezone : "+05:30",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
module.exports = sequelize;