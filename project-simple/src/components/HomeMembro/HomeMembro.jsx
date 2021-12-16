import React from "react";
import CardMembroTarefa from "./CardMembroTarefa";

function HomeMembro() {
  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>
      <main className="container principal">
        <h3 className="text-center my-4">Bem-vindo, usuário</h3>
        <section>
          <div className="nome-tabela">
            <h2>Tarefas disponíveis</h2>
          </div>
          <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
            <CardMembroTarefa />
            <CardMembroTarefa />
            <CardMembroTarefa />
            <CardMembroTarefa />
          </div>
        </section>

        <section className="my-4">
          <div className="nome-tabela">
            <h2>Minhas Tarefas</h2>
          </div>
          <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
            <CardMembroTarefa />
            <CardMembroTarefa />
            <CardMembroTarefa />
            <CardMembroTarefa />
          </div>
        </section>

        <section className="menu">
          <div className="btn btn-primary">Minhas Tarefas</div>
          <div className="btn btn-primary">Calendário de Eventos</div>
        </section>
      </main>
    </div>
  );
}

export default HomeMembro;
