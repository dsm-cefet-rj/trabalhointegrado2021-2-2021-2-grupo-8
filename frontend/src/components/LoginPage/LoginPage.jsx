import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const idUser = useSelector((state) => state.loggedUser.id);
  const error = useSelector((state) => state.loggedUser.error);

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>
      <main className="container">
        <div>
          {error && <p>{error}</p>}
          {idUser && <Navigate to="/minhasEquipes" replace={true} />}
          <form onSubmit={(event) => console.log(event)}>
            <input type="text" name="username" />
            <input type="password" name="password" />
          </form>
        </div>
      </main>
    </div>
  );
}
export default LoginPage;

{/*<main className="container">
        <h3 className="text-center my-3">Sign In</h3>
        <div className="d-flex justify-content-center my-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome" className="form-label ">
              Titulo
            </label>
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="Digite o titulo da tarefa"
            />
            <label htmlFor="password" className="form-label mt-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Digite sua senha"
            />
          </form>
        </div>
      </main>*/}