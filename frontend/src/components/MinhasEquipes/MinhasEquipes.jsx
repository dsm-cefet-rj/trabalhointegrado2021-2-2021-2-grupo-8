import { React } from "react";
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

  const mapEquipes = (mode) => {
    if (
      (statusEquipes === "succeeded" || statusEquipes === "updated") &&
      (statusUsuarios === "succeeded" || statusUsuarios === "updated")
    ) {
      let arrayEquipes = [];
      if (mode === "gerenciadas") {
        arrayEquipes = equipes.filter((e) => e.gerente === idUser);
      } else if (mode === "outras") {
        arrayEquipes = equipes.filter((e) => e.membros.includes(idUser));
      }

      if (arrayEquipes.length > 0) {
        return arrayEquipes.map((e) => {
          const gerente = usuarios.find((user) => user.id === e.gerente);
          let membros = [];
          if (e.membros.length > 0) {
            e.membros.forEach((m) => {
              membros.push(usuarios.find((u) => u.id === m));
            });
          }
          return (
            <CardMinhaEquipe
              key={e.id}
              equipe={e}
              gerente={gerente}
              membros={membros}
            />
          );
        });
      } else {
        return (
          <div className="text-center p-6">Nenhuma equipe a ser exibida</div>
        );
      }
    } else if (statusEquipes === "loading" || statusUsuarios === "loading") {
      return <div className="text-center p-6">Carregando equipes</div>;
    } else {
      return <div className="text-center p-6">Erro ao carregar equipes</div>;
    }
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
          {mapEquipes("gerenciadas")}
        </section>
        <hr />
        <section className="lista-equipes d-flex flex-column mt-5">
          <h3 className="text-center my-3">Outras Equipes</h3>
          {mapEquipes("outras")}
        </section>
      </main>
    </div>
  );
}

export default MinhasEquipes;
