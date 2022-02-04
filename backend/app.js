var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

const mongoose = require("mongoose");

const url = "mongodb+srv://nickbs:UxroUVhWEHMUvhbI@cluster0.oznxp.mongodb.net/projectsimple?retryWrites=true&w=majority";
const connect = mongoose.connect(url);

connect.then(
  (db) => {
    console.log("Connected to MongoDB server");
  },
  (err) => {
    console.log(err);
  }
);

var indexRouter = require("./routes/index");
var usuariosRouter = require("./routes/usuarios");
var equipesRouter = require("./routes/equipes");
var tarefasRouter = require("./routes/tarefas");
var eventosRouter = require("./routes/eventos");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuariosRouter);
app.use("/equipes", equipesRouter);
app.use("/tarefas", tarefasRouter);
app.use("/eventos", eventosRouter);

module.exports = app;
