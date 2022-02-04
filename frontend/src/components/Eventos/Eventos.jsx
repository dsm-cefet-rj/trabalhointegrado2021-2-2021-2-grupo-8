import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  deleteEventoServer,
  fetchEventos,
  selectAllEventos,
} from "../../storeConfig/eventosSlice";
import {
  getEquipeAtiva,
  getIsGerente,
} from "../../storeConfig/loggedUserSlice";

function Eventos() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const equipeAtiva = useSelector(getEquipeAtiva);
  const isGerente = useSelector(getIsGerente);
  const allEventos = useSelector(selectAllEventos);
  const statusEventos = useSelector((state) => state.eventos.status);

  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (statusEventos === "idle" || statusEventos === "updated") {
      dispatch(fetchEventos());
    }
  }, [statusEventos, dispatch]);

  useEffect(() => {
    isGerente ? setDisplay("") : setDisplay("hide");
  }, [isGerente]);

  const handleExcluirEvento = (e) => {
    dispatch(deleteEventoServer(e));
  };

  const mapEventos = () => {
    if (statusEventos === "succeeded" || statusEventos === "updated") {
      let arrayEventos = allEventos.filter(
        (t) => t.equipe === equipeAtiva.info.id
      );

      if (arrayEventos.length > 0) {
        return arrayEventos.map((e) => (
          <div className="card card-evento mb-3" key={e.id}>
            <div className={`card-header ${e.tipo}`}>{e.nome}</div>
            <div className="card-body">
              <p className="card-text">
                Início: {e.dataInicio} às {e.horaInicio}
              </p>
              <p className="card-text">
                Fim: {e.dataFim} às {e.horaFim}
              </p>
              <br />
              <p className="card-text">{e.descricao}</p>
            </div>

            <section className={`menu ${display}`}>
              <span
                className="btn btn-danger mb-1 "
                onClick={() => {
                  handleExcluirEvento(e);
                }}
              >
                Excluir Evento
              </span>
              <Link
                className={`${display}`}
                to={"/" + equipeAtiva.info.id + "/eventos/formEvento"}
                state={{ evento: e }}
              >
                <button type="button" className="btn btn-primary">
                  Editar Evento
                </button>
              </Link>
            </section>
          </div>
        ));
      } else {
        return <div className="p-6">Não há eventos no momento</div>;
      }
    } else if (statusEventos === "loading") {
      return <div className="p-6">Carregando eventos</div>;
    } else {
      return <div className="p-6">Erro ao carregar eventos</div>;
    }
  };

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Próximos Eventos</h3>
        <section className="d-flex flex-wrap justify-content-evenly">
          {mapEventos()}
        </section>

        <section className="menu">
          <Link
            className={`${display}`}
            to={"/" + equipeAtiva.info.id + "/eventos/formEvento"}
            state={{ evento: {} }}
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
