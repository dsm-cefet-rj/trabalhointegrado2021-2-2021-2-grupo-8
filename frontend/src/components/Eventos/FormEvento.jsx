import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getEquipeAtiva } from "../../storeConfig/loggedUserSlice";
import {
  addEventoServer,
  selectEventoIds,
  updateEventoServer,
} from "../../storeConfig/eventosSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { eventoSchema } from "./EventoSchema";

function FormEvento() {
  const location = useLocation();
  const { evento } = location.state;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const equipeAtiva = useSelector(getEquipeAtiva);
  const eventosIds = useSelector(selectEventoIds);

  let [novoEvento] = useState(
    evento.id !== undefined ? evento : eventoSchema.cast({})
  );

  const{
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(eventoSchema)
  })

  const onSubmit = (data) => {
    novoEvento.nome = data.nome;
    novoEvento.dataInicio = data.dataInicio;
    novoEvento.horaInicio = data.horaInicio;
    novoEvento.dataFim = data.dataFim;
    novoEvento.horaFim = data.horaFim;
    novoEvento.descricao = data.descricao;
    novoEvento.tipo = data.tipo;
    if (novoEvento.id === -1) {
      novoEvento.id = eventosIds.length === 0 ? 0 : eventosIds.at(-1) + 1;
      novoEvento.equipe = equipeAtiva.info.id;
      dispatch(addEventoServer(novoEvento))
    } else {
      dispatch(updateEventoServer(novoEvento))
    }
    navigate(-1)
  };

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Novo Evento</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="d-flex flex-column">
            <label className="mb-4">
              Nome do Evento:
              <input
                type="text"
                className="input-novo w-50"
                placeholder="Digite o nome do evento"
                defaultValue={evento.nome}
                {...register("nome")}
              />
              <span className="help-block">{errors.nome?.message}</span>
            </label>
            <label className="mb-4">
              Início:
              <input
                className="input-novo"
                type="date"
                nome="inicio-evento"
                defaultValue={evento.dataInicio}
                {...register("dataInicio")}
              />
              <span className="help-block">{errors.dataInicio?.message}</span>
              <input
                className="input-novo"
                type="time"
                nome="inicio-evento"
                defaultValue={evento.horaInicio}
                {...register("horaInicio")}
              />
              <span className="help-block">{errors.horaInicio?.message}</span>
            </label>
            <label className="mb-4">
              Fim:
              <input
                className="input-novo"
                type="date"
                nome="fim-evento"
                defaultValue={evento.dataFim}
                {...register("dataFim")}
              />
              <span className="help-block">{errors.dataFim?.message}</span>
              <input
                className="input-novo"
                type="time"
                nome="fim-evento"
                defaultValue={evento.horaFim}
                {...register("horaFim")}
              />
              <span className="help-block">{errors.horaFim?.message}</span>
            </label>
            <label className="mb-4">
              Tipo:
              <select
                className="input-novo"
                nome="tipo"
                id="tipo"
                defaultValue={evento.tipo}
                {...register("tipo")}
              >
                <option value={null}>Selecione</option>
                <option value="reuniao">Reunião</option>
                <option value="deadline">Deadline</option>
                <option value="aniversario">Aniversário</option>
                <option value="outro">Outro</option>
              </select>
              <span className="help-block">{errors.tipo?.message}</span>
            </label>
            <label>
              Descrição:
              <textarea
                className="input-descricao"
                nome="descricao"
                placeholder="Digite a descrição do evento"
                defaultValue={evento.descricao}
                {...register("descricao")}
              ></textarea>
              <span className="help-block">{errors.descricao?.message}</span>
            </label>
          </section>
          <section className="menu">
            <button
              type="submit"
              className="btn btn-success"
            >
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

export default FormEvento;
