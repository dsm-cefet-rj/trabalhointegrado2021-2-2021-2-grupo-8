var express = require("express");
var router = express.Router();
var data = require("./db.json");

let usuarios = data.usuarios;

router
  .route("/")
  .get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(usuarios);
  })
  .post((req, res, next) => {
    usuarios.push(req.body);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.body);
  });

router
  .route("/:id")
  .delete((req, res, next) => {
    usuarios = usuarios.splice(
      usuarios.findIndex((u) => req.params.id == u.id),
      1
    );

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.params.id);
  })
  .put((req, res, next) => {
    usuarios = usuarios.splice(
      usuarios.findIndex((u) => req.params.id == u.id),
      1,
      req.body
    );

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.body);
  });

module.exports = router;
