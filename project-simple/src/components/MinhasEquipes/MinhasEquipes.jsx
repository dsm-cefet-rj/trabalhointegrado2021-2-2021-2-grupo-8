import React from "react";
import CardMinhaEquipe from "./CardMinhaEquipe";
import userData from "../../data/dataUser.json";
import membersSheet from "../../data/dataMembers.json";

function MinhasEquipes({ equipesGerenciadas, outrasEquipes }) {

  const mapEquipe = (equipe, idx) => {
    const gerente = userData.filter((user) => {
      return user.id === equipe.gerente;
    });

    const membroEquipe = membersSheet.filter((entrada) => {
      return entrada.idTeam === equipe.id;
    });

    let membros = [];

    membroEquipe.forEach((element) => {
      const membro = userData.filter((user) => {
        return user.id === element.idUser;
      });
      membros.push(membro[0]);
    });

    return (
      <CardMinhaEquipe
        key={equipe.id}
        equipe={equipe}
        nomeGerente={gerente[0].name}
        membros={membros}
      />
    );
  }

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <section className="lista-equipes d-flex flex-column">
          <h3 className="text-center my-3">Equipes que você gerencia</h3>
          {equipesGerenciadas.map(mapEquipe)}
        </section>
        <hr />
        <section className="lista-equipes d-flex flex-column mt-5">
          <h3 className="text-center my-3">Outras Equipes</h3>
          {outrasEquipes.map(mapEquipe)}
        </section>
      </main>
    </div>
  );
}

export default MinhasEquipes;
