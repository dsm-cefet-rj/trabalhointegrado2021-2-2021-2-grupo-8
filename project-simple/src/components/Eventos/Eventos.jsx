import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { excluirEvento } from "../../storeConfig/equipeAtivaSlice";

function Eventos() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const equipeAtiva = useSelector(state => state.equipeAtiva)

  const [display, setDisplay] = useState("");

  useEffect(() => {
    equipeAtiva.isGerente ? setDisplay("") : setDisplay("hide");
  }, [equipeAtiva]);

  const handleExcluirEvento = (e) => {
    dispatch(excluirEvento(e))
  };
  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Próximos Eventos</h3>
        <section className="d-flex flex-wrap justify-content-evenly">
          {equipeAtiva.eventos.map((e) => {
            return (
              <div className="card card-evento mb-3" key={e.idEvent}>
                <div className={`card-header ${e.tipo}`}>{e.name}</div>
                <div className="card-body">
                  <p className="card-text">
                    Início: {e.dataInicio} às {e.horaInicio}
                  </p>
                  <p className="card-text">
                    Fim: {e.dataFim} às {e.horaFim}
                  </p>
                  <br />
                  <p className="card-text">Importância: {e.importancia}</p>
                  <p className="card-text">{e.tipo}</p>
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
        
          <Link className={`${display}`} to={"/" + equipeAtiva.info.id + "/eventos/novoEvento"}>

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
