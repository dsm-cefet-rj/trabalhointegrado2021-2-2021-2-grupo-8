import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import CardMinhaEquipe from "./CardMinhaEquipe";
import { useDispatch, useSelector } from "react-redux";
import { fetchEquipes } from "../../storeConfig/equipesSlice";
import { fetchUsuarios } from "../../storeConfig/usuariosSlice";
import { setEquipes } from "../../storeConfig/loggedUserSlice";

function MinhasEquipes() {
  const dispatch = useDispatch();
  const minhasEquipes = useSelector((state) => state.loggedUser.equipes);
  const usuarios = useSelector((state) => state.usuarios);
  const equipes = useSelector((state) => state.equipes);

  useEffect(() => {
    if (equipes.status === "idle") {
      dispatch(fetchEquipes());
    }

    if (usuarios.status === "idle") {
      dispatch(fetchUsuarios());
    }

    dispatch(setEquipes(equipes.data));
  }, [equipes, usuarios, dispatch]);

  const mapEquipe = (equipe) => {
    const gerente = usuarios.data.find((user) => user.id === equipe.gerente);

    let membros = [];

    equipe.membros.forEach((m) =>
      membros.push(usuarios.data.find((u) => u.id === m))
    );

    if (equipes.status !== "succeeded" || usuarios.status !== "succeeded") {
      return <h3 key={equipe.id} className="text-center">Loading</h3>;
    } else {
      return (
        <CardMinhaEquipe
          key={equipe.id}
          equipe={equipe}
          gerente={gerente}
          membros={membros}
        />
      );
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
