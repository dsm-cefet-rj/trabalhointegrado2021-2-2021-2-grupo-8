const mongoose = require("mongoose");
const normalize = require("./plugins/normalizeMongoose.js");
const Schema = mongoose.Schema;

const equipeSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  gerente: {
    type: String,
    required: true,
  },
  dataCriacao: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  membros: {
    type: [String],
    required: true,
  },
});

equipeSchema.plugin(normalize);

module.exports = mongoose.model("Equipe", equipeSchema);














