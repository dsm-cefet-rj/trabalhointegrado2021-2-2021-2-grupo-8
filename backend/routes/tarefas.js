var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const Tarefas = require("../models/tarefas");

router.use(bodyParser.json());

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const tarefas = await Tarefas.find({});
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(tarefas);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      await Tarefas.create(req.body);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(req.body);
    } catch (err) {
      next(err);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const tarefa = await Tarefas.findById(req.params.id);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(tarefa);
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      await Tarefas.findByIdAndDelete(req.params.id );
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(req.params.id);
    } catch (err) {
      next(err);
    }
  })
  .put(async(req, res, next) => {
    try {
      await Tarefas.findByIdAndUpdate(req.params.id, req.body);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(req.body);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
