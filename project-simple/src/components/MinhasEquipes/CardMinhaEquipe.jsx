import React from "react";
import { Link } from "react-router-dom";
import semFoto from "../../assets/sem-foto-homem.jpg";
import MembroMinhaEquipe from "./MembroMinhaEquipe";

function CardMinhaEquipe({ equipe, nomeGerente, membros }) {

  return (
    <div className="card card-equipe">
      <Link key={equipe.id} to={equipe.id + '/home'}>
        <div className="card-header"> {equipe.name} </div>
      </Link>
      <div className="card-div container">
        <div className="row mt-2">
          <div className="col-5 text-center">
            <div className="card">
              <h6 className="mt-2">Gerente</h6>
              <img className="img-fluid p-2" src={semFoto} alt="" />
              <p className="pb-1">{nomeGerente}</p>
            </div>
          </div>
          <div className="col d-flex flex-column">
            <p className="card-text">Data de criação: {equipe.dataCriacao}</p>
            <br />
            <p className="card-text">{equipe.descricao}</p>
          </div>
        </div>
        <hr />
        <div className="row d-flex justify-content-evenly mb-2">
          <h5 className="mb-3">Membros</h5>
          {membros.map((membro) => {
            return <MembroMinhaEquipe key={membro.id} membro={membro} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CardMinhaEquipe;
