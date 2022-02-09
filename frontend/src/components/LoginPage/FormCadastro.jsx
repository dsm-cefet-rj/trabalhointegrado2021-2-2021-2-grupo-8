import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { userSchema } from "./UserSchema";



function FormCadastro() {

  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("");
  };

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>
      <main className="container">
        <h3 className="text-center my-3">Sign In</h3>
        <div className="d-flex justify-content-center my-4">
          <form className="w-75" onSubmit={handleSubmit}>
            <label htmlFor="nome" className="form-label ">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="Digite seu nome"
            />
            <label htmlFor="email" className="form-label mt-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Digite seu e-mail"
            />
            <label htmlFor="tel" className="form-label mt-2">
              Telefone
            </label>
            <input
              type="text"
              id="tel"
              className="form-control"
              placeholder="Digite seu telefone"
            />
            <div className="d-flex">
              <div className="d-flex flex-column me-4">
                <label htmlFor="password" className="form-label mt-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Crie uma senha"
                />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="password2" className="form-label mt-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password2"
                  className="form-control"
                  placeholder="Confirme sua senha"
                />
              </div>
            </div>
            <section className="menu">
            <button type="submit"
            className="btn btn-success"
            onClick={() => {
                navigate("/login");
              }}>
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
