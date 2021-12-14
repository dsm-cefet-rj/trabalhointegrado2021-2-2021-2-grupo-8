import React from "react";
import CardAtribuir from "./CardAtribuir";

function AtribuirTarefa() {
  return (
    <body className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Selecione um membro da equipe</h3>

        <section className="d-flex flex-wrap justify-content-evenly">
          
          <CardAtribuir/>
        </section>
      </main>
    </body>
  );
}

export default AtribuirTarefa;
