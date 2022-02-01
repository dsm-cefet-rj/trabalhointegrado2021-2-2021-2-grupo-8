var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const Eventos = require("../models/eventos");

router.use(bodyParser.json());

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const eventos = await Eventos.find({});
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(eventos);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      await Eventos.create(req.body);
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
      const evento = await Eventos.find({ id: req.params.id });
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(evento);
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      await Eventos.deleteOne({ id: req.params.id });
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(req.params.id);
    } catch (err) {
      next(err);
    }
  })
  .put(async(req, res, next) => {
    try {
      await Eventos.replaceOne({ id: req.params.id }, req.body);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(req.body);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
