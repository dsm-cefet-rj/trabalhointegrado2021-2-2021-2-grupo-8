import { string, object, number, setLocale, array } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

export let equipeSchema = object().shape({
  id: number().default(-1),
  nome: string().required().min(5).max(30).default(""),
  gerente: number().required().default(0),
  dataCriacao: string().default(() => {
    let data = new Date();
    return (
      data.getFullYear() +
      "-" +
      ("0" + data.getMonth() + 1).slice(-2) +
      "-" +
      ("0" + data.getDate()).slice(-2)
    );
  }),
  descricao: string().required().max(200).default(""),
  membros: array().of(number()).default([]),
});
