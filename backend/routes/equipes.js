var express = require("express");
var router = express.Router();
var data = require("./db.json");

let equipes = data.equipes;

router
  .route("/")
  .get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(equipes);
  })
  .post((req, res, next) => {
    equipes.push(req.body);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.body);
  });

router
  .route("/:id")
  .delete((req, res, next) => {
    equipes = equipes.splice(
      equipes.findIndex((u) => req.params.id == u.id),
      1
    );

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.params.id);
  })
  .put((req, res, next) => {
    equipes = equipes.splice(
      equipes.findIndex((u) => req.params.id == u.id),
      1,
      req.body
    );

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.body);
  });

module.exports = router;
