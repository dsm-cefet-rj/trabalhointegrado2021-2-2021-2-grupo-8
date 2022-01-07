import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getEquipeAtiva } from "../../storeConfig/loggedUserSlice";
import {
  addTarefaServer,
  selectTarefaIds,
  updateTarefaServer,
} from "../../storeConfig/tarefasSlice";

function FormTarefa() {
  const navigate = useNavigate();

  const location = useLocation();
  const { tarefa } = location.state;

  const dispatch = useDispatch();
  const equipeAtiva = useSelector(getEquipeAtiva);
  const tarefasIds = useSelector(selectTarefaIds);

  let novaTarefa = {
    id: -1,
    equipe: tarefa.equipe,
    nome: tarefa.nome,
    dataPrazo: tarefa.dataPrazo,
    horaPrazo: tarefa.horaPrazo,
    descricao: tarefa.descricao,
    urgencia: tarefa.urgencia,
    responsavel: tarefa.responsavel,
  };

  const handleAddTarefa = (idUser) => {
    if (tarefa.id !== undefined) {
      novaTarefa.id = tarefa.id;
      dispatch(updateTarefaServer(novaTarefa));
    } else {
      novaTarefa.id = tarefasIds.at(-1) + 1;
      novaTarefa.equipe = equipeAtiva.info.id;
      novaTarefa.responsavel = 0;
      dispatch(addTarefaServer(novaTarefa));
    }
    console.log(novaTarefa);
  };

  return (
    <div className="corpo">
      <header className="cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Nova Tarefa</h3>

        <section className="d-flex flex-column">
          <label className="mb-4">
            Nome da Tarefa:
            <input
              type="text"
              className="input-novo w-50"
              placeholder="Digite o nome da tarefa"
              name="nome"
              id="nome"
              defaultValue={tarefa.nome}
              onChange={(e) => {
                novaTarefa.nome = e.target.value;
              }}
            />
          </label>

          <label className="mb-4">
            Prazo:
            <input
              className="input-novo"
              type="date"
              name="dataPrazo"
              id="dataPrazo"
              defaultValue={tarefa.dataPrazo}
              onChange={(e) => {
                novaTarefa.dataPrazo = e.target.value;
              }}
            />
            <input
              className="input-novo"
              type="time"
              name="horaPrazo"
              id="horaPrazo"
              defaultValue={tarefa.horaPrazo}
              onChange={(e) => {
                novaTarefa.horaPrazo = e.target.value;
              }}
            />
          </label>

          <label className="mb-4">
            Urgência:
            <select
              className="input-novo"
              name="urgencia"
              id="urgencia"
              defaultValue={tarefa.urgencia}
              onChange={(e) => {
                novaTarefa.urgencia = e.target.value;
              }}
            >
              <option value="#"></option>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baixa">Baixa</option>
            </select>
          </label>
          <label>
            Descrição:
            <textarea
              className="input-descricao"
              name="descricao"
              placeholder="Digite a descrição da tarefa"
              name="descricao"
              id="descricao"
              defaultValue={tarefa.descricao}
              onChange={(e) => {
                novaTarefa.descricao = e.target.value;
              }}
            />
          </label>
        </section>

        <section className="menu">
          <Link to={"/" + equipeAtiva.info.id + "/home"}>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddTarefa}
            >
              Enviar
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Voltar
          </button>
        </section>
      </main>
    </div>
  );
}

export default FormTarefa;
