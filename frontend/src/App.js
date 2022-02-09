import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import AdicionarMembro from "./components/MinhasEquipes/AdicionarMembro";
import Eventos from "./components/Eventos/Eventos";
import GerenciarEquipe from "./components/MinhasEquipes/GerenciarEquipe";
import Home from "./components/Home/Home";
import MinhasEquipes from "./components/MinhasEquipes/MinhasEquipes";
import FormTarefa from "./components/Tarefa/FormTarefa";
import FormEvento from "./components/Eventos/FormEvento";
import Tarefa from "./components/Tarefa/Tarefa";
import AtribuirTarefa from "./components/Tarefa/AtribuirTarefa";
import FormEquipe from "./components/MinhasEquipes/FormEquipe";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchEquipes } from "./storeConfig/equipesSlice";
import { fetchUsuarios } from "./storeConfig/usuariosSlice";
import LoginPage from "./components/LoginPage/LoginPage";
import NotFound from "./components/LoginPage/NotFound";
import FormCadastro from "./components/LoginPage/FormUsuario";

function App() {
  const dispatch = useDispatch();
  const idUser = useSelector((state) => state.loggedUser.id);
  const token = useSelector((state) => state.loggedUser.token);
  const usuarios = useSelector((state) => state.usuarios);
  const equipes = useSelector((state) => state.equipes);

  useEffect(() => {
    if ((usuarios.status === "idle" || usuarios.status === "updated") && idUser) {
      dispatch(fetchUsuarios(token));
    }
  }, [usuarios, idUser, dispatch]);

  useEffect(() => {
    if ((equipes.status === "idle" || equipes.status === "updated") && idUser) {
      dispatch(fetchEquipes(token));
    }
  }, [equipes, idUser, dispatch]);

  if (!idUser) {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
          <Route path="/signIn" element={<FormCadastro />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Navigate to="/minhasEquipes" replace={true} />} />
          <Route path="/minhasEquipes" element={<MinhasEquipes />} />
          <Route path="/:idTeam/home" element={<Home />} />

          <Route path="/:idTeam/task/:idTask" element={<Tarefa />} />
          <Route
            path="/:idTeam/task/:idTask/atribuir"
            element={<AtribuirTarefa />}
          />

          <Route path="/:idTeam/formTarefa" element={<FormTarefa />} />

          <Route path="/:idTeam/eventos" element={<Eventos />} />

          <Route path="/:idTeam/eventos/formEvento" element={<FormEvento />} />

          <Route
            path="/:idTeam/gerenciarEquipe"
            element={<GerenciarEquipe />}
          />

          <Route
            path="/:idTeam/gerenciarEquipe/addMembro"
            element={<AdicionarMembro />}
          />

          <Route path="/formEquipe" element={<FormEquipe />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
