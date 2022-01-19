import { string, object, number, setLocale, date, array } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

export let eventoSchema = object().shape({
    id: number().default(-1),
    equipe: number().default(-1),
    nome: string().required().min(5).max(30).default(""),
    dataInicio: string().required().default(""),
    horaInicio: string().required().default(""),
    dataFim: string().required().default(""),
    horaFim: string().required().default(""),
    descricao: string().required().max(200).default(""),
    tipo:string().oneOf(["aniversario", "deadline","reuniao","outros"]).required()

});