var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const Equipes = require("../models/equipes");

router.use(bodyParser.json());

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const equipes = await Equipes.find({});
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(equipes);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      await Equipes.create(req.body);
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
      const equipe = await Equipes.findById(req.params.id);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(equipe);
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      await Equipes.findByIdAndDelete(req.params.id);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(req.params.id);
    } catch (err) {
      next(err);
    }
  })
  .put(async(req, res, next) => {
    try {
      await Equipes.findByIdAndUpdate(req.params.id, req.body);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(req.body);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
