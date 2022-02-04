const mongoose = require("mongoose");
const normalize = require("./normalizeMongoose.js");
const Schema = mongoose.Schema;

const eventoSchema = new Schema({
  equipe: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  dataInicio: {
    type: String,
    required: true,
  },
  horaInicio: {
    type: String,
    required: true,
  },
  dataFim: {
    type: String,
    required: true,
  },
  horaFim: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
});

eventoSchema.plugin(normalize);

module.exports = mongoose.model("Evento", eventoSchema);
