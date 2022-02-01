const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

var Usuarios = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuarios;
