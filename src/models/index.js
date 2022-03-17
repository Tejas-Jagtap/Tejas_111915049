const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.users = require("./users.model.js")(sequelize, Sequelize);
db.tejas_111915049_details = require("./employee.model.js")(sequelize, Sequelize);
db.tejas_111915049_salary = require("./sallery.model.js")(sequelize, Sequelize);

db.tejas_111915049_details.hasMany(db.tejas_111915049_salary, { foreignKey: 'employee_id_number' })
db.tejas_111915049_salary.belongsTo(db.tejas_111915049_details, { foreignKey: 'employee_id_number' })

module.exports = db;