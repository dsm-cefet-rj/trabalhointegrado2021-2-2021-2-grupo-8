const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventoSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  equipe: {
    type: Number,
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

var Eventos = mongoose.model("Evento", eventoSchema);

module.exports = Eventos;
