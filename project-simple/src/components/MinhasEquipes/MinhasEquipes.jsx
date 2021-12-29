import React from "react";
import { Link } from "react-router-dom";
import CardMinhaEquipe from "./CardMinhaEquipe";
import userData from "../../data/dataUser.json";
import membersSheet from "../../data/dataMembers.json";
import { useSelector } from "react-redux";



function MinhasEquipes() {

  const minhasEquipes = useSelector(state => state.minhasEquipes)

  const mapEquipe = (equipe) => {
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
        gerente={gerente[0]}
        membros={membros}
      />
    );
  };

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <section className="lista-equipes d-flex flex-column">
          <h3 className="text-center my-3">Equipes que você gerencia</h3>
          <section className="menu">
          <Link to={"/novaEquipe"}>
            <span className="btn btn-primary">Criar Nova Equipe</span>
          </Link>
        </section>
          {minhasEquipes.gerenciadas.map(mapEquipe)}
        </section>
        <hr />
        <section className="lista-equipes d-flex flex-column mt-5">
          <h3 className="text-center my-3">Outras Equipes</h3>
          {minhasEquipes.outras.map(mapEquipe)}
        </section>
      </main>
    </div>
  );
}

export default MinhasEquipes;
