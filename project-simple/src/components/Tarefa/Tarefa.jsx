import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuMembro from "./MenuMembro";
import MenuGerente from "./MenuGerente";
import tasksSheet from "../../data/dataTasks.json";
import teamsSheet from "../../data/dataTeams.json";

function Tarefa({ login }) {
  const { idTask, idTeam } = useParams();

  const [tarefa, setTarefa] = useState();

  useEffect(() => {
    const tarefaAtiva = tasksSheet.filter((t) => {
      return idTask == t.idTask;
    });
    setTarefa(tarefaAtiva[0]);
  }, [idTask]);

  const renderMenu = () => {
    const equipe = teamsSheet.filter((e) => {
      return idTeam == e.id;
    });
    console.log(equipe[0]);
    if(equipe[0].gerente == login.id){
      return <MenuGerente/>
    } else {
      return <MenuMembro/>;
    }
  };

  console.log(login);

  if (typeof tarefa != "undefined" && tarefa.idTeam == idTeam) {
    return (
      <div className="corpo">
        <header className="container cabecalho">
          <h1 className="app-name">Project Simple</h1>
        </header>

        <main className="container">
          <h3 className="text-center my-4">{tarefa.name}</h3>

          <section className="container">
            <div className="text-center">
              <label className="d-inline-block mb-3">
                Prazo:
                <span className="span-tarefa mx-1">
                  {tarefa.dataPrazo + " " + tarefa.horaPrazo}
                </span>
              </label>
              <label className="d-inline-block mb-3">
                Urgência:
                <span className="span-tarefa mx-1">{tarefa.urgencia}</span>
              </label>
            </div>
            <div className="d-flex flex-column mt-2">
              <label className="mb-1">Descrição:</label>
              <span className="span-tarefa descricao-tarefa">
                {tarefa.descricao}
              </span>
            </div>
          </section>

          {renderMenu()}
          
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

export default Tarefa;
