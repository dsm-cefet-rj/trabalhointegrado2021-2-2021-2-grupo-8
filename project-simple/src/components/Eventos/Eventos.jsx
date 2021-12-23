import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Eventos({ eventos, excluirEvento, isGerente, idTeam }) {
  const navigate = useNavigate();

  const [display, setDisplay] = useState("");

  useEffect(() => {
    isGerente ? setDisplay("") : setDisplay("hide");
  }, [isGerente]);

  const handleExcluirEvento = (e) => {
    excluirEvento(e);
  };
  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Próximos Eventos</h3>
        <section className="d-flex flex-wrap justify-content-evenly">
          {eventos.map((e) => {
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

                <section className="menu">
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
          <Link to={"/" + idTeam + "/eventos/novoEvento"}>
            <button type="button" className="btn btn-secondary">
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
