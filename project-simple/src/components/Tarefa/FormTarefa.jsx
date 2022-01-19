import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getEquipeAtiva } from "../../storeConfig/loggedUserSlice";
import {
  addTarefaServer,
  selectTarefaIds,
  updateTarefaServer,
} from "../../storeConfig/tarefasSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { tarefaSchema } from "./TarefaSchema";

function FormTarefa() {
  const navigate = useNavigate();

  const location = useLocation();
  const { tarefa } = location.state;

  const dispatch = useDispatch();
  const equipeAtiva = useSelector(getEquipeAtiva);
  const tarefasIds = useSelector(selectTarefaIds);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(tarefaSchema),
  });

  let [novaTarefa] = useState(
    tarefa.id !== undefined ? tarefa : tarefaSchema.cast({})
  );

  const onSubmit = (data) => {
    novaTarefa.dataPrazo = data.dataPrazo;
    novaTarefa.descricao = data.descricao;
    novaTarefa.horaPrazo = data.horaPrazo;
    novaTarefa.nome = data.nome;
    novaTarefa.urgencia = data.urgencia;
    if (novaTarefa.id === -1) {
      novaTarefa.id = tarefasIds.at(-1) + 1;
      novaTarefa.equipe = equipeAtiva.info.id;
      novaTarefa.responsavel = 0; 
      dispatch(addTarefaServer(novaTarefa))
      navigate(-1)
    } else {
      dispatch(updateTarefaServer(novaTarefa))
      navigate(-2)
    }
  };

  return (
    <div className="corpo">
      <header className="cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Nova Tarefa</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Titulo
            </label>
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="Digite o titulo da tarefa"
              defaultValue={novaTarefa.nome}
              {...register("nome")}
            />
            <span className="help-block">{errors.nome?.message}</span>
          </div>
          <div className="row mb-3">
            <label className="form-label">Prazo</label>
            <div className="input-dataHora">
              <input
                type="date"
                className="form-control w-50 me-2"
                defaultValue={novaTarefa.dataPrazo}
                {...register("dataPrazo")}
              />
              <span className="help-block">{errors.dataPrazo?.message}</span>
              <input
                type="time"
                className="form-control w-25 me-2"
                defaultValue={novaTarefa.horaPrazo}
                {...register("horaPrazo")}
              />
              <span className="help-block">{errors.horaPrazo?.message}</span>
            </div>
          </div>
          <label className="form-label" htmlFor="urgencia">
            Urgência
          </label>
          <div className="mb-3">
            <select
              className="form-select w-25"
              id="urgencia"
              defaultValue={novaTarefa.urgencia}
              {...register("urgencia")}
            >
              <option value={null}>Selecione</option>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baixa">Baixa</option>
            </select>
            <span className="help-block">{errors.urgencia?.message}</span>
          </div>
          <label className="col-md-4 control-label" htmlFor="descricao">
            Descrição
          </label>
          <textarea
            rows="6"
            className="form-control"
            id="descricao"
            name="descricao"
            placeholder="Digite uma descrição para a tarefa"
            defaultValue={novaTarefa.descricao}
            {...register("descricao")}
          />
          <span className="help-block">{errors.descricao?.message}</span>
          <section className="menu">
            <button type="submit" className="btn btn-success">
              Enviar
            </button>
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
        </form>
      </main>
    </div>
  );
}

export default FormTarefa;
