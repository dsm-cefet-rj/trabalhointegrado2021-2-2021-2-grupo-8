import React, { Fragment, useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import CardTarefa from "./CardTarefa";
import teamsSheet from "../../data/dataTeams.json";
import tasksSheet from "../../data/dataTasks.json";
import eventsSheet from "../../data/dataEvents.json";

function Home({ login }) {
  const { idTeam } = useParams();

  const [equipe, setEquipe] = useState();
  const [tarefas, setTarefas] = useState({
    paradas: [],
    andamento: [],
    minhas: [],
  });
  const [eventos, setEventos] = useState();

  useEffect(() => {
    const eq = teamsSheet.filter((e) => {
      return idTeam == e.id;
    });
    setEquipe(eq[0]);
  }, [idTeam]);

  useEffect(() => {
    if (typeof equipe != "undefined") {
      setTarefas(() => {
        const tarefasAtivas = tasksSheet.filter((t) => {
          return equipe.id === t.idTeam;
        });

        const tarefasParadas = tarefasAtivas.filter((t) => {
          return t.idResponsavel === 0 && equipe.id === t.idTeam;
        });

        const tarefasAndamento = tarefasAtivas.filter((t) => {
          return t.idResponsavel !== 0 && equipe.id === t.idTeam;
        });

        const minhasTarefas = tarefasAtivas.filter((t) => {
          return t.idResponsavel === login.id && equipe.id === t.idTeam;
        });

        return {
          paradas: tarefasParadas,
          andamento: tarefasAndamento,
          minhas: minhasTarefas,
        };
      });
      setEventos(
        eventsSheet.filter((e) => {
          return equipe.id === e.idTeam;
        })
      );
    }
  }, [equipe]);

  console.log(equipe);
  console.log(tarefas);
  console.log(eventos);

  const renderTarefas = (t) => {
    return <CardTarefa tarefa={t} />;
  };

  if (typeof equipe != "undefined") {
    return (
      <div className="corpo">
        <header className="container cabecalho">
          <h1 className="app-name">Project Simple</h1>
        </header>
        <main className="container">
          <h3 className="text-center my-4">{"Equipe " + equipe.name}</h3>
          <section>
            <div className="nome-tabela">
              <h2>Tarefas paradas</h2>
            </div>
            <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
              {tarefas.paradas.map(renderTarefas)}
            </div>
          </section>
          <section className="mt-4">
            <div className="nome-tabela">
              <h2>Tarefas em Andamento</h2>
            </div>
            <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
              {tarefas.andamento.map(renderTarefas)}
            </div>
          </section>
          <section className="my-4">
            <div className="nome-tabela">
              <h2>Minhas Tarefas</h2>
              {tarefas.minhas.map(renderTarefas)}
            </div>
            <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly"></div>
          </section>
          <section className="menu">
            <span className="btn btn-primary">Gerenciar Eventos</span>
            <span className="btn btn-primary">Gerenciar Equipe</span>
            <Link to={"/"}>
              <span className="btn btn-primary">Minhas Equipes</span>
            </Link>
          </section>
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
