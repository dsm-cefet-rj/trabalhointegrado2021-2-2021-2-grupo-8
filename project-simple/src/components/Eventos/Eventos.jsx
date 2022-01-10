import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { deleteEventoServer, fetchEventos, selectAllEventos} from "../../storeConfig/eventosSlice";
import {
  getEquipeAtiva,
  getIsGerente,
} from "../../storeConfig/loggedUserSlice";

function Eventos() {
  const navigate = useNavigate();

  const equipeAtiva = useSelector(getEquipeAtiva);
  const isGerente = useSelector(getIsGerente);
  const eventos = useSelector(selectAllEventos);

  const [display, setDisplay] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    isGerente ? setDisplay("") : setDisplay("hide");
  }, [isGerente]);

  const handleExcluirEvento = (e) => {
    dispatch(deleteEventoServer(e));
  };
  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Próximos Eventos</h3>
        <section className="d-flex flex-wrap justify-content-evenly">
          {eventos.filter(e => e.equipe === equipeAtiva.info.id).map((e) => {
            return (
              <div className="card card-evento mb-3" key={e.id}>
                <div className={`card-header ${e.tipo}`}>{e.nome}</div>
                <div className="card-body">
                  <p className="card-text">
                    Início: {e.dataInicio} às {e.horaInicio}
                  </p>
                  <p className="card-text">
                    Fim: {e.dataFim} às {e.horaFim}
                  </p>
                  <br/>
                  <p className="card-text">{e.descricao}</p>
                </div>

                <section className={`menu ${display}`}>
                  <span
                    className="btn btn-danger mb-3 "
                    onClick={() => {
                      handleExcluirEvento(e);
                    }}
                  >
                    Excluir Evento
                  </span>


                </section>
              </div>
            );
          })}
        </section>

        <section className="menu">
          <Link
            className={`${display}`}
            to={"/" + equipeAtiva.info.id + "/eventos/formEvento"}
            state = {{evento:{}}}
          >
            <button type="button" className="btn btn-primary">
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

export default Eventos;
