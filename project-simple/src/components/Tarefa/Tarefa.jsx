import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import semFoto from "../../assets/sem-foto-homem.jpg";
import MenuGerente from "./MenuGerente";
import MenuTarefa from "./MenuTarefa";

function Tarefa({
  login,
  equipe,
  atribuirTarefa,
  excluirTarefa,
  devolverTarefa,
}) {
  const navigate = useNavigate();

  const location = useLocation();
  const { tarefa, gerente } = location.state;

  const [display, setDisplay] = useState("");
  const [responsavel, setResponsavel] = useState({});

  useEffect(() => {
    if (tarefa.idResponsavel != 0) {
      const r = equipe.membros.filter((m) => {
        return m.id == tarefa.idResponsavel;
      });
      setResponsavel(r[0]);
    }

    if (!gerente || tarefa.responsavel) {
      setDisplay("hide");
    }
  }, [equipe]);

  const handleAtribuirTarefa = (t, id) => {
    atribuirTarefa(t, id);
  };

  const handleExcluirTarefa = (t) => {
    excluirTarefa(t);
  };

  const handleDevolverTarefa = (t) => {
    devolverTarefa(t);
  };

  if (
    tarefa.idResponsavel != 0 &&
    tarefa.idResponsavel != login.id &&
    gerente
  ) {
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
            <div className="mt-2">
              <label className="mb-1">Descrição:</label>
              <span className="span-tarefa descricao-tarefa">
                {tarefa.descricao}
              </span>
            </div>
            <div className= {`d-flex justify-content-center mt-2 ${display}`}>
              <div className="card card-membro">
                <p className="text-center">Responsável</p>
                <img className="img-fluid" src={semFoto} alt="foto membro" />
                <p className="text-center">{responsavel.id}</p>
                <p className="text-center">{responsavel.name}</p>
              </div>
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
          <div className="menu">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                navigate(-1);
              }}
            >
              Voltar
            </button>
          </div>
        </main>
      </div>
    );
  } else {
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
            finalizarTarefa={handleExcluirTarefa}
          />
          <MenuGerente
            isGerente={gerente}
            tarefa={tarefa}
            excluirTarefa={handleExcluirTarefa}
          />
          <div className="menu">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                navigate(-1);
              }}
            >
              Voltar
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default Tarefa;
