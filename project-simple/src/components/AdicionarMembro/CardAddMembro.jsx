import React from "react";
import semFoto from "../../assets/sem-foto-homem.jpg";

function CardAddMembro({id, name }) {
  return (
    <div className="card card-membro">
      <img className="img-fluid" src={semFoto} alt="foto membro" />

      <div className="col d-flex flex-column justify-content-evenly mt-2">
        <p className="">{id}</p>
        <p className="">{name}</p>
      </div>
      <hr />
      <div className="text-center">
        <span className="btn btn-success">
          Adicionar Membro
        </span>
      </div>
    </div>
  );
}

export default CardAddMembro;
