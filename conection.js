const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "dados.db",
});

sequelize.sync();

module.exports = sequelize;
