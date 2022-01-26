var express = require("express");
var router = express.Router();
var data = require("./db.json");

let tarefas = data.tarefas;

router
  .route("/")
  .get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(tarefas);
  })
  .post((req, res, next) => {
    tarefas.push(req.body);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.body);
  });

router
  .route("/:id")
  .delete((req, res, next) => {
    tarefas = tarefas.splice(
      tarefas.findIndex((u) => req.params.id == u.id),
      1
    );

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.params.id);
  })
  .put((req, res, next) => {
    tarefas = tarefas.splice(
      tarefas.findIndex((u) => req.params.id == u.id),
      1,
      req.body
    );

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.body);
  });

module.exports = router;
