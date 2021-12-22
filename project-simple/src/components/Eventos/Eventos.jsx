import React from "react";
import { useNavigate } from "react-router-dom";


function Eventos({eventos}) {

  const navigate = useNavigate();

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Próximos Eventos</h3>
        <section className="d-flex flex-wrap justify-content-evenly">
      
        {
          eventos.map( e =>{
            return(
              
                <div className="card card-evento mb-3">
                  <div className="card-header ">{e.name}</div>
                  <div className="card-body">
                      <p className="card-text">Início: {e.dataInicio} às {e.horaInicio}</p>
                      <p className="card-text">Fim: {e.dataFim} às {e.horaFim}</p>
                      <br />
                      <p className="card-text">{e.descricao}</p>
                  </div>
                  
                  <div className="text-center">
                      <p>
                      <span className="btn btn-danger mb-3">
                          Excluir Evento
                      </span>
                      </p>
                  </div>
                  
                </div>
              
            );
          })
        }

        </section>
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

export default Eventos;
