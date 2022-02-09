import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventos } from "../../storeConfig/eventosSlice";
import { getEquipeAtiva } from "../../storeConfig/loggedUserSlice";
import { fetchTarefas } from "../../storeConfig/tarefasSlice";
import MenuHome from "./MenuHome";
import QuadroTarefas from "./QuadroTarefas";

function Home() {
  const dispatch = useDispatch();
  const equipeAtiva = useSelector(getEquipeAtiva);
  const tarefas = useSelector((state) => state.tarefas);
  const token = useSelector(state => state.loggedUser.token)

  useEffect(() => {
    if (tarefas.status === "idle" || tarefas.status === "updated") {
      dispatch(fetchTarefas(token));
    }
  }, [tarefas, dispatch]);

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>
      <main className="container">
        <h3 className="text-center my-4">
          {"Equipe " + equipeAtiva.equipe.nome}
        </h3>
        <QuadroTarefas />
        <MenuHome />
      </main>
    </div>
  );
}

export default Home;
