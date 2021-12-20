import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MenuHome from "./MenuHome";
import tasksSheet from "../../data/dataTasks.json";
import eventsSheet from "../../data/dataEvents.json";
import QuadroTarefas from "./QuadroTarefas";
import Tarefa from "../Tarefa/Tarefa";

function Home({ login, equipe }) {
  const [equipeAtiva, setEquipeAtiva] = useState({});
  const [tarefas, setTarefas] = useState({
    paradas: [],
    andamento: [],
    minhas: [],
  });

  useEffect(() => {
    setEquipeAtiva(equipe);

    setTarefas(() => {

      const tarefasParadas = equipe.tarefas.filter((t) => {
        return t.idResponsavel == 0;
      });

      const tarefasAndamento = equipe.tarefas.filter((t) => {
        return t.idResponsavel != 0;
      });

      const minhasTarefas = equipe.tarefas.filter((t) => {
        return t.idResponsavel == login.id;
      });

      return {
        paradas: tarefasParadas,
        andamento: tarefasAndamento,
        minhas: minhasTarefas,
      };
    });
  }, [equipe]);

  const atribuirTarefa = (tarefa) => {
    console.log("Atribui");
    console.log(tarefa);
  };

  if (typeof equipeAtiva != "undefined") {
    return (
      <div className="corpo">
        <header className="container cabecalho">
          <h1 className="app-name">Project Simple</h1>
        </header>
        <main className="container">
          <h3 className="text-center my-4">{"Equipe " + equipe.info.name}</h3>
          <QuadroTarefas
            tarefas={tarefas}
            gerente={equipeAtiva.isGerente}
            atribuirTarefa={atribuirTarefa}
          />

          <MenuHome gerente={equipeAtiva.isGerente} equipe={equipeAtiva} />
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <p>Nenhuma Equipe Selecionada</p>
      </div>
    );
  }
}

export default Home;
