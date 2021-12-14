import React from "react";

function GerenciarEventos() {
  return (
    <body className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Próximos Eventos</h3>
        <section className="d-flex flex-wrap justify-content-evenly">
          <div className="card card-evento">
            <div className="card-header reuniao">Reunião</div>
            <div className="card-body">
              <p className="card-text">Data: 25/12/21</p>
              <p className="card-text">Horário: 09:00</p>
              <br />
              <p className="card-text">Descrição do evento</p>
              <hr />
              <a href="#" className="btn btn-primary">
                Editar Evento
              </a>
            </div>
          </div>

          <div className="card card-evento">
            <div className="card-header deadline">Deadline</div>
            <div className="card-body">
              <p className="card-text">Data: 05/10/22 </p>
              <p className="card-text">Horário: 16:00</p>
              <br />
              <p className="card-text">Descrição do evento</p>
              <hr />
              <a href="#" className="btn btn-primary">
                Editar Evento
              </a>
            </div>
          </div>

          <div className="card card-evento">
            <div className="card-header birthday">Aniversário</div>
            <div className="card-body">
              <p className="card-text">Data: 12/12/21 </p>
              <p className="card-text">Horário: 14:00</p>
              <br />
              <p className="card-text">Descrição do evento</p>
              <hr />
              <a href="#" className="btn btn-primary">
                Editar Evento
              </a>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

export default GerenciarEventos;
