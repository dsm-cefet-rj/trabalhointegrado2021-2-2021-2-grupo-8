import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTarefas } from "../../storeConfig/tarefasSlice";
import MenuHome from "./MenuHome";
import QuadroTarefas from "./QuadroTarefas";

function Home() {
  const equipeAtiva = useSelector((state) => state.equipeAtiva);
  const loggedUser = useSelector((state) => state.loggedUser);
  const tarefas = useSelector((state) => state.tarefas);
  const dispatch = useDispatch();

  useEffect(() => {
    let tasks = { ...tarefas };
    tasks.paradas = equipeAtiva.tarefas.filter((t) => {
      return t.idResponsavel == 0;
    });

    tasks.andamento = equipeAtiva.tarefas.filter((t) => {
      return t.idResponsavel != 0 && t.idResponsavel != loggedUser.id;
    });

    tasks.minhas = equipeAtiva.tarefas.filter((t) => {
      return t.idResponsavel == loggedUser.id;
    });

    dispatch(setTarefas(tasks));
  }, [equipeAtiva]);

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>
      <main className="container">
        <h3 className="text-center my-4">
          {"Equipe " + equipeAtiva.info.name}
        </h3>
        <QuadroTarefas/>

        <MenuHome/>
      </main>
    </div>
  );
}

export default Home;
