import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { userSchema } from "./UsuarioSchema";
import { useDispatch, useSelector } from "react-redux";
import { resetErrors, signup } from "../../storeConfig/loggedUserSlice";

function FormCadastro() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupMsg = useSelector((state) => state.loggedUser.signupMsg);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    const { passwordConfirmation, ...usuario } = data;
    console.log(usuario);
    dispatch(signup(usuario));
  };

  useEffect(()=>{
    if (signupMsg === "Registration Successful! Redirecting..."){
      setTimeout(() => {
        dispatch(resetErrors())
        navigate("/login")
      }, 3000);
    }
  },[signupMsg])

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>
      <main className="container">
        <h3 className="text-center my-3">Sign In</h3>
        <div className="d-flex justify-content-center my-4">
          <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
            <span className="help-block">{!!signupMsg && signupMsg}</span><br/>
            <label htmlFor="nome" className="form-label ">
              Username
            </label>
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="Digite seu nome"
              {...register("username")}
            />
            <span className="help-block">{errors.username?.message}</span>
            <br />
            <label htmlFor="nome" className="form-label ">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="Digite seu nome"
              {...register("nome")}
            />
            <span className="help-block">{errors.nome?.message}</span>
            <br />
            <label htmlFor="email" className="form-label mt-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            <span className="help-block">{errors.email?.message}</span>
            <br />
            <label htmlFor="tel" className="form-label mt-2">
              Telefone
            </label>
            <input
              type="text"
              id="tel"
              className="form-control"
              placeholder="Digite seu telefone"
              {...register("tel")}
            />
            <span className="help-block">{errors.tel?.message}</span>
            <div className="d-flex">
              <div className="d-flex flex-column me-4">
                <label htmlFor="password" className="form-label mt-2">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Crie uma senha"
                  {...register("password")}
                />
                <span className="help-block">{errors.password?.message}</span>
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="password2" className="form-label mt-2">
                  Confirme sua senha
                </label>
                <input
                  type="password"
                  id="password2"
                  className="form-control"
                  placeholder="Confirme sua senha"
                  {...register("passwordConfirmation")}
                />
                <span className="help-block">
                  {errors.passwordConfirmation?.message}
                </span>
              </div>
            </div>
            <section className="menu mt-5">
              <button type="submit" className="btn btn-success">
                Enviar
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Voltar
              </button>
            </section>
          </form>
        </div>
      </main>
    </div>
  );
}

export default FormCadastro;
