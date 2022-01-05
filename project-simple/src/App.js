import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdicionarMembro from "./components/MinhasEquipes/AdicionarMembro";
import Eventos from "./components/Eventos/Eventos";
import GerenciarEquipe from "./components/MinhasEquipes/GerenciarEquipe";
import Home from "./components/Home/Home";
import MinhasEquipes from "./components/MinhasEquipes/MinhasEquipes";
import NovaTarefa from "./components/Tarefa/NovaTarefa";
import NovoEvento from "./components/Eventos/NovoEvento";
import Tarefa from "./components/Tarefa/Tarefa";
import AtribuirTarefa from "./components/Tarefa/AtribuirTarefa";
import NovaEquipe from "./components/MinhasEquipes/NovaEquipe";
import { useDispatch, useSelector } from "react-redux";
import { fetchEquipes } from "./storeConfig/equipesSlice";
import { setEquipes } from "./storeConfig/loggedUserSlice";
import { fetchUsuarios } from "./storeConfig/usuariosSlice";

function App() {

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

        <Route path="/:idTeam/eventos" element={<Eventos />} />

        <Route path="/:idTeam/eventos/novoEvento" element={<NovoEvento />} />

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
