import React from "react";
import semFoto from "../../assets/sem-foto-homem.jpg";

function GerenciarEquipe() {
  return (
    <body className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Gerencie sua equipe</h3>
        <section className="d-flex flex-wrap justify-content-evenly">
          <div className="card card-membro">
            <img className="card-img-top" src={semFoto} alt="foto membro" />
            <div className="card-body">
              <p className="card-title">Nome</p>
              <p className="card-text">Cargo</p>
              <hr />
              <p>
                <a href="#" className="btn btn-success w-100">
                  Atribuir Tarefa
                </a>
                <a href="#" className="btn btn-danger w-100">
                  Excluir Membro
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="menu">
          <button type="button" className="btn btn-secondary">
            Adicionar membro
          </button>
        </section>
      </main>
    </body>
  );
}

export default GerenciarEquipe;
