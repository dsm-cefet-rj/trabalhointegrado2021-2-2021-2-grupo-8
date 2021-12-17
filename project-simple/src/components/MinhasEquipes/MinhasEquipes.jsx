import React, { useEffect, useState } from "react";
import CardMinhaEquipe from "./CardMinhaEquipe";

function MinhasEquipes({ equipesGerenciadas, outrasEquipes }) {
  console.log(equipesGerenciadas);

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <section className="lista-equipes d-flex flex-column">
          <h3 className="text-center my-3">Equipes que você gerencia</h3>
          {equipesGerenciadas.map((e, idx) => {
            return <CardMinhaEquipe key={idx} equipe = {e} />;
          })}
        </section>
        <hr />
        <section className="lista-equipes d-flex flex-column mt-5">
          <h3 className="text-center my-3">Outras Equipes</h3>
        </section>
      </main>
    </div>
  );
}

export default MinhasEquipes;
