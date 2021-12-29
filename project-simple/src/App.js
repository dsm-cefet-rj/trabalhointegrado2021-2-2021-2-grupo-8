import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdicionarMembro from "./components/MinhasEquipes/AdicionarMembro";
import Eventos from "./components/Eventos/Eventos";
import GerenciarEquipe from "./components/MinhasEquipes/GerenciarEquipe";
import Home from "./components/Home/Home";
import MinhasEquipes from "./components/MinhasEquipes/MinhasEquipes";
import NovaTarefa from "./components/Tarefa/NovaTarefa";
import NovoEvento from "./components/Eventos/NovoEvento";
import teamsSheet from "./data/dataTeams.json";
import membersSheet from "./data/dataMembers.json";
import eventsSheet from "./data/dataEvents.json";
import Tarefa from "./components/Tarefa/Tarefa";
import FormTarefa from "./components/Tarefa/FormTarefa";
import AtribuirTarefa from "./components/Tarefa/AtribuirTarefa";
import NovaEquipe from "./components/MinhasEquipes/NovaEquipe";
import { useDispatch, useSelector } from "react-redux";
import { setMyTeams } from "./storeConfig/minhasEquipesSlice";
import api from "./api/api";

function App() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.loggedUser.id);
  const equipeAtiva = useSelector((state) => state.equipeAtiva);

  useEffect(() => {

    let gerenciadas = teamsSheet.filter((equipe) => {
      return equipe.gerente === login;
    });

    const membroEquipe = membersSheet.filter((element) => {
      return element.idUser === login;
    });

    let outras = [];

    membroEquipe.forEach((element) => {
      const equipe = teamsSheet.filter((e) => {
        return e.id === element.idTeam;
      });
      outras.push(equipe[0]);
    });

    dispatch(
      setMyTeams({
        gerenciadas: gerenciadas,
        outras: outras,
      })
    );
  }, [login]);

  const handleAddEvento = (novoEvento) => {
    const lastId = eventsSheet.slice(-1)[0].idEvent;
    novoEvento.idTeam = equipeAtiva.info.id;
    novoEvento.idEvent = lastId + 1;

    let novoEstado = Object.assign({}, equipeAtiva);
    novoEstado.eventos.push(novoEvento);
  };

  const handleExcluirEvento = (evento) => {
    let eventos = [...equipeAtiva.eventos];
    eventos.splice(
      eventos.findIndex((e) => {
        return evento.idEvent === e.idEvent;
      }),
      1
    );

    let novoEstado = Object.assign({}, equipeAtiva);
    novoEstado.eventos = eventos;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MinhasEquipes />} />
        <Route path="/:idTeam/home" element={<Home />} />

        <Route path="/:idTeam/task/:idTask" element={<Tarefa />} />
        <Route
          path="/:idTeam/task/:idTask/atribuir"
          element={<AtribuirTarefa />}
        />

        <Route path="/:idTeam/novaTarefa" element={<NovaTarefa />} />

        <Route
          path="/:idTeam/eventos"
          element={
            <Eventos
              eventos={equipeAtiva.eventos}
              idTeam={equipeAtiva.info.id}
              idEvent={equipeAtiva.idEvent}
              excluirEvento={handleExcluirEvento}
            />
          }
        />

        <Route
          path="/:idTeam/eventos/novoEvento"
          element={
            <NovoEvento
              addEvento={handleAddEvento}
              idTeam={equipeAtiva.info.id}
            />
          }
        />

        <Route path="/:idTeam/gerenciarEquipe" element={<GerenciarEquipe />} />

        <Route
          path="/:idTeam/gerenciarEquipe/addMembro"
          element={<AdicionarMembro />}
        />

        <Route path="/novaEquipe" element={<NovaEquipe />} />
      </Routes>
    </Router>
  );
}

export default App;
