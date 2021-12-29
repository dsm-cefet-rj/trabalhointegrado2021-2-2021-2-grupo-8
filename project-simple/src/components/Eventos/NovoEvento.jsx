import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addEvento } from "../../storeConfig/equipeAtivaSlice";


function NovoEvento() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const equipeAtiva = useSelector(state => state.equipeAtiva)

  let newEvent = {
      name: "",
      idEvent: "",
      idTeam:"",
      dataInicio:"",
      horaInicio:"",
      dataFim:"",
      horaFim:"",
      descricao: "",
      importancia:"",
      tipo:"",
    }


  const handleAddEvento = () => {
    newEvent.idTeam = equipeAtiva.info.id
    newEvent.idEvent = equipeAtiva.eventos.at(-1).idEvent + 1;

    dispatch(addEvento(newEvent))
    navigate(-1)
  }

  return (
    <div className="corpo">
      <header className="cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Novo Evento</h3>

        <section className="d-flex flex-column">
            <label className="mb-4">
              Nome do Evento:
              <input
                type="text"
                className="input-novo w-50"
                placeholder="Digite o nome do evento"
                onChange={(e) => {
                  newEvent.name = e.target.value;
                }}
              />
            </label>

            <label className="mb-4">
              Início:
              <input
                className="input-novo"
                type="date"
                name="inicio-evento"
                onChange={(e)=>{
                  newEvent.dataInicio = e.target.value;
                }}
              />
              <input
                className="input-novo"
                type="time"
                name="inicio-evento"
                onChange={(e)=>{
                  newEvent.horaInicio = e.target.value;
                }}
              />
            </label>

            <label className="mb-4">
              Fim:
              <input
                className="input-novo"
                type="date"
                name="fim-evento"
                onChange={(e)=>{
                  newEvent.dataFim = e.target.value;
                }}
              />
              <input
                className="input-novo"
                type="time"
                name="fim-evento"
                onChange={(e)=>{
                  newEvent.horaFim = e.target.value;
                }}
              />
            </label>

            <label className="mb-4">
              Importância:
              <select className="input-novo" name="importancia" id="importancia" onChange={(e)=>{
                  newEvent.importancia = e.target.value;
                }}>
                <option value="#"></option>
                <option value="Alta">Alta</option>
                <option value="Média">Media</option>
                <option value="Baixa">Baixa</option>
              </select>
          </label>
          
          <label className="mb-4">
              Tipo:
              <select className="input-novo" name="tipo" id="tipo" onChange={(e)=>{
                  newEvent.tipo = e.target.value;
                }}>
                <option value="#"></option>
                <option value="reuniao">Reunião</option>
                <option value="deadline">Deadline</option>
                <option value="aniversario">Aniversário</option>
                <option value="outro">Outro</option>
              </select>
          </label>

          <label>
              Descrição:
              <textarea
                className="input-descricao"
                name="descricao"
                placeholder="Digite a descrição do evento"
                onChange={(e)=>{
                  newEvent.descricao = e.target.value;
                  
                }}
              ></textarea>
            </label>
        </section>

        <section className="menu">
        <Link to={"/" + equipeAtiva.info.id + "/eventos/novoEvento"}>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddEvento}
            >
              Criar Evento
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

export default NovoEvento;
