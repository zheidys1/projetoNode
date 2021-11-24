const { DataTypes } = require("sequelize");
const sequelize = require("../conection");

const Tarefa = sequelize.define("Tarefa", {
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Tarefa;
