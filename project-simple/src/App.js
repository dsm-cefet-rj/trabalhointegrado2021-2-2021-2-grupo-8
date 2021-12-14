import "./App.css";
import AceitarTarefa from "./components/AceitarTarefa/AceitarTarefa";
import AdicionarMembro from "./components/AdicionarMembro/AdicionarMembro";
import AtribuirTarefa from "./components/AtribuirTarefa/AtribuirTarefa";
import Eventos from "./components/Eventos/Eventos";
import GerenciarEquipe from "./components/GerenciarEquipe/GerenciarEquipe";
import GerenciarEventos from "./components/GerenciarEventos/GerenciarEventos";
import GerenteTarefa from "./components/GerenteTarefa/GerenteTarefa";
import HomeGerente from "./components/HomeGerente/HomeGerente";
import HomeMembro from "./components/HomeMembro/HomeMembro";
import MembroTarefa from "./components/MembroTarefa/MembroTarefa";
import MinhasEquipes from "./components/MinhasEquipes/MinhasEquipes";
import NovaEquipe from "./components/NovaEquipe/NovaEquipe";
import NovaTarefa from "./components/NovaTarefa/NovaTarefa";
import NovoEvento from "./components/NovoEvento/NovoEvento";

function App() {
  return (
    <div>
      <GerenteTarefa/>
    </div>
  );
}

export default App;
