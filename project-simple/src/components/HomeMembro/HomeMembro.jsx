import React from "react";

function HomeMembro() {
  return (
    <div classNameName="corpo">
      <header classNameName="container cabecalho">
        <h1 classNameName="app-name">Project Simple</h1>
      </header>
      <main classNameName="container principal">
        <h3 classNameName="text-center my-4">Bem-vindo, usuário</h3>
        <section>
          <div classNameName="nome-tabela">
            <h2>Tarefas disponíveis</h2>
          </div>
          <div classNameName="tabela-tarefas d-flex flex-wrap justify-content-evenly">
            <div classNameName="tarefa-card">Montar documento de prototipagem</div>
            <div classNameName="tarefa-card">Montar telas em HTML</div>
            <div classNameName="tarefa-card">Tarefa1</div>
            <div classNameName="tarefa-card">Tarefa1</div>
            <div classNameName="tarefa-card">Tarefa1</div>
          </div>
        </section>

        <section classNameName="my-4">
          <div classNameName="nome-tabela">
            <h2>Minhas Tarefas</h2>
          </div>
          <div classNameName="tabela-tarefas d-flex flex-wrap justify-content-evenly">
            <div classNameName="tarefa-card">Montar documento de prototipagem</div>
            <div classNameName="tarefa-card">Montar telas em HTML</div>
            <div classNameName="tarefa-card">Tarefa1</div>
            <div classNameName="tarefa-card">Tarefa1</div>
            <div classNameName="tarefa-card">Tarefa1</div>
          </div>
        </section>

        <section classNameName="menu">
          <div classNameName="btn btn-primary">Minhas Tarefas</div>
          <div classNameName="btn btn-primary">Calendário de Eventos</div>
        </section>
      </main>
    </div>
  );
}

export default HomeMembro;
