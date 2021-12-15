import React from "react";
import CardTarefa from "./CardTarefa";

function HomeGerente() {
  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>
      <main className="container">
        <h3 className="text-center my-4">Bem-vindo, usuário</h3>
        <section>
          <div className="nome-tabela">
            <h2>Tarefas paradas</h2>
          </div>
          <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
            <CardTarefa />
            <CardTarefa />
            <CardTarefa />
            <CardTarefa />
          </div>
        </section>
        <section className="mt-4">
          <div className="nome-tabela">
            <h2>Tarefas em Andamento</h2>
          </div>
          <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
            <CardTarefa />
            <CardTarefa />
            <CardTarefa />
            <CardTarefa />
          </div>
        </section>
        <section className="my-4">
          <div className="nome-tabela">
            <h2>Minhas Tarefas</h2>
          </div>
          <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
            <CardTarefa />
            <CardTarefa />
            <CardTarefa />
            <CardTarefa />
          </div>
        </section>
        <section className="menu">
          <div className="btn btn-primary">Gerenciar Eventos</div>
          <div className="btn btn-primary">Gerenciar Equipe</div>
        </section>
      </main>
    </div>
  );
}

export default HomeGerente;
