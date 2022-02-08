var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const passport = require("passport");
var authenticate = require('./authenticate');

const mongoose = require("mongoose");
const { connection_string, secretKey } = require("./environment/vars");


const connect = mongoose.connect(connection_string, {
  useNewUrlParser: false,
  useUnifiedTopology: true,
});

connect.then(
  (db) => {
    console.log("Connected to MongoDB server");
  },
  (err) => {
    console.log(err);
  }
);

var userRouter = require("./routes/user");
var usuariosRouter = require("./routes/usuarios");
var equipesRouter = require("./routes/equipes");
var tarefasRouter = require("./routes/tarefas");
var eventosRouter = require("./routes/eventos");

var app = express();
app.use(passport.initialize());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", userRouter);
app.use("/usuarios", authenticate.verifyUser, usuariosRouter);
app.use("/equipes", authenticate.verifyUser, equipesRouter);
app.use("/tarefas", authenticate.verifyUser, tarefasRouter);
app.use("/eventos", authenticate.verifyUser, eventosRouter);

module.exports = app;
