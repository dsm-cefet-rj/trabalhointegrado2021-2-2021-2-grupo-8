const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tarefaSchema = new Schema({
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
  dataPrazo: {
    type: String,
    required: true,
  },
  horaPrazo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  urgencia: {
    type: String,
    required: true,
  },
  responsavel: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Tarefa", tarefaSchema);
