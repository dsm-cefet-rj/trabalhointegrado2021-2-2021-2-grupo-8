import React from "react";

function NovaTarefa() {
  return (
    <div className="corpo">
      <header className="cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Nova Tarefa</h3>

        <section className="d-flex flex-column">
          <label className="mb-4">
            Nome da Tarefa:
            <input
              type="text"
              className="input-novo w-50"
              placeholder="Digite o nome da tarefa"
            />
          </label>

          <label className="mb-4">
            Prazo:
            <input
              className="input-novo"
              type="datetime-local"
              name="prazo"
              id="prazo"
            />
          </label>

          <label className="mb-4">
            Urgência:
            <select className="input-novo" name="urgencia" id="urgencia">
              <option value="#"></option>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baixa">Baixa</option>
            </select>
          </label>
          <label>
            Descrição:
            <textarea
              className="input-descricao"
              name="descricao"
              placeholder="Digite a descrição da tarefa"
            ></textarea>
          </label>
        </section>

        <section className="menu d-flex flex-wrap justify-content-evenly">
          <button type="button" className="btn btn-success">
            Atribuir Tarefa
          </button>

          <button type="button" className="btn btn-success">
            Postar Tarefa
          </button>
        </section>
      </main>
    </div>
  );
}

export default NovaTarefa;
