const express = require("express");

const app = express();
const port = 5000;

const tarefa = require("./app/tarefa_node");
const sequelize = require("./conection");
const Tarefa = require("./models/tarefa_node");

Tarefa.sync();

app.use(express.json());
app.use("/tarefa_node", tarefa.app);

app.listen(port, () => {
  console.log(`Iniciando http://localhost:${port}`);
});
