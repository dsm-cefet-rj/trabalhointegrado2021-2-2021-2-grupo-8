var express = require("express");
var router = express.Router();
var data = require("./db.json");

let eventos = data.eventos;

router
  .route("/")
  .get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(eventos);
  })
  .post((req, res, next) => {
    eventos.push(req.body);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.body);
  });

router
  .route("/:id")
  .delete((req, res, next) => {
    eventos = eventos.splice(
      eventos.findIndex((u) => req.params.id == u.id),
      1
    );

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.params.id);
  })
  .put((req, res, next) => {
    eventos = eventos.splice(
      eventos.findIndex((u) => req.params.id == u.id),
      1,
      req.body
    );

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.body);
  });

module.exports = router;
