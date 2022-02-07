import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardMinhaEquipe from "./CardMinhaEquipe";
import { useSelector } from "react-redux";
import { selectAllEquipes } from "../../storeConfig/equipesSlice";
import { selectAllUsuarios } from "../../storeConfig/usuariosSlice";

function MinhasEquipes() {
  const usuarios = useSelector(selectAllUsuarios);
  const equipes = useSelector(selectAllEquipes);
  const statusEquipes = useSelector((state) => state.equipes.status);
  const statusUsuarios = useSelector((state) => state.usuarios.status);
  const idUser = useSelector((state) => state.loggedUser.id);

  const [minhasEquipes, setMinhasEquipes] = useState([]);

  useEffect(() => {
    if (statusEquipes === "succeeded" && statusUsuarios === "succeeded") {
      let temp = [];
      equipes
        .filter((e) => e.gerente === idUser || e.membros.includes(idUser))
        .forEach((e) => {
          let membros = [];
          e.membros.forEach((m) => {
            membros.push(usuarios.find((u) => u.id === m));
          });
          temp.push({
            ...e,
            gerente: usuarios.find((u) => u.id === e.gerente),
            membros: membros,
          });
        });
      setMinhasEquipes(temp);
    }
  }, [statusEquipes, statusUsuarios]);

  const mapEquipes = (array) => {
    return array.map((e) => {
      if (statusEquipes === "succeeded" && statusUsuarios === "succeeded") {
        return <CardMinhaEquipe key={e.id} equipe={e} />;
      } else {
        return <p>Carregando card</p>;
      }
    });
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
            <Link to={"/formEquipe"} state={{ equipe: {} }}>
              <span className="btn btn-primary">Criar Nova Equipe</span>
            </Link>
          </section>
          {mapEquipes(minhasEquipes.filter((e) => e.gerente.id === idUser))}
        </section>
        <hr />
        <section className="lista-equipes d-flex flex-column mt-5">
          <h3 className="text-center my-3">Outras Equipes</h3>
        </section>

        {mapEquipes(minhasEquipes.filter((e) => e.gerente.id !== idUser))}
      </main>
    </div>
  );
}

export default MinhasEquipes;
