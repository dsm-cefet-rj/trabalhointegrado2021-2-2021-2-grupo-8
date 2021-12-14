import React from "react";

function NovaEquipe() {
  return (
    <body className="corpo">
      <header className="cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Nova Equipe</h3>

        <section className="d-flex flex-column">
          <label className="mb-4">
            Nome da Equipe:
            <input
              type="text"
              className="input-novo w-50"
              placeholder="Digite o nome da Equipe"
            ></input>
          </label>

          <label>
            Descrição:
            <textarea
              className="input-descricao"
              name="descricao"
              placeholder="Digite uma breve descrição sobre a equipe e seus objetivos"
            ></textarea>
          </label>
        </section>

        <section className="menu d-flex flex-wrap justify-content-evenly">
          <button type="button" className="btn btn-success">
            Criar Equipe
          </button>
        </section>
      </main>
    </body>
  );
}

export default NovaEquipe;
