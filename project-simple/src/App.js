import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdicionarMembro from "./components/MinhasEquipes/AdicionarMembro";
import Eventos from "./components/Eventos/Eventos";
import GerenciarEquipe from "./components/MinhasEquipes/GerenciarEquipe";
import Home from "./components/Home/Home";
import MinhasEquipes from "./components/MinhasEquipes/MinhasEquipes";
import FormTarefa from "./components/Tarefa/FormTarefa";
import NovoEvento from "./components/Eventos/NovoEvento";
import Tarefa from "./components/Tarefa/Tarefa";
import AtribuirTarefa from "./components/Tarefa/AtribuirTarefa";
import NovaEquipe from "./components/MinhasEquipes/NovaEquipe";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchEquipes } from "./storeConfig/equipesSlice";
import { fetchUsuarios } from "./storeConfig/usuariosSlice";
import { fetchTarefas } from "./storeConfig/tarefasSlice";
import { fetchEventos } from "./storeConfig/eventosSlice";

function App() {
  const dispatch = useDispatch();
  const idUser = useSelector((state) => state.loggedUser.id);
  const usuarios = useSelector((state) => state.usuarios);
  const equipes = useSelector((state) => state.equipes);
  const tarefas = useSelector((state) => state.tarefas);
  const eventos = useSelector(state => state.eventos);

  useEffect(() => {
    if (equipes.status === "idle") {
      dispatch(fetchEquipes(idUser));
    }
  }, [equipes, dispatch]);

  useEffect(() => {
    if (usuarios.status === "idle") {
      dispatch(fetchUsuarios());
    }
  }, [usuarios, dispatch]);

  useEffect(() => {
    if (tarefas.status === "idle") {
      dispatch(fetchTarefas());
    }
  }, [tarefas, dispatch]);
  
  useEffect(() => {
    if (eventos.status === "idle") {
      dispatch(fetchEventos());
    }
  }, [eventos, dispatch]);

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

        <Route path="/:idTeam/formTarefa" element={<FormTarefa />} />

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
