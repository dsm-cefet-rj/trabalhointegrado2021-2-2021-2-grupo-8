import React from "react";
import { useLocation } from "react-router-dom";
import MenuGerente from "./MenuGerente";
import MenuTarefa from "./MenuTarefa";

function Tarefa({ login, atribuirTarefa, excluirTarefa, devolverTarefa }) {

  const location = useLocation();
  const { tarefa, gerente } = location.state;

  const handleAtribuirTarefa = (t, id) => {
    atribuirTarefa(t, id);
  };

  const handleExcluirTarefa = (t) => {
    excluirTarefa(t);
  };

  const handleDevolverTarefa = (t) => {
    devolverTarefa(t);
  };

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

        <MenuTarefa
          login={login}
          tarefa={tarefa}
          atribuirTarefa={handleAtribuirTarefa}
          devolverTarefa={handleDevolverTarefa}
        />
        <MenuGerente
          isGerente={gerente}
          tarefa={tarefa}
          excluirTarefa={handleExcluirTarefa}
        />
      </main>
    </div>
  );
}

export default Tarefa;
