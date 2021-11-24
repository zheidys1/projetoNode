const express = require("express");
const Tarefa = require("../models/tarefa_node");

const app = express.Router();

app.get("/", async (req, res) => {
  const tarefa_node = await Tarefa.findAll();
  res.send({ tarefa_node });
});

app.get("/:id", async (req, res) => {
  const tarefa_node = await Tarefa.findByPk(req.params.id);
  if (tarefa_node) {
    res.send({ tarefa_node });
  } else {
    res.status(404).send("Tarefa nao encontrada ");
  }
});

app.post("/new", async (req, res) => {
  if (req.body.description && req.body.done) {
    const tarefa_node = await Tarefa.create({
      description: req.body.description,
      done: req.body.done,
    });
    res.status(201).send(tarefa_node);
  } else {
    res.status(400).send("cadastro nao encontrado");
  }
});

app.put("/:id", async (req, res) => {
  const tarefa_node = await Tarefa.findByPk(req.params.id);
  if ((tarefa_node && req.body.description) || req.body.done) {
    await tarefa_node.update(req.body);
    res.send(tarefa_node);
  } else {
    res.status(404).send("operacao nao realizada");
  }
});

app.delete("/:id", async (req, res) => {
  const tarefa_node = await Tarefa.findByPk(req.params.id);
  if (tarefa_node) {
    await tarefa_node.destroy();
    res.send("Deletado!!!!");
  } else {
    res.status(404).send("tarefa nao encontrada");
  }
});

module.exports.app = app;
