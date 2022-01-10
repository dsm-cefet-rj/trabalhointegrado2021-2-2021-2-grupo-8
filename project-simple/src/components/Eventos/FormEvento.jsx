import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getEquipeAtiva } from "../../storeConfig/loggedUserSlice";
import { 
  addEventoServer,
  selectEventoIds,
  updateEventoServer
 } from "../../storeConfig/eventosSlice";


function FormEvento() {

  const navigate = useNavigate();

  const location = useLocation();
  const { evento } = location.state;


  const dispatch = useDispatch();
  const equipeAtiva = useSelector(getEquipeAtiva);
  const eventosIds = useSelector(selectEventoIds);

  let novoEvento = {...evento}

  const handleAddEvento = () => {
    novoEvento.equipe = equipeAtiva.info.id
    novoEvento.id = eventosIds.at(-1) + 1;
    console.log(novoEvento);
    navigate(-1)
  }

  return (
    <div className="corpo">
      <header className="cabecalho">
        <h1 className="app-nome">Project Simple</h1>
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
                  novoEvento.nome = e.target.value;
                }}
              />
            </label>

            <label className="mb-4">
              Início:
              <input
                className="input-novo"
                type="date"
                nome="inicio-evento"
                onChange={(e)=>{
                  novoEvento.dataInicio = e.target.value;
                }}
              />
              <input
                className="input-novo"
                type="time"
                nome="inicio-evento"
                onChange={(e)=>{
                  novoEvento.horaInicio = e.target.value;
                }}
              />
            </label>

            <label className="mb-4">
              Fim:
              <input
                className="input-novo"
                type="date"
                nome="fim-evento"
                onChange={(e)=>{
                  novoEvento.dataFim = e.target.value;
                }}
              />
              <input
                className="input-novo"
                type="time"
                nome="fim-evento"
                onChange={(e)=>{
                  novoEvento.horaFim = e.target.value;
                }}
              />
            </label>

          
          <label className="mb-4">
              Tipo:
              <select className="input-novo" nome="tipo" id="tipo" onChange={(e)=>{
                  novoEvento.tipo = e.target.value;
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
                nome="descricao"
                placeholder="Digite a descrição do evento"
                onChange={(e)=>{
                  novoEvento.descricao = e.target.value;
                  
                }}
              ></textarea>
            </label>
        </section>

        <section className="menu">
        <Link to={"/" + equipeAtiva.info.id + "/eventos/formEvento"}>
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

export default FormEvento;
