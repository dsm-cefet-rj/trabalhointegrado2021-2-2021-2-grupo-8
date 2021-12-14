import React from "react";
import semFoto from "../../assets/sem-foto-homem.jpg";
import CardGerenciarEquipe from "./CardGerenciarEquipe";


function GerenciarEquipe() {
  return (
    <body className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Gerencie sua equipe</h3>
        <section className="d-flex flex-wrap justify-content-evenly">

          
        <CardGerenciarEquipe/>
        <CardGerenciarEquipe/>
        <CardGerenciarEquipe/>


        </section>

        <section className="menu">
          <button type="button" className="btn btn-secondary">
            Adicionar membro
          </button>
        </section>
      </main>
    </body>
  );
}

export default GerenciarEquipe;
