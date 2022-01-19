import { string, object, number, setLocale, date, array } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

export let tarefaSchema = object().shape({
  id: number().default(-1),
  equipe: number().default(-1),
  nome: string().required().min(5).max(30).default(""),
  dataPrazo: string().required().default(""),
  horaPrazo: string().required().default(""),
  descricao: string().required().max(200).default(""),
  urgencia: string().oneOf(["alta", "media","baixa"]).required(),
  responsavel: number().default(0)
});