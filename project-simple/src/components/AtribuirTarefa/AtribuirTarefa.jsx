import React from "react";
import semFoto from "../../assets/sem-foto-homem.jpg";

function AtribuirTarefa() {
  return (
    <body className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Selecione um membro da equipe</h3>

        <section className="d-flex flex-column align-items-center">

          <div className="container card card-membro">
            <div className="row">
              <div className="col">
                <img className="img-fluid" src={semFoto} alt="foto membro" />
              </div>
              <div className="col d-flex flex-column justify-content-evenly">
                <p className="">Nome</p>
                <p className="">Cargo</p>
                <p className="">Data de ingresso</p>
              </div>
            </div>
            <hr />
            <div className="text-center">
              <a href="#" className="btn btn-primary">
                Atribuir Tarefa
              </a>
            </div>
          </div>
          
          <div className="container card card-membro">
            <div className="row">
              <div className="col">
                <img className="img-fluid" src={semFoto} alt="foto membro" />
              </div>
              <div className="col d-flex flex-column justify-content-evenly">
                <p className="">Nome</p>
                <p className="">Cargo</p>
                <p className="">Data de ingresso</p>
              </div>
            </div>
            <hr />
            <div className="text-center">
              <a href="#" className="btn btn-primary">
                Atribuir Tarefa
              </a>
            </div>
          </div>

        </section>
      </main>
    </body>
  );
}

export default AtribuirTarefa;
