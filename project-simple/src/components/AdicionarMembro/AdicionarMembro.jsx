import React from "react";
import semFoto from "../../assets/sem-foto-homem.jpg";

function AdicionarMembro() {
  return (
    <body className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Adicione um Membro à sua Equipe</h3>

        <section className="container w-100 mb-3 text-center">
          <input
            type="email"
            className="text-center form-control mb-3"
            placeholder="Buscar usuário"
          />
          <a href="#" className="btn btn-primary">
            Buscar
          </a>
        </section>

        <section className="d-flex flex-wrap justify-content-evenly">

          <div className="card card-membro">
            <img
              className="card-img-top"
              src={semFoto}
              alt="foto membro"
            />
            <div className="card-body">
              <p className="card-title">Nome</p>
              <p className="card-text">Cargo</p>
              <hr />
              <a href="#" className="btn btn-success">
                Adicionar Membro
              </a>
            </div>
          </div>

          <div className="card card-membro">
            <img
              className="card-img-top"
              src={semFoto}
              alt="foto membro"
            />
            <div className="card-body">
              <p className="card-title">Nome</p>
              <p className="card-text">Cargo</p>
              <hr />
              <a href="#" className="btn btn-success">
                Adicionar Membro
              </a>
            </div>
          </div>

        </section>
      </main>
    </body>
  );
}

export default AdicionarMembro;
