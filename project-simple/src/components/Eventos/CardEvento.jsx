import React from "react";
function CardEvento() {
    return (
        <div className="card card-evento">
            <div className="card-header ">Nome Evento</div>
            <div className="card-body">
                <p className="card-text">Data: 12/12/21 </p>
                <p className="card-text">Horário: 14:00</p>
                <br />
                <p className="card-text">Descrição do evento</p>
            </div>
        </div>
    );
}

export default CardEvento;