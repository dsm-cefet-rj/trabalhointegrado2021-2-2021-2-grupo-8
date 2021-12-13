import React from "react";

function AceitarTarefa() {
  return (
    <body className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-4">Nome da tarefa</h3>

        <section className="container">
          <div className="text-center">
            <label className="d-inline-block mb-3">
              Prazo:<span className="span-tarefa mx-1">Prazo da Tarefa</span>
            </label>
            <label className="d-inline-block mb-3">
              Urgência:<span className="span-tarefa mx-1">Alta!</span>
            </label>
          </div>
          <div className="d-flex flex-column mt-2">
            <label className="mb-1">Descrição:</label>
            <span className="span-tarefa descricao-tarefa">
              Descrição da tarefa
            </span>
          </div>
        </section>

        <section className="menu">
          <button type="button" className="btn btn-success" id="accept-task">
            Aceitar tarefa
          </button>
        </section>
      </main>
    </body>
  );
}

export default AceitarTarefa;
