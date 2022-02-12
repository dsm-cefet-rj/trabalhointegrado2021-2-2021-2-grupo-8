import { string, object, setLocale, ref } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

export let userSchema = object().shape({
  username: string().required().min(5).max(30).default(""),
  nome: string().required().default(""),
  tel: string().required(),
  email: string().email().required(),
  password: string().required(),
  passwordConfirmation: string().oneOf(
    [ref("password"), null],
    "Passwords must match"
  ),
});
