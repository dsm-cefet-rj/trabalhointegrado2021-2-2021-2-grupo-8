import React from "react";

function HomeGerente() {
  return (
    <body className="corpo">
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
            <div className="tarefa-card">documento de prototipagem</div>
            <div className="tarefa-card">Montar telas em HTML</div>
            <div className="tarefa-card">Refinar Prototipos HTML</div>
            <div className="tarefa-card">Montar tabela CRUD</div>
            <div className="tarefa-card">Validar Requisitos</div>
          </div>
        </section>
        <section className="mt-4">
          <div className="nome-tabela">
            <h2>Tarefas em Andamento</h2>
          </div>
          <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
            <div className="tarefa-card">Montar documento de prototipagem</div>
            <div className="tarefa-card">Montar telas em HTML</div>
            <div className="tarefa-card">Refinar Prototipos HTML</div>
            <div className="tarefa-card">Montar tabela CRUD</div>
            <div className="tarefa-card">Componentização</div>
          </div>
        </section>
        <section classNameName="my-4">
          <div classNameName="nome-tabela">
            <h2>Minhas Tarefas</h2>
          </div>
          <div classNameName="tabela-tarefas d-flex flex-wrap justify-content-evenly">
            <div classNameName="tarefa-card">
              Montar documento de prototipagem
            </div>
            <div classNameName="tarefa-card">Montar telas em HTML</div>
            <div classNameName="tarefa-card">Tarefa1</div>
            <div classNameName="tarefa-card">Tarefa1</div>
            <div classNameName="tarefa-card">Tarefa1</div>
          </div>
        </section>
        <section className="menu">
          <div className="btn btn-primary">Gerenciar Eventos</div>
          <div className="btn btn-primary">Gerenciar Equipe</div>
        </section>
      </main>
    </body>
  );
}

export default HomeGerente;
