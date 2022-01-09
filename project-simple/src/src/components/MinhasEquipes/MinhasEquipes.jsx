import { React } from "react";
import { Link } from "react-router-dom";
import CardMinhaEquipe from "./CardMinhaEquipe";
import { useSelector } from "react-redux";
import { selectAllEquipes } from "../../storeConfig/equipesSlice";
import { selectAllUsuarios } from "../../storeConfig/usuariosSlice";

function MinhasEquipes() {
  const usuarios = useSelector(selectAllUsuarios);
  const equipes = useSelector(selectAllEquipes);
  const idUser = useSelector((state) => state.loggedUser.id);

  const mapEquipes = (mode) => {
    let arrayEquipes = [];
    if (mode === "gerenciadas") {
      arrayEquipes = equipes.filter((e) => e.gerente === idUser);
    } else if (mode === "outras") {
      arrayEquipes = equipes.filter((e) => e.membros.includes(idUser));
    }

    if (equipes.status === "loading" || usuarios.status === "loading") {
      return <h3 className="text-center">Carregando cards...</h3>;
    } else if (equipes.status === "failed" || usuarios.status === "failed") {
      return <h3 className="text-center">Falha ao carregar equipes.</h3>;
    } else {
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
