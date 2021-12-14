
import React from "react";

function CardGerenciarEventos() {
    return (
        <div className="card card-evento">
            <div className="card-header">Nome do evento</div>
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

    );
}

export default CardGerenciarEventos;