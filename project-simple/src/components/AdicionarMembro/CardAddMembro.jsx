import React from "react";
import semFoto from "../../assets/sem-foto-homem.jpg";

function CardAddMembro({nome, cargo, dataIngresso}) {
  return (
    <div className="card card-membro">
      <img className="img-fluid" src={semFoto} alt="foto membro" />

      <div className="col d-flex flex-column justify-content-evenly">
        <p className="">{nome}</p>
        <p className="">{cargo}</p>
        <p className="">{dataIngresso}</p>
      </div>
      <hr />
      <div className="text-center">
        <a href="#" className="btn btn-success">
          Adicionar Membro
        </a>
      </div>
    </div>
  );
}

export default CardAddMembro;
