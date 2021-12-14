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
            <img className="img-fluid" src={semFoto} alt="foto membro" />

            <div className="col d-flex flex-column justify-content-evenly">
              <p className="">Nome</p>
              <p className="">Cargo</p>
              <p className="">Data de ingresso</p>
            </div>
            <hr />
            <div className="text-center">
              <p>
                <a href="#" className="btn btn-success">
                  Atribuir Tarefa
                </a>
              </p>
              <p>
                <a href="#" className="btn btn-danger">
                  Excluir Membro
                </a>
              </p>
            </div>
          </div>
          
          <div className="card card-membro">
            <img className="img-fluid" src={semFoto} alt="foto membro" />

            <div className="col d-flex flex-column justify-content-evenly">
              <p className="">Nome</p>
              <p className="">Cargo</p>
              <p className="">Data de ingresso</p>
            </div>
            <hr />
            <div className="text-center">
              <p>
                <a href="#" className="btn btn-success">
                  Atribuir Tarefa
                </a>
              </p>
              <p>
                <a href="#" className="btn btn-danger">
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
