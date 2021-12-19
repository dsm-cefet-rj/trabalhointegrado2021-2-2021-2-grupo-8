import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdicionarMembro from "./components/AdicionarMembro/AdicionarMembro";
import AtribuirTarefa from "./components/AtribuirTarefa/AtribuirTarefa";
import Eventos from "./components/Eventos/Eventos";
import GerenciarEquipe from "./components/GerenciarEquipe/GerenciarEquipe";
import GerenciarEventos from "./components/GerenciarEventos/GerenciarEventos";
import GerenteTarefa from "./components/GerenteTarefa/GerenteTarefa";
import Home from "./components/Home/Home";
import MembroTarefa from "./components/MembroTarefa/MembroTarefa";
import MinhasEquipes from "./components/MinhasEquipes/MinhasEquipes";
import NovaEquipe from "./components/NovaEquipe/NovaEquipe";
import NovaTarefa from "./components/NovaTarefa/NovaTarefa";
import NovoEvento from "./components/NovoEvento/NovoEvento";
import userSheet from "./data/dataUser.json";
import teamsSheet from "./data/dataTeams.json";
import membersSheet from "./data/dataMembers.json";
import tasksSheet from "./data/dataTasks.json";
import eventsSheet from "./data/dataEvents.json";
import Tarefa from "./components/Tarefa/Tarefa";

function App() {

  const [login, setLogin] = useState({ id: 1061 });
  const [equipesGerenciadas, setEquipesGerenciadas] = useState([]);
  const [outrasEquipes, setOutrasEquipes] = useState([]);
  const [tarefas, setTarefas] = useState({
    paradas: [],
    andamento: [],
    minhas: [],
  });
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    setEquipesGerenciadas(
      teamsSheet.filter((equipe) => {
        return equipe.gerente === login.id;
      })
    );

    const membroEquipe = membersSheet.filter((element) => {
      return element.idUser === login.id;
    });

    let arrayOutrasEquipes = [];

    membroEquipe.forEach((element) => {
      const equipe = teamsSheet.filter((e) => {
        return e.id === element.idTeam;
      });
      arrayOutrasEquipes.push(equipe[0]);
    });

    setOutrasEquipes(arrayOutrasEquipes);
  }, [login]);


  const criarEvento = (newEvent) => {
    console.log("Chamei a funcao");
    setEventos([...eventos, newEvent]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MinhasEquipes
              equipesGerenciadas={equipesGerenciadas}
              outrasEquipes={outrasEquipes}
            />
          }
        />
        <Route path="/:idTeam/home" element={<Home login={login} />}/>
        <Route path="/:idTeam/task/:idTask" element={<Tarefa login={login}/>}/>
      </Routes>

      {/*<AdicionarMembro dataUser = {dataUser} />*/
      /*<NovoEvento criarEvento = {criarEvento} />*/}
    </Router>
  );
}

export default App;
