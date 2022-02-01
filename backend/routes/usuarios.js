var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const Usuarios = require("../models/usuarios");

router.use(bodyParser.json());

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const usuarios = await Usuarios.find({});
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(usuarios);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      await Usuarios.create(req.body);
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
      const usuario = await Usuarios.find({ id: req.params.id });
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(usuario);
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      await Usuarios.deleteOne({ id: req.params.id });
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(req.params.id);
    } catch (err) {
      next(err);
    }
  })
  .put(async(req, res, next) => {
    try {
      await Usuarios.replaceOne({ id: req.params.id }, req.body);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(req.params.id);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
