const mongoose = require("mongoose");
const normalize = require("./plugins/normalizeMongoose.js");
const Schema = mongoose.Schema;

const tarefaSchema = new Schema({
  equipe: {
    type: String,
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
    type: String,
    required: true,
  },
});

tarefaSchema.plugin(normalize);

module.exports = mongoose.model("Tarefa", tarefaSchema);
