import { string, object, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

export let userSchema = object().shape({
  username: string().required().min(5).max(30).default(""),
  email: string().email().required(),
  password: string().required("Password is required"),
  passwordConfirmation: string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
