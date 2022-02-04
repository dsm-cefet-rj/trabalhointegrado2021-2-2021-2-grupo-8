const mongoose = require("mongoose");
const normalize = require("./normalizeMongoose.js");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

usuarioSchema.plugin(normalize);

module.exports = mongoose.model("Usuario", usuarioSchema);
