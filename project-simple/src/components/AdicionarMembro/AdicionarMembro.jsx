import React from "react";
import CardAddMembro from "./CardAddMembro";


function AdicionarMembro() {
  return (
    <body className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Adicione um Membro à sua Equipe</h3>

        <section className="container mb-3 text-center">
          <input
            type="email"
            className="text-center form-control mb-3"
            placeholder="Buscar usuário"
          />
          <a href="#" className="btn btn-primary">
            Buscar
          </a>
        </section>

        <section className="d-flex flex-wrap justify-content-evenly">

          <CardAddMembro/>
          <CardAddMembro/>
          <CardAddMembro/>
          <CardAddMembro/>

        </section>
      </main>
    </body>
  );
}

export default AdicionarMembro;
