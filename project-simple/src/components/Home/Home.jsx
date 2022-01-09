import React from "react";
import { useSelector } from "react-redux";
import { getEquipeAtiva } from "../../storeConfig/loggedUserSlice";
import MenuHome from "./MenuHome";
import QuadroTarefas from "./QuadroTarefas";

function Home() {
  const equipeAtiva = useSelector(getEquipeAtiva);

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>
      <main className="container">
        <h3 className="text-center my-4">
          {"Equipe " + equipeAtiva.info.nome}
        </h3>
        <QuadroTarefas />
        <MenuHome />
      </main>
    </div>
  );
}

export default Home;
