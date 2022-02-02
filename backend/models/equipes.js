const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const equipeSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  gerente: {
    type: Number,
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
    type: [Number],
    required: true,
  },
});

module.exports = mongoose.model('Equipe', equipeSchema);