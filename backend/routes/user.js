var express = require("express");
var router = express.Router();

const bodyParser = require("body-parser");
var User = require("../models/user");
var passport = require("passport");
var authenticate = require("../authenticate");

router.use(bodyParser.json());

router.post("/signup", (req, res, next) => {
  User.register(
    new User({
      username: req.body.username,
      email: req.body.email,
      nome: req.body.nome,
      tel: req.body.tel,
    }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 409;
        res.setHeader("Content-Type", "application/json");
        if (err.code === 11000) {
          res.json({
            name: "EmailExistingError",
            message: "O email já está em uso",
          });
        } else if (err.name === "UserExistsError") {
          res.json({
            name: "UserExistsError",
            message: "O username escolhido já está em uso",
          });
        } else {
          res.json(err);
        }
      } else {
        passport.authenticate("local")(req, res, () => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ success: true, status: "Registrado com sucesso!" });
        });
      }
    }
  );
});
router.post("/login", passport.authenticate("local"), (req, res) => {
  var token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.json({ id: req.user._id, token: token });
});

router
  .route("/usuarios")
  .get(authenticate.verifyUser, async (req, res, next) => {
    try {
      const usuarios = await User.find({});
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(usuarios);
    } catch (err) {
      next(err);
    }
  });

router
  .route("/usuarios/:id")
  .get(authenticate.verifyUser, async (req, res, next) => {
    try {
      const usuario = await User.findById(req.params.id);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(usuario);
    } catch (err) {
      next(err);
    }
  })
  .delete(authenticate.verifyUser, async (req, res, next) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(req.params.id);
    } catch (err) {
      next(err);
    }
  })
  .put(authenticate.verifyUser, async (req, res, next) => {
    try {
      await User.findByIdAndUpdate(req.params.id, req.body);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(req.params.id);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
